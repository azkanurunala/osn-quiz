/**
 * mathRender.jsx — tiny inline-math renderer (no KaTeX/MathJax).
 *
 * Handles a *small* LaTeX-ish subset that covers SD-level OSN content:
 *   \frac{a}{b}       stacked fraction (CSS flex column + border-top vinculum)
 *   a^{b} | a^b       <sup>
 *   a_{b} | a_b       <sub>
 *   \sqrt{x}          √ + overline (border-top on the radicand span)
 *   \pi \theta        Unicode π θ
 *   \alpha \beta      Unicode α β
 *   \cdot             ·
 *   \times            ×
 *   \div              ÷
 *   ^\circ            °
 *
 * Usage:
 *   import { MathText, Math } from "./utils/mathRender";
 *
 *   // Mixed prose + inline math (delimited by $...$):
 *   <MathText text="Luas segitiga = $\\frac{1}{2} \\cdot a \\cdot t$ cm²" />
 *
 *   // Just an expression (no $ needed):
 *   <Math expr="\\frac{22}{7}" />
 *
 * Example SD-level expressions that render correctly:
 *   $\frac{3}{4} + \frac{1}{2}$           // pecahan
 *   $2^{3} \cdot 5 = 40$                  // perpangkatan
 *   $\sqrt{144} = 12$                     // akar
 *   $\pi \cdot r^{2}$                     // luas lingkaran
 *   $30^\circ + 60^\circ = 90^\circ$      // sudut
 *   $H_{2}O$                              // subskrip (IPA)
 *
 * Design notes:
 *   - No deps; pure JSX + inline styles so it works in any Tailwind/Vite app.
 *   - Parser is recursive-descent over a tiny grammar — handles nested braces
 *     (e.g. \frac{\frac{1}{2}}{3}) but does NOT pretend to be full LaTeX.
 *   - All output spans are inline so it composes inside <p>, <li>, table cells.
 */

import React from "react";

// ---------- token-level symbol map ----------
const SYMBOLS = {
  "\\pi": "π",
  "\\theta": "θ",
  "\\alpha": "α",
  "\\beta": "β",
  "\\gamma": "γ",
  "\\delta": "δ",
  "\\mu": "μ",
  "\\cdot": "·",
  "\\times": "×",
  "\\div": "÷",
  "\\pm": "±",
  "\\leq": "≤",
  "\\geq": "≥",
  "\\neq": "≠",
  "\\approx": "≈",
  "\\infty": "∞",
};

// ---------- styles ----------
const fracStyle = {
  display: "inline-flex",
  flexDirection: "column",
  verticalAlign: "middle",
  textAlign: "center",
  margin: "0 0.15em",
  lineHeight: 1.05,
  fontSize: "0.95em",
};
const numStyle = {
  display: "block",
  padding: "0 0.25em 0.05em",
  borderBottom: "1px solid currentColor",
};
const denStyle = {
  display: "block",
  padding: "0.05em 0.25em 0",
};
const sqrtBarStyle = {
  display: "inline-block",
  borderTop: "1px solid currentColor",
  padding: "0 0.15em",
  marginLeft: "-0.1em",
};
const sqrtSymStyle = {
  display: "inline-block",
  verticalAlign: "middle",
};

// ---------- parser ----------
// Reads a {...}-balanced group starting at index `i` (which must be at '{').
// Returns { body, next } — body is the inner string, next is the index just
// after the closing '}'. Returns null if braces are unbalanced.
function readBraceGroup(s, i) {
  if (s[i] !== "{") return null;
  let depth = 0;
  for (let j = i; j < s.length; j++) {
    if (s[j] === "{") depth++;
    else if (s[j] === "}") {
      depth--;
      if (depth === 0) return { body: s.slice(i + 1, j), next: j + 1 };
    }
  }
  return null;
}

// Reads a single "atom" for ^ / _ when no braces — one char, or a backslash
// command like \pi.
function readAtom(s, i) {
  if (i >= s.length) return { body: "", next: i };
  if (s[i] === "\\") {
    let j = i + 1;
    while (j < s.length && /[a-zA-Z]/.test(s[j])) j++;
    return { body: s.slice(i, j), next: j };
  }
  return { body: s[i], next: i + 1 };
}

// Render an expression (no $ delimiters) into a React fragment.
function renderExpr(expr, keyPrefix = "m") {
  const out = [];
  let buf = "";
  let i = 0;
  let k = 0;
  const flush = () => {
    if (buf) {
      out.push(buf);
      buf = "";
    }
  };
  const push = (node) => {
    flush();
    out.push(<React.Fragment key={`${keyPrefix}-${k++}`}>{node}</React.Fragment>);
  };

  while (i < expr.length) {
    const ch = expr[i];

    // ^\circ  →  °  (special-case before generic ^)
    if (expr.startsWith("^\\circ", i)) {
      buf += "°";
      i += 6;
      continue;
    }

    if (ch === "\\") {
      // \frac{a}{b}
      if (expr.startsWith("\\frac", i)) {
        const a = readBraceGroup(expr, i + 5);
        const b = a ? readBraceGroup(expr, a.next) : null;
        if (a && b) {
          push(
            <span style={fracStyle}>
              <span style={numStyle}>{renderExpr(a.body, `${keyPrefix}-n${k}`)}</span>
              <span style={denStyle}>{renderExpr(b.body, `${keyPrefix}-d${k}`)}</span>
            </span>
          );
          i = b.next;
          continue;
        }
      }
      // \sqrt{x}
      if (expr.startsWith("\\sqrt", i)) {
        const g = readBraceGroup(expr, i + 5);
        if (g) {
          push(
            <span>
              <span style={sqrtSymStyle}>{"√"}</span>
              <span style={sqrtBarStyle}>{renderExpr(g.body, `${keyPrefix}-r${k}`)}</span>
            </span>
          );
          i = g.next;
          continue;
        }
      }
      // \cmd  →  symbol lookup
      let j = i + 1;
      while (j < expr.length && /[a-zA-Z]/.test(expr[j])) j++;
      const cmd = expr.slice(i, j);
      if (SYMBOLS[cmd]) {
        buf += SYMBOLS[cmd];
        i = j;
        continue;
      }
      // unknown command — emit verbatim and move on
      buf += cmd;
      i = j;
      continue;
    }

    if (ch === "^") {
      const after = i + 1 < expr.length && expr[i + 1] === "{"
        ? readBraceGroup(expr, i + 1)
        : readAtom(expr, i + 1);
      push(<sup>{renderExpr(after.body, `${keyPrefix}-s${k}`)}</sup>);
      i = after.next;
      continue;
    }

    if (ch === "_") {
      const after = i + 1 < expr.length && expr[i + 1] === "{"
        ? readBraceGroup(expr, i + 1)
        : readAtom(expr, i + 1);
      push(<sub>{renderExpr(after.body, `${keyPrefix}-b${k}`)}</sub>);
      i = after.next;
      continue;
    }

    buf += ch;
    i++;
  }
  flush();
  return out;
}

// ---------- public components ----------

/** Render a single math expression (no $-delimiters expected). */
export function Math({ expr = "", className = "", style }) {
  return (
    <span className={className} style={{ whiteSpace: "nowrap", ...style }}>
      {renderExpr(String(expr), "x")}
    </span>
  );
}

/**
 * Render mixed text + math. Math segments are delimited by $...$.
 * Unmatched $ are rendered as literal text.
 */
export function MathText({ text = "", className = "", style }) {
  const s = String(text);
  const parts = [];
  let i = 0;
  let buf = "";
  let k = 0;

  while (i < s.length) {
    if (s[i] === "$") {
      const end = s.indexOf("$", i + 1);
      if (end === -1) {
        buf += s[i];
        i++;
        continue;
      }
      if (buf) {
        parts.push(<React.Fragment key={`t-${k++}`}>{buf}</React.Fragment>);
        buf = "";
      }
      const expr = s.slice(i + 1, end);
      parts.push(<Math key={`m-${k++}`} expr={expr} />);
      i = end + 1;
      continue;
    }
    buf += s[i];
    i++;
  }
  if (buf) parts.push(<React.Fragment key={`t-${k++}`}>{buf}</React.Fragment>);

  return (
    <span className={className} style={style}>
      {parts}
    </span>
  );
}

export default MathText;
