import { DiagramFrame } from './DiagramFrame';
import { DIAGRAM_BY_ID } from './registry';

// matchDiagram() works off DIAGRAM_DATA so it stays testable without a JSX toolchain, which means its
// result carries no component. Resolve the drawing here, and fail loudly rather than rendering
// `undefined` deep inside DiagramFrame.
function sceneFor(diagram) {
  if (!diagram) return null;
  const entry = DIAGRAM_BY_ID[diagram.id];
  if (!entry?.component) throw new Error(`Diagram tanpa komponen: ${diagram.id}`);
  return entry.component;
}

// The two phases reuse the same figure on purpose: the student sees the picture while reading the
// question, then watches it move while the explanation talks over it. Same drawing, same colours,
// so the animation reads as "the thing I was just looking at, now in motion".

// Height budgets, in px, for the 1920x1080 recording frame. The question phase is the tighter one:
// a long stem plus four options already uses most of the height, and anything that pushes option D
// below the fold is worse than showing no figure at all.
const BOX = {
  question: { split: 150, full: 300 },
  explanation: { split: 250, full: 320 },
};

/**
 * Illustration for the 10s question phase: static, so it can be read at a glance before the timer
 * runs out. Renders nothing when no diagram matched confidently.
 *
 * @param {{object}|null} diagram result of matchDiagram()
 */
export function QuestionFigure({ diagram, isSplitActive = false }) {
  const Scene = sceneFor(diagram);
  if (!Scene) return null;
  const k = isSplitActive ? 'split' : 'full';
  return (
    <div className={`flex justify-center ${isSplitActive ? 'mb-1' : 'mb-3'}`}>
      <DiagramFrame title={diagram.title} caption={diagram.caption} mode="still" boxHeight={BOX.question[k]}>
        {(frame) => <Scene {...frame} />}
      </DiagramFrame>
    </div>
  );
}

/**
 * Animation for the 15s explanation phase: the same figure, now looping.
 */
export function ExplanationFigure({ diagram, isSplitActive = false }) {
  const Scene = sceneFor(diagram);
  if (!Scene) return null;
  const k = isSplitActive ? 'split' : 'full';
  return (
    <div className={`flex justify-center ${isSplitActive ? '' : 'mb-1'}`}>
      <DiagramFrame title={diagram.title} caption={diagram.caption} mode="motion" boxHeight={BOX.explanation[k]}>
        {(frame) => <Scene {...frame} />}
      </DiagramFrame>
    </div>
  );
}