// Central place for company details.
// Fields left as null or empty are intentionally not shown on the site.
// Fill them in here and the UI will pick them up automatically.

export const company = {
  name: 'Axenor Trading',
  legalName: 'Axenor Trading Sdn. Bhd.',
  tagline: 'Connecting Markets. Building Trade.',
  about:
    'Malaysia-based B2B trading company sourcing quality Indian products for international markets.',

  // Two separate facts, kept apart so they cannot be confused:
  //   basedIn        — where the company is registered and operates, matching
  //                    the country of incorporation in `registration` below
  //   sourcingOrigin — where the products themselves come from
  basedIn: 'Malaysia',
  sourcingOrigin: 'India',

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

  // TBD — add destination countries/regions when confirmed, e.g. ['UAE', 'Germany'].
  markets: [],
}
