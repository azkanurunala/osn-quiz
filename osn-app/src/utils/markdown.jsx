import React from 'react';

const INLINE_RE = /(\*\*[^*\n]+\*\*|\*[^*\n]+\*|`[^`\n]+`|_[^_\n]+_)/g;

function renderInline(text, keyPrefix, dark) {
  if (text == null) return null;
  const parts = String(text).split(INLINE_RE);
  return parts.map((part, i) => {
    if (!part) return null;
    const k = `${keyPrefix}-${i}`;
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return <strong key={k} className={dark ? 'font-extrabold text-white' : 'font-extrabold text-gray-900'}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('`') && part.endsWith('`') && part.length > 2) {
      return <code key={k} className={`px-1.5 py-0.5 rounded text-[0.85em] font-mono ${dark ? 'bg-slate-800 text-red-300' : 'bg-gray-100 text-brand-primary'}`}>{part.slice(1, -1)}</code>;
    }
    if (((part.startsWith('*') && part.endsWith('*')) || (part.startsWith('_') && part.endsWith('_'))) && part.length > 2) {
      return <em key={k} className="italic">{part.slice(1, -1)}</em>;
    }
    return <React.Fragment key={k}>{part}</React.Fragment>;
  });
}

export function InlineMarkdown({ text, dark = false }) {
  return <>{renderInline(text, 'inl', dark)}</>;
}

export function MarkdownText({ text, dark = false }) {
  if (!text) return null;
  const lines = String(text).split('\n');
  const blocks = [];
  let i = 0;
  let key = 0;

  const isListItem = (l) => /^[-*]\s/.test(l);
  const isOrderedItem = (l) => /^\d+\.\s/.test(l);
  const isHeading = (l) => l.startsWith('### ') || l.startsWith('## ') || l.startsWith('# ');
  const isHr = (l) => /^---+$/.test(l.trim());
  const isQuote = (l) => l.startsWith('> ');
  const isTableRow = (l) => l.trim().startsWith('|') && l.trim().endsWith('|');

  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) { i++; continue; }

    if (isHr(line)) {
      blocks.push(<hr key={`hr-${key++}`} className={`my-3 border-t ${dark ? 'border-slate-700' : 'border-gray-200'}`} />);
      i++; continue;
    }

    if (isHeading(line)) {
      const level = line.startsWith('### ') ? 3 : line.startsWith('## ') ? 2 : 1;
      const content = line.replace(/^#+\s/, '');
      const sizeCls = level === 1 ? 'text-lg' : level === 2 ? 'text-base' : 'text-sm';
      blocks.push(
        <h3 key={`h-${key++}`} className={`font-heading font-bold ${sizeCls} mt-4 mb-2 ${dark ? 'text-white' : 'text-gray-900'}`}>
          {renderInline(content, `h-${key}`, dark)}
        </h3>
      );
      i++; continue;
    }

    if (isQuote(line)) {
      const quoteLines = [];
      while (i < lines.length && isQuote(lines[i])) {
        quoteLines.push(lines[i].slice(2));
        i++;
      }
      blocks.push(
        <blockquote key={`bq-${key++}`} className={`border-l-4 pl-3 py-1 my-2 text-sm ${dark ? 'border-blue-700 text-slate-300' : 'border-brand-accent/60 text-gray-600'}`}>
          {quoteLines.map((q, qi) => <div key={qi}>{renderInline(q, `bq-${qi}`, dark)}</div>)}
        </blockquote>
      );
      continue;
    }

    if (isTableRow(line) && i + 1 < lines.length && /^\|[\s:|-]+\|$/.test(lines[i + 1].trim())) {
      const header = line.split('|').slice(1, -1).map(c => c.trim());
      i += 2;
      const rows = [];
      while (i < lines.length && isTableRow(lines[i])) {
        rows.push(lines[i].split('|').slice(1, -1).map(c => c.trim()));
        i++;
      }
      blocks.push(
        <div key={`tbl-${key++}`} className="overflow-x-auto my-3 rounded-xl border" style={{ borderColor: dark ? '#1e293b' : '#e5e7eb' }}>
          <table className={`w-full text-xs border-collapse ${dark ? 'text-slate-200' : 'text-gray-700'}`}>
            <thead>
              <tr className={dark ? 'bg-slate-800/80' : 'bg-gray-50'}>
                {header.map((h, hi) => (
                  <th key={hi} className={`px-3 py-2 text-left font-bold border-b ${dark ? 'border-slate-700' : 'border-gray-200'}`}>
                    {renderInline(h, `th-${hi}`, dark)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, ri) => (
                <tr key={ri} className={dark ? 'odd:bg-slate-900/40' : 'odd:bg-gray-50/40'}>
                  {r.map((c, ci) => (
                    <td key={ci} className={`px-3 py-2 align-top border-t ${dark ? 'border-slate-800' : 'border-gray-100'}`}>
                      {renderInline(c, `td-${ri}-${ci}`, dark)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    if (isListItem(line)) {
      const items = [];
      while (i < lines.length && isListItem(lines[i])) {
        items.push(lines[i].replace(/^[-*]\s/, ''));
        i++;
      }
      blocks.push(
        <ul key={`ul-${key++}`} className={`list-disc pl-5 space-y-1 my-2 text-sm leading-relaxed ${dark ? 'text-slate-200' : 'text-gray-700'}`}>
          {items.map((it, ii) => <li key={ii}>{renderInline(it, `li-${ii}`, dark)}</li>)}
        </ul>
      );
      continue;
    }

    if (isOrderedItem(line)) {
      const items = [];
      while (i < lines.length && isOrderedItem(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s/, ''));
        i++;
      }
      blocks.push(
        <ol key={`ol-${key++}`} className={`list-decimal pl-5 space-y-1 my-2 text-sm leading-relaxed ${dark ? 'text-slate-200' : 'text-gray-700'}`}>
          {items.map((it, ii) => <li key={ii}>{renderInline(it, `li-${ii}`, dark)}</li>)}
        </ol>
      );
      continue;
    }

    const paraLines = [line];
    i++;
    while (
      i < lines.length &&
      lines[i].trim() &&
      !isHeading(lines[i]) &&
      !isListItem(lines[i]) &&
      !isOrderedItem(lines[i]) &&
      !isTableRow(lines[i]) &&
      !isQuote(lines[i]) &&
      !isHr(lines[i])
    ) {
      paraLines.push(lines[i]);
      i++;
    }
    blocks.push(
      <p key={`p-${key++}`} className={`my-2 text-sm leading-relaxed ${dark ? 'text-slate-200' : 'text-gray-700'}`}>
        {paraLines.map((pl, pli) => (
          <React.Fragment key={pli}>
            {pli > 0 && <br />}
            {renderInline(pl, `p-${pli}`, dark)}
          </React.Fragment>
        ))}
      </p>
    );
  }

  return <>{blocks}</>;
}
