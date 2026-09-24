/*
 * C.F.S. Roofing & Gutters — central business data.
 * Every fact here comes from the supplied business information.
 * Nothing is invented: no prices, hours, reviews, ratings, certifications,
 * project counts or service areas.
 */

export const BUSINESS = {
  name: 'C.F.S. Roofing & Gutters',
  shortName: 'C.F.S.',
  establishedLine: 'Servicing the timber trusses industry since 1994.',
  description:
    'C.F.S. Roofing & Gutters specialises in the design, supply and installation of prefabricated timber roof trusses and roof coverings for domestic and commercial applications.',
  address: {
    line1: '21 Pomona Park Road',
    line2: 'Pomona AH',
    line3: 'Kempton Park',
    country: 'South Africa',
  },
  phones: ['072 237 6786', '082 851 4755'],
  emails: ['jan@cfsroofing.co.za', 'grant@cfsroofing.co.za'],
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('21 Pomona Park Road, Pomona AH, Kempton Park, South Africa'),
  social: ['Facebook', 'Instagram'], /* profile URLs not supplied — names only, no links */
};

export const SERVICES = [
  {
    id: 'trusses',
    num: '01',
    title: 'Timber Roof Trusses',
    lead: 'Design, supply and installation of prefabricated timber roof trusses and roof coverings.',
    points: [
      'Prefabricated timber roof trusses, designed and supplied for each project',
      'Installation for domestic and commercial applications',
      'C.F.S. Roofing & Gutters has been servicing the timber trusses industry since 1994',
    ],
  },
  {
    id: 'coverings',
    num: '02',
    title: 'Roof Coverings',
    lead: 'A range of roof coverings installed for residential, industrial and commercial buildings.',
    points: [
      'Metal roof sheeting, including corrugated and Pro Lock roof sheets',
      'Concrete roof tiles from various manufacturers, including Marley, Lafarge/Monier Roofing, Brickor and Coverland',
      'Material and colour options discussed per project',
    ],
  },
  {
    id: 'sheeting-flashing',
    num: '03',
    title: 'Sheeting & Flashing',
    lead: 'Sheeting and flashing products supplied and installed with roof coverings.',
    points: [
      'Corrugated sheeting',
      'IBR sheeting',
      'Chromadek sheeting',
      'Over tile flashing',
      'Under tile flashing',
      'Roll top ridging',
    ],
  },
  {
    id: 'tiles',
    num: '04',
    title: 'Concrete Roof Tiles',
    lead: 'Concrete roof tile systems from various manufacturers.',
    points: [
      'Marley tile profiles, including Double Roman, Mendip, Homestead, Ludlow, Modern and Monarch',
      'Coverland tile profiles, including Cupola, Double Roman, Elite, Perspective, Renown and Taunus',
      'Tiles installed from various manufacturers, including Marley, Lafarge/Monier Roofing, Brickor and Coverland',
    ],
  },
  {
    id: 'beams',
    num: '05',
    title: 'Laminated Timber Beams',
    lead: 'Laminated timber beams — a natural alternative to steel or concrete.',
    points: [
      'Made by gluing timber together under pressure and heat',
      'Strong, stable and rigid structural members',
      'High weight-to-strength ratio, dimensional stability and load carrying capacity',
      'Fire resistance and structural engineering capability',
    ],
  },
  {
    id: 'barge-fascia',
    num: '06',
    title: 'Bargeboards & Fascia Boards',
    lead: 'Roofline timber elements that protect and finish the roof edge.',
    points: [
      'Bargeboards at the gable end of the roof, protecting roof timbers and finishing the roofline',
      'Fascia positioned beneath the roof edge and behind the eavestrough',
      'Fascia can be clad with aluminium to protect the timber while providing an aesthetic finish',
    ],
  },
  {
    id: 'domestic',
    num: '07',
    title: 'Domestic Roofing',
    lead: 'Roofing for alterations, additions and new residential developments.',
    points: [
      'Alterations and additions',
      'New residences',
      'Townhouse developments',
      'Cluster developments',
    ],
  },
  {
    id: 'commercial',
    num: '08',
    title: 'Commercial Roofing',
    lead: 'Roofing capability for commercial building projects.',
    points: [
      'Office blocks',
      'Factories',
      'Shopping malls',
      'Schools',
      'Hospitals',
    ],
  },
];

export const DOMESTIC_SCOPE = [
  'Timber roof trusses',
  'Relevant sundry materials',
  'Under-tile membrane',
  'Insulation membrane',
  'Fascia boards',
  'Barge boards',
  'Related installation requirements',
];

export const COMMERCIAL_FOCUS = [
  'Service',
  'Quality workmanship',
  'Cost effectiveness',
  'Accurate planning',
  'Design coordination',
  'Installation',
];

export const TILE_MAKERS = {
  Marley: [
    'Double Roman',
    'Double Roman Plus',
    'Mendip',
    'Homestead',
    'Double Roman Plus Ludlow',
    'Modern',
    'Monarch',
  ],
  Coverland: ['Cupola', 'Double Roman', 'Elite', 'Perspective', 'Renown', 'Taunus'],
};

export const METAL_COVERINGS = [
  'Metal roof sheeting',
  'Corrugated roof sheeting',
  'Pro Lock roof sheets',
];

export const METAL_MATERIALS = [
  'Chromadek',
  'Colorplus',
  'SAFAL',
];

export const SHEETING_FLASHING = [
  'Corrugated Sheeting',
  'IBR Sheeting',
  'Chromadek Sheeting',
  'Over Tile Flashing',
  'Under Tile Flashing',
  'Roll Top Ridging',
];

export const CHROMADEK = {
  heatLine:
    'Certain Chromadek colours use an advanced thermal technology paint system incorporating heat-reflective pigment, providing an up to 8°C cooler benefit, as supplied by the manufacturer.',
  heatColours: ['Charcoal Grey', 'Dark Dolphin', 'Aloe Green', 'Buffalo Brown'],
  strengthLine:
    'As supplied by the manufacturer: Chromadek is lighter than concrete tiles and can reduce roof structure weight. The paint system is designed for improved durability.',
  colours: ['Dove Grey', 'Charcoal Grey', 'Dark Dolphin', 'Aloe Green', 'Buffalo Brown'],
};

export const TRUST_PILLARS = [
  {
    title: 'Established since 1994',
    body: 'C.F.S. Roofing & Gutters has been servicing the timber trusses industry since 1994.',
  },
  {
    title: 'Domestic + Commercial',
    body: 'Roofing capability across residential and commercial applications.',
  },
  {
    title: 'Design + Supply + Installation',
    body: 'An integrated roofing service, from truss design to installed roof covering.',
  },
  {
    title: 'Technical material knowledge',
    body: 'Roof coverings, sheeting, flashing, concrete tiles and laminated timber beams.',
  },
  {
    title: 'Project experience',
    body: 'The business has completed numerous projects in association with leading contractors and manufacturers in South Africa.',
  },
];

export const QUOTE_FLOW = {
  services: [
    'Roofing',
    'Timber Roof Trusses',
    'Roof Coverings',
    'Roof Sheeting',
    'Roof Tiles',
    'Flashing / Ridging',
    'Laminated Timber Beams',
    'Bargeboards / Fascia Boards',
    'Domestic Roofing',
    'Commercial Roofing',
    'Seamless Gutters',
    'Other Roofing Enquiry',
  ],
  projectTypes: [
    'New Build',
    'Alteration / Addition',
    'Residential',
    'Townhouse / Cluster Development',
    'Commercial',
    'Industrial',
    'Not Sure',
  ],
  helpTypes: [
    'Request a Quote',
    'Request a Consultation',
    'Discuss a Roofing Project',
    'General Enquiry',
  ],
  times: ['Morning', 'Midday', 'Afternoon', 'No Preference'],
};

export const FAQS = [
  {
    q: 'What roofing services does C.F.S. Roofing & Gutters provide?',
    a: 'The design, supply and installation of prefabricated timber roof trusses and roof coverings for domestic and commercial applications — including metal roof sheeting, concrete roof tiles, sheeting and flashing, laminated timber beams, bargeboards and fascia boards.',
  },
  {
    q: 'Do you work on residential projects?',
    a: 'Yes. C.F.S. Roofing & Gutters caters for domestic requirements including alterations, additions, new residences, townhouse developments and cluster developments.',
  },
  {
    q: 'Do you handle commercial roofing?',
    a: 'Yes. The business works on commercial projects including office blocks, factories, shopping malls, schools and hospitals.',
  },
  {
    q: 'Do you install timber roof trusses?',
    a: 'Yes. Design, supply and installation of prefabricated timber roof trusses is a core service, and the business has been servicing the timber trusses industry since 1994.',
  },
  {
    q: 'What roof coverings do you install?',
    a: 'Metal roof sheeting (including corrugated sheeting and Pro Lock roof sheets) and concrete roof tiles from various manufacturers, including Marley, Lafarge/Monier Roofing, Brickor and Coverland.',
  },
  {
    q: 'Do you install flashing?',
    a: 'Yes. Over-tile flashing, under-tile flashing and roll-top ridging form part of the sheeting and flashing offering.',
  },
  {
    q: 'Where are you located?',
    a: '21 Pomona Park Road, Pomona AH, Kempton Park, South Africa.',
  },
  {
    q: 'Can I request a quote?',
    a: 'Yes. Use the Request a Quote flow to tell us what you need — your enquiry goes directly to the C.F.S. Roofing & Gutters team, who will get back to you to confirm the next steps.',
  },
];

/* Gallery — illustrative contextual imagery only. No image is presented as a
   completed C.F.S. project. When real project photography becomes available
   it replaces these entries without any structural change. */

export const GALLERY = {
  note:
    'Roofing imagery shown for context. Real C.F.S. project photography will be added as it becomes available.',
  categories: ['All', 'Roof Structures', 'Roof Coverings', 'Roofline Details', 'Commercial'],
  items: [
    {
      src: '/media/hero-trusses.jpg',
      category: 'Roof Structures',
      alt: 'Timber roof trusses installed on a residential building under construction',
      caption: 'Prefabricated timber roof trusses',
    },
    {
      src: '/media/commercial-roof.jpg',
      category: 'Commercial',
      alt: 'Large commercial building roof structure under construction',
      caption: 'Commercial roof structure',
    },
    {
      src: '/media/metal-sheeting.jpg',
      category: 'Roof Coverings',
      alt: 'IBR metal roof sheeting on a commercial building',
      caption: 'IBR metal roof sheeting',
    },
    {
      src: '/media/concrete-tiles.jpg',
      category: 'Roof Coverings',
      alt: 'Concrete roof tiles on a pitched residential roof',
      caption: 'Concrete roof tiles',
    },
    {
      src: '/media/fascia-roofline.jpg',
      category: 'Roofline Details',
      alt: 'Fascia board and bargeboard detail on a residential gable end',
      caption: 'Fascia and bargeboard detail',
    },
    {
      src: '/media/laminated-beams.jpg',
      category: 'Roof Structures',
      alt: 'Laminated timber beams forming a vaulted ceiling structure',
      caption: 'Laminated timber beams',
    },
  ],
};
