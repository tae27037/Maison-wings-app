# Realistic images for Maison Wigs

The app picks images up automatically by file name. Nothing else to configure: drop files in, run `npm run dev`.
Missing files fall back to the built-in illustration, so you can add them one by one.

| Where it shows | Folder | File name | Format |
|---|---|---|---|
| Cards, quiz results, care tracker, community | `src/assets/wigs/` | `aurora.jpg` … (style id) | JPG/WebP, 3:4 portrait, wig on a mannequin or model, plain background |
| Camera try-on overlay | `src/assets/tryon/` | `aurora.png` … | **PNG with transparent background**, front view, face area left empty/not covered, 800×1040 |
| Community before / after | `src/assets/people/` | `p1-before.jpg`, `p1-after.jpg` … | JPG, 3:4, **same person, same pose, same light** in both |

Style ids: aurora, lilu, amelie, sylvia, nora, ivy, clara, mira.
Community post ids: p1 … p5 (p1 and p4 are before/after, the others use only `-after`).

Keep files under ~300 KB each (squoosh.app); phones load them over mobile data.

## Prompts (for Midjourney / Flux / Firefly / Ideogram)

Use the same suffix on everything for a consistent look:
`photorealistic, 85mm, soft studio light, natural skin texture, individual hair strands visible, no text, no watermark`

**Wig product photo** (`src/assets/wigs/`)
> Long wavy copper-auburn synthetic wig on a neutral mannequin head, front three-quarter view, side-swept fringe, soft studio backdrop in light lilac-grey, 3:4 portrait, [suffix]

Change per style: aurora = long wavy copper; lilu = medium chestnut with side braid; amelie = long curly honey blonde; sylvia = chin-length dark brown bob; nora = short black pixie; ivy = long straight rose pink; clara = bob caramel; mira = short ash grey.

**Try-on cut-out** (`src/assets/tryon/`): generate the wig on a white or green background, front view, perfectly symmetrical, hairline visible, then remove the background (remove.bg, Photoshop, or Canva "Background remover") and export PNG.
> Front view of a long wavy copper wig floating on a plain white background, symmetrical, hairline and parting clearly visible, no head, no face, studio product shot, [suffix]

Tip: if the generator draws a head, keep it and cut only the hair; the app places the cut-out over the user's face, so the forehead and ears should not be covered.

**Before / after** (`src/assets/people/`): generate the "before" first, then ask the tool to keep the same person and change only the hair (Midjourney `--cref`, Flux Kontext, or Photoshop Generative Fill on the hair area).
> before: Portrait of a woman in her 30s with thin short natural hair, plain bedroom background, daylight from a window, smartphone photo look, [suffix]
> after: same woman, same pose and lighting, wearing a natural long wavy copper wig with side-swept fringe, hairline blended, [suffix]

For authenticity use a phone-photo look (slightly imperfect light) rather than studio glamour, and a mix of ages, skin tones and hair types.

## Licensing and honesty

- Use images you generated yourself, photographed, or have a licence for. Do not download wig photos from other shops.
- Do not use real customers' faces without written consent.
- AI-generated people in "before / after" posts are not real customers. If you show them as community members, label the feed as examples until you have real user posts, otherwise it can count as misleading advertising (EU/Czech consumer law).
