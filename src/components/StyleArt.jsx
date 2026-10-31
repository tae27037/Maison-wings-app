import Wig from './Wig';

// Shows the real photo of a wig when one exists (src/assets/wigs/<id>.jpg),
// otherwise falls back to the SVG illustration.
export default function StyleArt({ style, height, label }) {
  if (style.image) {
    return (
      <img
        src={style.image}
        alt={label ?? ''}
        loading="lazy"
        style={{
          display: 'block',
          height,
          width: Math.round((height * 3) / 4),
          maxWidth: '100%',
          objectFit: 'cover',
          borderRadius: 12,
        }}
      />
    );
  }
  return <Wig kind={style.kind} color={style.color} height={height} label={label} />;
}
