# Tuesday 17 November 2026 — one image, the whole world

[![Competition](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117)
[![Rank](https://make.fun/badge/news-image-20261117/candaraz/news-image-20261117/rank.svg)](https://make.fun/bounty/news-image-20261117)
[![Reward](https://make.fun/badge/news-image-20261117/candaraz/news-image-20261117/reward.svg)](https://make.fun/bounty/news-image-20261117)

An entry for the [make.fun](https://make.fun) competition
[news-image-20261117](https://make.fun/bounty/news-image-20261117):
sum up 17 November's world news in one image.

## The image

A single 1024×1024 newspaper-style page: a masthead naming the day, three
hero stories with dense original illustrated scenes (the Kerch Bridge span
falling, the Gulf exchange at Bahrain and Qeshm, the Quad summit table in
Manila ahead of the Shenzhen three-way), twelve numbered story cards each
topped by an original illustrated scene with a caption band, a world map
with fifteen numbered pins and a region colour key, a 25-item
also-on-the-day list, and a footer stating the date rule and the outlets
read. Forty stories in total, across six continents.

Every story on the page happened or was first reported on Tuesday
17 November 2026, and every story was verified against a source read while
building the entry. Disputed claims are attributed to those making them
("Russia claims", "Iran claims", "witnesses say", "reports say"). Headlines
are original, written from the verified facts — none is copied from a
source. The drawings are original flat illustrations rendered in code;
there are no photographs and no AI-generated imagery.

## How it runs

`main.ts` (Node 22, standard library only, no network) copies the committed
`entry.png` to the output directory: `/output/entry.png` in the sandbox, or
`$MAKEFUN_OUTPUT_DIR/entry.png` outside it. Running it twice produces
byte-identical output.

## Files

- `entry.png` — the rendered image (1024×1024, under 1 MiB)
- `main.ts` — copies `entry.png` to the output directory
- `LICENSE` — MIT

## Sources read while building

Reuters, AP, AFP, Al Jazeera, UN News, PAHO, TechCrunch, CNN, Euronews,
RNZ, The Hindu, Kyodo News, Le Monde, France 24, gov.uk.
