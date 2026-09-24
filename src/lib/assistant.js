/*
 * C.F.S. Assistant — curated answer engine.
 *
 * Every answer is drawn verbatim from the business information supplied by
 * C.F.S. Roofing & Gutters. The assistant never invents prices, hours,
 * availability, reviews or guarantees: if a question falls outside this
 * knowledge base, it says so and hands the visitor to the quote flow,
 * WhatsApp or a phone call.
 */

import { BUSINESS } from '../data/site.js';

const waNumber = '27' + BUSINESS.phones[0].replace(/^0/, '').replace(/\s/g, '');
const telNumber = '+27' + BUSINESS.phones[0].replace(/^0/, '').replace(/\s/g, '');

export const HANDOFF = {
  whatsapp: `https://wa.me/${waNumber}?text=${encodeURIComponent('Hi C.F.S. Roofing & Gutters, I have an enquiry.')}`,
  tel: `tel:${telNumber}`,
};

/* Each topic: keywords (lowercase), answer, and optional follow-up chips. */
export const TOPICS = [
  {
    id: 'services',
    keywords: ['service', 'services', 'what do you do', 'offer', 'do you do', 'provide', 'help with', 'what can'],
    chips: ['Roof coverings', 'Seamless gutters', 'Request a quote'],
    answer:
      'C.F.S. Roofing & Gutters handles the design, supply and installation of prefabricated timber roof trusses and roof coverings for domestic and commercial applications. That includes metal roof sheeting, concrete roof tiles, sheeting and flashing, laminated timber beams, bargeboards and fascia boards.',
  },
  {
    id: 'trusses',
    keywords: ['truss', 'trusses', 'timber', 'prefabricated', 'rafters', 'roof structure', 'design'],
    chips: ['Roof coverings', 'Commercial roofing', 'Request a quote'],
    answer:
      'Yes. Design, supply and installation of prefabricated timber roof trusses is a core service, and the business has been servicing the timber trusses industry since 1994. Truss design is worked to each building\u2019s roof structure.',
  },
  {
    id: 'coverings',
    keywords: ['covering', 'coverings', 'roof sheet', 'sheeting', 'ibr', 'corrugated', 'pro lock', 'metal'],
    chips: ['Concrete roof tiles', 'Chromadek', 'Request a quote'],
    answer:
      'Metal roof sheeting is installed for residential, industrial and commercial buildings, including corrugated sheeting, IBR sheeting and Pro Lock roof sheets. Sheeting and flashing products are supplied and installed together with roof coverings.',
  },
  {
    id: 'tiles',
    keywords: ['tile', 'tiles', 'concrete', 'marley', 'coverland', 'monier', 'brickor', 'lafarge', 'profile'],
    chips: ['Roof coverings', 'Domestic roofing', 'Request a quote'],
    answer:
      'Concrete roof tile systems are installed from various manufacturers, including Marley, Lafarge/Monier Roofing, Brickor and Coverland. Marley profiles include Double Roman, Mendip, Homestead, Ludlow, Modern and Monarch; Coverland profiles include Cupola, Double Roman, Elite, Perspective, Renown and Taunus.',
  },
  {
    id: 'chromadek',
    keywords: ['chromadek', 'colour', 'color', 'colours', 'colors', 'heat', 'cool roof', 'colorplus', 'safal'],
    chips: ['Roof coverings', 'Request a quote'],
    answer:
      'Chromadek sheeting is available in Dove Grey, Charcoal Grey, Dark Dolphin, Aloe Green and Buffalo Brown. Certain colours use an advanced thermal technology paint system with heat-reflective pigment, providing an up to 8\u00b0C cooler benefit, as supplied by the manufacturer.',
  },
  {
    id: 'flashing',
    keywords: ['flashing', 'ridge', 'ridging', 'roll top', 'over tile', 'under tile'],
    chips: ['Roof coverings', 'Request a quote'],
    answer:
      'Yes. Over-tile flashing, under-tile flashing and roll-top ridging form part of the sheeting and flashing offering, supplied and installed with roof coverings.',
  },
  {
    id: 'beams',
    keywords: ['beam', 'beams', 'laminated', 'glulam', 'span', 'post', 'lintel'],
    chips: ['Request a quote', 'Commercial roofing'],
    answer:
      'Laminated timber beams are supplied as a natural alternative to steel or concrete. They are made by gluing timber together under pressure and heat, giving strong, stable and rigid structural members with a high weight-to-strength ratio, dimensional stability, load carrying capacity and fire resistance.',
  },
  {
    id: 'barge-fascia',
    keywords: ['bargeboard', 'barge', 'fascia', 'roofline', 'eaves', 'gable', 'cladding', 'aluminium'],
    chips: ['Request a quote'],
    answer:
      'Bargeboards sit at the gable end of the roof, protecting roof timbers and finishing the roofline. Fascia boards run beneath the roof edge and behind the eavestrough, and can be clad with aluminium to protect the timber while providing an aesthetic finish.',
  },
  {
    id: 'gutters',
    keywords: ['gutter', 'gutters', 'seamless', 'eavestrough', 'downpipe', 'rainwater'],
    chips: ['Request a quote', 'WhatsApp the team'],
    answer:
      'Yes. C.F.S. Roofing & Gutters takes seamless gutter enquiries. Tell the team what you need via the Seamless Gutters page or start an enquiry here and they will confirm the next steps.',
  },
  {
    id: 'domestic',
    keywords: ['domestic', 'residential', 'house', 'home', 'alteration', 'addition', 'townhouse', 'cluster', 'renovation', 'add on', 'extend'],
    chips: ['Commercial roofing', 'Request a quote'],
    answer:
      'Yes. C.F.S. Roofing & Gutters caters for domestic requirements including alterations, additions, new residences, townhouse developments and cluster developments \u2014 covering timber roof trusses, sundry materials, under-tile and insulation membrane, fascia and barge boards.',
  },
  {
    id: 'commercial',
    keywords: ['commercial', 'office', 'factory', 'mall', 'school', 'hospital', 'industrial', 'shopping', 'complex', 'warehouse'],
    chips: ['Domestic roofing', 'Request a quote'],
    answer:
      'Yes. Commercial projects include office blocks, factories, shopping malls, schools and hospitals. The commercial focus is service, quality workmanship, cost effectiveness, accurate planning, design coordination and installation.',
  },
  {
    id: 'area',
    keywords: ['where', 'located', 'area', 'address', 'kempton', 'johannesburg', 'pretoria', 'rand', 'east', 'gauteng', 'cover', 'region'],
    chips: ['Request a quote', 'WhatsApp the team'],
    answer:
      'C.F.S. Roofing & Gutters is at 21 Pomona Park Road, Pomona AH, Kempton Park, South Africa. Projects are taken on across domestic and commercial applications; if you are unsure whether your site falls in the working area, send an enquiry and the team will confirm.',
  },
  {
    id: 'contact',
    keywords: ['contact', 'phone', 'number', 'call', 'email', 'whatsapp', 'reach', 'speak', 'talk to'],
    chips: ['Request a quote', 'WhatsApp the team'],
    answer:
      `You can call ${BUSINESS.phones[0]} or ${BUSINESS.phones[1]}, or email ${BUSINESS.emails[0]}. The address is 21 Pomona Park Road, Pomona AH, Kempton Park. You can also start a WhatsApp chat from the button on this page.`,
  },
  {
    id: 'quote',
    keywords: ['quote', 'quotation', 'price', 'pricing', 'cost', 'how much', 'estimate', 'book', 'appointment', 'consultation', 'visit'],
    chips: ['WhatsApp the team', 'Call C.F.S.'],
    answer:
      'For pricing, use the Request a Quote flow. Tell C.F.S. what you need \u2014 service, project type and a few details \u2014 and your enquiry goes directly to the team, who will get back to you to confirm the next steps. No payment or account is needed to enquire.',
  },
  {
    id: 'history',
    keywords: ['since', 'established', 'experience', 'how long', 'years', 'history', 'old', 'trust', 'reputable', 'who are'],
    chips: ['Request a quote', 'Services'],
    answer:
      'C.F.S. Roofing & Gutters has been servicing the timber trusses industry since 1994, with completed projects in association with leading contractors and manufacturers in South Africa.',
  },
  {
    id: 'hours',
    keywords: ['hours', 'open', 'time', 'when are you', 'weekend', 'after hours', 'saturday', 'sunday'],
    chips: ['WhatsApp the team', 'Call C.F.S.'],
    answer:
      'Opening hours weren\u2019t included in the business information, so I won\u2019t guess. Send a WhatsApp message or an enquiry any time and the team will respond.',
  },
  {
    id: 'membrane',
    keywords: ['membrane', 'insulation', 'underlay', 'tyvek', 'sarking'],
    chips: ['Domestic roofing', 'Request a quote'],
    answer:
      'Yes. Under-tile membrane and insulation membrane are included in the domestic roofing scope, along with timber roof trusses, relevant sundry materials, fascia and barge boards.',
  },
];

const DEFAULT_CHIPS = ['What services do you offer?', 'Where are you located?', 'How do I request a quote?'];

const NO_MATCH_ANSWER =
  'That one is outside the service information I hold. The C.F.S. team can answer it directly \u2014 WhatsApp or call them, or send an enquiry and they\u2019ll get back to you.';

function score(text, topic) {
  let s = 0;
  for (const kw of topic.keywords) {
    if (text.includes(kw)) s += kw.length >= 6 ? 3 : 2;
  }
  return s;
}

export function answerQuestion(input) {
  const text = (input || '').toLowerCase().trim();
  if (!text) return null;
  let best = null;
  let bestScore = 0;
  for (const t of TOPICS) {
    const s = score(text, t);
    if (s > bestScore) {
      best = t;
      bestScore = s;
    }
  }
  if (!best || bestScore < 2) {
    return { answer: NO_MATCH_ANSWER, chips: ['Request a quote', 'WhatsApp the team', 'Call C.F.S.'], handoff: true };
  }
  return { answer: best.answer, chips: best.chips || DEFAULT_CHIPS, handoff: false };
}

export const SUGGESTED = [
  'What roofing services do you offer?',
  'Do you install timber roof trusses?',
  'Where are you located?',
  'Do you handle commercial roofing?',
  'Do you install concrete roof tiles?',
  'How do I request a quote?',
];
