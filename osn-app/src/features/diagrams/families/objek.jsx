import { anim } from '../anim';
import { matchObjekFoto } from '../objekFoto';

// A reviewed object picture (see scripts/build-objek-foto.mjs). Still in the question phase; a
// slow zoom in the explanation phase so the student sees it is the same picture, now "alive".
export function ObjekFoto({ motion, question, width = 520, height = 300 }) {
  const m = matchObjekFoto(question);
  if (!m) return null;
  const href = `${import.meta.env?.BASE_URL ?? '/'}${m.objek.file}`;
  return (
    <>
      <rect x="0" y="0" width={width} height={height} fill="#ffffff" />
      <g {...anim(motion, 'ix-zoom', { duration: 6, origin: `${width / 2}px ${height / 2}px` })}>
        <image href={href} x="8" y="8" width={width - 16} height={height - 16} preserveAspectRatio="xMidYMid meet" />
      </g>
    </>
  );
}

ObjekFoto.usable = (question) => Boolean(matchObjekFoto(question));
