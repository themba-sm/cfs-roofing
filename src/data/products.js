/* Product catalog imagery and one-line descriptions.
   Images are the respective manufacturers' / industry suppliers' published product
   imagery, used for product identification. Availability is confirmed per project. */

const img = (n) => `/media/products/${n}.jpg`;

export const SHEETING_FLASHING_CATALOG = [
  {
    name: 'Corrugated Sheeting',
    img: img('sheeting-corrugated'),
    alt: 'Corrugated roof sheeting profile close-up',
    desc: 'The classic S-ribbed profile, one of the most widely used sheeting options for domestic and agricultural roofs.',
  },
  {
    name: 'IBR Sheeting',
    img: img('sheeting-ibr'),
    alt: 'IBR roof sheeting profile close-up',
    desc: 'Inverted Box Rib — a square-fluted profile widely used on domestic, commercial and industrial roofs.',
  },
  {
    name: 'Chromadek Sheeting',
    img: img('sheeting-chromadek'),
    alt: 'Chromadek pre-painted roof sheeting close-up',
    desc: 'Arc coil-coated, pre-painted steel sheeting supplied in a range of colours and profiles.',
  },
  {
    name: 'Over Tile Flashing',
    img: img('flashing-overtile'),
    alt: 'Over tile flashing for roof-to-wall junctions',
    desc: 'Caps the roof-to-wall junction over the tile line where a roof joins a parapet or abutting wall.',
  },
  {
    name: 'Under Tile Flashing',
    img: img('flashing-undertile'),
    alt: 'Under tile flashing for parapet wall junctions',
    desc: 'Used where the roof joins against a parapet wall, dressed under the tiles to keep the junction weathertight.',
  },
  {
    name: 'Roll Top Ridging',
    img: img('flashing-rolltop'),
    alt: 'Roll top ridging for sheeted roof apex',
    desc: 'Roll-top ridge capping that seals the apex of sheeted roofs against wind and water.',
  },
];

export const MARLEY_CATALOG = [
  {
    name: 'Double Roman',
    img: img('marley-double-roman'),
    alt: 'Marley Double Roman concrete roof tile close-up',
    desc: 'The classic double-roman interlocking concrete tile profile.',
  },
  {
    name: 'Double Roman Plus',
    img: img('marley-double-roman-plus'),
    alt: 'Marley Double Roman Plus concrete roof tile close-up',
    desc: 'A development of the classic Double Roman profile from the Marley concrete range.',
  },
  {
    name: 'Mendip',
    img: img('marley-mendip'),
    alt: 'Marley Mendip concrete roof tile close-up',
    desc: 'A double-pantile interlocking tile with elegant flowing lines, suited to low-pitch roofs.',
  },
  {
    name: 'Homestead',
    img: img('marley-homestead'),
    alt: 'Marley Homestead concrete roof tile close-up',
    desc: 'A flat-profiled concrete tile with clean, simple lines.',
  },
  {
    name: 'Ludlow',
    img: img('marley-ludlow'),
    alt: 'Marley Ludlow concrete roof tile close-up',
    desc: 'A flat, smooth-profiled tile with a contemporary finish.',
  },
  {
    name: 'Modern',
    img: img('marley-modern'),
    alt: 'Marley Modern concrete roof tile close-up',
    desc: 'A traditional flat concrete tile profile.',
  },
  {
    name: 'Monarch',
    img: img('marley-monarch'),
    alt: 'Marley Monarch concrete roof tile close-up',
    desc: 'A strongly profiled interlocking tile with bold shadow lines.',
  },
];

export const COVERLAND_CATALOG = [
  {
    name: 'Cupola',
    img: img('coverland-cupola'),
    alt: 'Coverland Cupola concrete roof tile close-up',
    desc: 'A deep-rolled profile with bold curves and unmistakable Mediterranean character.',
  },
  {
    name: 'Double Roman',
    img: img('coverland-double-roman'),
    alt: 'Coverland Double Roman concrete roof tile close-up',
    desc: 'Coverland\u2019s double-roman interlocking profile.',
  },
  {
    name: 'Elite',
    img: img('coverland-elite'),
    alt: 'Coverland Elite concrete roof tile close-up',
    desc: 'A slim, low-profile tile with refined, contemporary lines.',
  },
  {
    name: 'Perspective',
    img: img('coverland-perspective'),
    alt: 'Coverland Perspective concrete roof tile close-up',
    desc: 'A modern-profile interlocking tile.',
  },
  {
    name: 'Renown',
    img: img('coverland-renown'),
    alt: 'Coverland Renown concrete roof tile close-up',
    desc: 'A distinct tile with a subtle geometric shape.',
  },
  {
    name: 'Taunus',
    img: img('coverland-taunus'),
    alt: 'Coverland Taunus concrete roof tile close-up',
    desc: 'A modern-profile tile with strong lines.',
  },
];

export const ALSO_SUPPLY_CATALOG = [
  {
    name: 'Composite Beams',
    img: img('beams-composite'),
    alt: 'Engineered composite timber beams close-up',
    desc: 'Engineered composite beams supplied and installed as structural elements.',
  },
  {
    name: 'Laminated Timber Beams',
    img: img('beams-laminated'),
    alt: 'Laminated timber (glulam) beams close-up',
    desc: 'Glued laminated timber — a strong, stable, natural alternative to steel or concrete.',
  },
  {
    name: 'Bargeboards',
    img: img('roofline-bargeboard'),
    alt: 'Fibre cement bargeboard close-up',
    desc: 'Boards at the gable end of the roof, protecting roof timbers and finishing the roofline.',
  },
  {
    name: 'Fascia Boards',
    img: img('roofline-fascia'),
    alt: 'Fascia board close-up at the roof edge',
    desc: 'Boards beneath the roof edge and behind the eavestrough; can be clad with aluminium.',
  },
  {
    name: 'Pine Ceiling',
    img: img('ceiling-pine'),
    alt: 'Tongue and groove pine ceiling boards close-up',
    desc: 'Tongue-and-groove SA pine ceiling boards for under-roof and interior ceilings.',
  },
];
