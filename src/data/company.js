// Central place for company details.
// Fields left as null or empty are intentionally not shown on the site.
// Fill them in here and the UI will pick them up automatically.

export const company = {
  name: 'Axenor Trading',
  legalName: 'Axenor Trading Sdn. Bhd.',

  // Part of the logo artwork, so it stays fixed.
  tagline: 'Connecting Markets. Building Trade.',

  // One-line positioning, used as the hero eyebrow and page metadata.
  positioning: 'Malaysia-Based Trading & Import-Export Company',

  // Short supporting line for the hero.
  intro:
    'Headquartered in Kuala Lumpur, Axenor Trading connects trusted international suppliers with businesses across Malaysia and Southeast Asia.',

  // Company description, split into parts so no single block is dumped on a page.
  // Wording follows the description supplied by the client.
  about:
    'Axenor Trading Sdn. Bhd. is a Malaysian trading and import-export company headquartered in Kuala Lumpur. We specialise in sourcing, importing and distributing high-quality textiles, garments, consumer goods, home accessories and electronics from leading international suppliers across Asia, particularly India and China.',
  aboutSecondary:
    'Backed by strong logistics networks and deep market insight, we provide seamless supply chain solutions that connect global manufacturers with local retailers, e-commerce platforms and B2B clients across Malaysia and Southeast Asia.',
  commitment: 'Our commitment lies in delivering exceptional product quality, competitive pricing and reliable service.',

  // Where the company itself sits. Matches the country of incorporation in
  // `registration` below. Axenor does not manufacture: it sources, imports
  // and distributes, so never describe it as a producer.
  basedIn: 'Malaysia',
  headquarters: 'Kuala Lumpur, Malaysia',
  serviceArea: 'Malaysia and Southeast Asia',

  // Where products are sourced from. These are sourcing markets, not offices.
  // Country codes are used instead of flag emoji, which Windows renders as
  // plain letter pairs rather than flags.
  sourcingMarkets: [
    { code: 'IN', name: 'India', note: 'Major sourcing market' },
    { code: 'CN', name: 'China', note: 'Major sourcing market' },
    { code: null, name: 'Wider Asia', note: 'International supplier network' },
  ],

  // The import and distribution hub.
  hub: { code: 'MY', name: 'Malaysia', note: 'Import and distribution hub', city: 'Kuala Lumpur' },

  // Who the company supplies.
  customers: [
    { title: 'Retailers', text: 'Local retail businesses stocking imported ranges for their stores.' },
    { title: 'E-commerce platforms', text: 'Online sellers and marketplaces needing a dependable supply of stock.' },
    { title: 'B2B clients', text: 'Businesses buying in volume against their own specifications and schedules.' },
  ],

  // Taken from the SSM (Companies Commission of Malaysia) corporate information
  // extract supplied by the client. These are public-record facts; do not edit
  // them without a newer extract.
  registration: {
    number: '202601023683',
    formerNumber: '1685780-W',
    incorporated: '10 June 2026',
    type: 'Private limited company, limited by shares',
    status: 'Existing',
    natureOfBusiness: 'Wholesale of textiles and clothing',
    country: 'Malaysia',
    authority: 'Companies Commission of Malaysia (SSM)',
  },

  contact: {
    // Registered office from the SSM extract. The extract lists no separate
    // business address, so that stays null until the client confirms one.
    registeredAddress: [
      'Business Suite Unit 19A-24-3, Level 24',
      'Wisma UOA No. 19, Jalan Pinang',
      '50450 Kuala Lumpur',
      'W.P. Kuala Lumpur, Malaysia',
    ],
    address: null,
    phone: null,
    email: null,
    whatsapp: null, // e.g. '+60XXXXXXXXX' — enables the floating WhatsApp button
  },

  // TBD — add entries like { label: 'LinkedIn', href: 'https://...' }
  social: [],
}
