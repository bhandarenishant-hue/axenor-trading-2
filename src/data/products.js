// Product catalog. Images live in /public/images; set image: null to fall back to the branded placeholder.

export const categories = [
  {
    slug: 'textiles',
    name: 'Textiles & Indian Fashion',
    short: 'Textiles',
    icon: 'Shirt',
    image: '/images/categories/textiles.jpg',
    description: 'Bedsheets, sarees, ethnic wear, T-shirts and towels sourced from Indian textile clusters.',
  },
  {
    slug: 'ayurvedic',
    name: 'Ayurvedic & Personal Care',
    short: 'Personal Care',
    icon: 'Leaf',
    image: '/images/categories/ayurvedic.jpg',
    description: 'Natural soaps, herbal hair oils and face packs made with traditional Indian ingredients.',
  },
  {
    slug: 'engineering',
    name: 'Engineering & Hardware',
    short: 'Hardware',
    icon: 'Wrench',
    image: '/images/categories/engineering.jpg',
    description: 'Fasteners, valves, electrical fittings and brass hardware for industrial and commercial use.',
  },
  {
    slug: 'spices',
    name: 'Spices & Pulses',
    short: 'Spices & Pulses',
    icon: 'Wheat',
    image: '/images/categories/spices.jpg',
    description: "Turmeric, chillies, lentils and rice from India's agricultural regions.",
  },
  {
    slug: 'snacks',
    name: 'Pre-packaged Snacks',
    short: 'Snacks',
    icon: 'Cookie',
    image: '/images/categories/snacks.jpg',
    description: 'Indian snacks and biscuits in retail-ready packaging.',
  },
]

export const products = [
  // ── Textiles & Indian Fashion ──────────────────────────────────────────
  {
    id: 1,
    slug: 'cotton-bedsheet-sets',
    name: 'Cotton Bedsheet Sets',
    category: 'textiles',
    featured: true,
    summary: 'Woven cotton bedsheets with matching pillow covers in a range of sizes and prints.',
    description:
      'Cotton bedsheet sets sourced from Indian textile hubs. Available in plain, printed and jacquard finishes, with pillow covers included. Sizes, thread counts and packaging can be aligned to buyer requirements.',
    highlights: ['Plain, printed and jacquard options', 'Single, double and king sizes', 'Custom labels and packaging on request'],
    specs: { Material: 'Cotton', Sizes: 'Single / Double / King', Finish: 'Plain, printed, jacquard', Packaging: 'Customisable' },
    image: '/images/products/cotton-bedsheet-sets.jpg',
  },
  {
    id: 2,
    slug: 'handloom-sarees',
    name: 'Handloom Sarees',
    category: 'textiles',
    featured: true,
    summary: 'Traditional Indian sarees in cotton and silk blends across regional weaving styles.',
    description:
      'Sarees in cotton, silk and blended fabrics, drawing on regional Indian weaving traditions. Assortments can be curated by fabric, colour palette or occasion to suit retail and wholesale buyers.',
    highlights: ['Cotton, silk and blended fabrics', 'Curated assortments by style or occasion', 'Retail-ready packing available'],
    specs: { Material: 'Cotton / Silk / Blends', Length: 'Standard saree length', Assortment: 'Curated on request', Packaging: 'Individual packing' },
    image: '/images/products/handloom-sarees.jpg',
  },
  {
    id: 3,
    slug: 'ethnic-wear',
    name: 'Ethnic Wear',
    category: 'textiles',
    featured: false,
    summary: 'Kurtas, kurta sets and traditional Indian garments for men and women.',
    description:
      'Ready-to-wear Indian ethnic garments including kurtas, kurta sets and festive wear. Available in standard size ranges with options for fabric, print and embroidery detail.',
    highlights: ["Men's and women's ranges", 'Standard international size charts', 'Fabric and print options'],
    specs: { Material: 'Cotton / Rayon / Blends', Sizes: 'S to XXL', Styles: 'Kurtas, kurta sets, festive wear', Packaging: 'Poly bag with size tag' },
    image: '/images/products/ethnic-wear.jpg',
  },
  {
    id: 4,
    slug: 'cotton-t-shirts',
    name: 'Cotton T-Shirts',
    category: 'textiles',
    featured: false,
    summary: 'Plain and printed cotton T-shirts suitable for retail and private label.',
    description:
      'Knitted cotton T-shirts in round-neck and polo styles. Suitable for private-label programmes with custom prints, labels and packaging.',
    highlights: ['Round-neck and polo styles', 'Private-label friendly', 'Custom prints and labels'],
    specs: { Material: 'Cotton knit', Sizes: 'S to XXL', GSM: 'As per requirement', Packaging: 'Customisable' },
    image: '/images/products/cotton-t-shirts.jpg',
  },
  {
    id: 5,
    slug: 'terry-towels',
    name: 'Terry Towels',
    category: 'textiles',
    featured: false,
    summary: 'Cotton terry bath, hand and face towels in solid colours and stripes.',
    description:
      'Absorbent cotton terry towels for household and hospitality use. Offered in bath, hand and face sizes, with GSM, colour and border styles adjustable to order.',
    highlights: ['Bath, hand and face sizes', 'Household and hospitality use', 'GSM and colours to order'],
    specs: { Material: 'Cotton terry', Types: 'Bath / Hand / Face', GSM: 'As per requirement', Packaging: 'Customisable' },
    image: '/images/products/terry-towels.jpg',
  },

  // ── Ayurvedic & Personal Care ──────────────────────────────────────────
  {
    id: 6,
    slug: 'natural-handmade-soaps',
    name: 'Natural Handmade Soaps',
    category: 'ayurvedic',
    featured: true,
    summary: 'Handmade soap bars using plant-based oils and traditional botanical ingredients.',
    description:
      'Handmade soaps formulated with plant-based oils and botanicals such as neem, turmeric, sandalwood and aloe vera. Available in multiple variants with custom packaging for retail.',
    highlights: ['Plant-based oil formulations', 'Multiple botanical variants', 'Retail packaging options'],
    specs: { Type: 'Bar soap', Variants: 'Neem, turmeric, sandalwood, aloe vera and more', Weight: 'As per requirement', Packaging: 'Individual wrap or box' },
    image: '/images/products/natural-handmade-soaps.jpg',
  },
  {
    id: 7,
    slug: 'herbal-hair-oils',
    name: 'Herbal Hair Oils',
    category: 'ayurvedic',
    featured: false,
    summary: 'Hair oils blended with herbs traditionally used in Indian hair care.',
    description:
      'Hair oils prepared with base oils such as coconut and sesame, infused with herbs like amla, bhringraj and hibiscus. Bottle sizes and labelling can be adapted for private label.',
    highlights: ['Coconut and sesame base oils', 'Amla, bhringraj and hibiscus infusions', 'Private-label bottling'],
    specs: { Type: 'Hair oil', Base: 'Coconut / Sesame', Sizes: 'As per requirement', Packaging: 'Bottles, custom labels' },
    image: '/images/products/herbal-hair-oils.jpg',
  },
  {
    id: 8,
    slug: 'herbal-face-packs',
    name: 'Herbal Face Packs',
    category: 'ayurvedic',
    featured: false,
    summary: 'Powder and paste face packs made from clays, herbs and botanicals.',
    description:
      'Face packs based on multani mitti, sandalwood, turmeric, neem and rose. Supplied in powder or ready-to-use paste formats with packaging suited to retail shelves.',
    highlights: ['Powder and paste formats', 'Clay and botanical bases', 'Retail-ready packaging'],
    specs: { Type: 'Face pack', Formats: 'Powder / Paste', Variants: 'Multani mitti, sandalwood, turmeric, neem, rose', Packaging: 'Jars, sachets, tubes' },
    image: '/images/products/herbal-face-packs.jpg',
  },

  // ── Engineering & Hardware ─────────────────────────────────────────────
  {
    id: 9,
    slug: 'nuts-and-bolts',
    name: 'Hex Nuts & Bolts',
    category: 'engineering',
    featured: true,
    summary: 'Hex bolts and nuts in carbon and stainless steel across standard thread sizes.',
    description:
      'Hex bolts, nuts and washers in carbon steel and stainless steel grades. Supplied in metric and imperial threads with zinc-plated or plain finishes.',
    highlights: ['Carbon and stainless steel', 'Metric and imperial threads', 'Plain and plated finishes'],
    specs: { Material: 'Carbon steel / Stainless steel', Threads: 'Metric / Imperial', Finish: 'Plain, zinc plated', Packaging: 'Bulk cartons' },
    image: '/images/products/nuts-and-bolts.jpg',
  },
  {
    id: 10,
    slug: 'screws-and-fasteners',
    name: 'Screws & Fasteners',
    category: 'engineering',
    featured: false,
    summary: 'Machine screws, self-tapping screws and allied fasteners.',
    description:
      'A range of machine screws, self-tapping screws, anchors and allied fasteners for construction, furniture and light engineering applications.',
    highlights: ['Machine and self-tapping screws', 'Anchors and allied fasteners', 'Bulk or retail packing'],
    specs: { Material: 'Steel / Stainless steel / Brass', Types: 'Machine, self-tapping, wood screws', Finish: 'As per requirement', Packaging: 'Bulk or retail' },
    image: '/images/products/screws-and-fasteners.jpg',
  },
  {
    id: 11,
    slug: 'industrial-valves',
    name: 'Industrial Valves',
    category: 'engineering',
    featured: false,
    summary: 'Ball, gate and check valves for water, gas and general industrial lines.',
    description:
      'Ball valves, gate valves and check valves in brass, cast iron and stainless steel for plumbing and industrial pipelines. Sizes and pressure ratings as per buyer specification.',
    highlights: ['Ball, gate and check valves', 'Brass, cast iron and stainless steel', 'Sizes to specification'],
    specs: { Types: 'Ball / Gate / Check', Material: 'Brass / Cast iron / Stainless steel', Sizes: 'As per requirement', Packaging: 'Cartons' },
    image: '/images/products/industrial-valves.jpg',
  },
  {
    id: 12,
    slug: 'electrical-fittings',
    name: 'Electrical Fittings',
    category: 'engineering',
    featured: false,
    summary: 'Switches, sockets, conduit fittings and wiring accessories.',
    description:
      'Electrical wiring accessories including switches, sockets, junction boxes and conduit fittings for residential and commercial installations.',
    highlights: ['Switches, sockets and junction boxes', 'Conduit fittings and accessories', 'Residential and commercial use'],
    specs: { Types: 'Switches, sockets, junction boxes, conduit fittings', Material: 'Polycarbonate / Brass / Steel', Standards: 'As per requirement', Packaging: 'Retail or bulk' },
    image: '/images/products/electrical-fittings.jpg',
  },
  {
    id: 13,
    slug: 'brass-hardware',
    name: 'Brass Hardware',
    category: 'engineering',
    featured: true,
    summary: 'Brass hinges, handles, knobs and fittings for doors, furniture and decor.',
    description:
      'Brass hardware including hinges, handles, knobs, latches and decorative fittings, produced in Indian brass manufacturing clusters. Finishes include polished, antique and lacquered.',
    highlights: ['Hinges, handles, knobs and latches', 'Polished, antique and lacquered finishes', 'Furniture and architectural use'],
    specs: { Material: 'Brass', Types: 'Hinges, handles, knobs, latches, fittings', Finish: 'Polished / Antique / Lacquered', Packaging: 'Individual or bulk' },
    image: '/images/products/brass-hardware.jpg',
  },

  // ── Spices & Pulses ────────────────────────────────────────────────────
  {
    id: 14,
    slug: 'turmeric',
    name: 'Turmeric',
    category: 'spices',
    featured: true,
    summary: 'Turmeric fingers and ground turmeric powder.',
    description:
      'Turmeric supplied as whole fingers or ground powder. Grade, curcumin content, mesh size and packing are aligned to buyer requirements.',
    highlights: ['Whole fingers or powder', 'Grade to buyer specification', 'Bulk and retail packing'],
    specs: { Form: 'Fingers / Powder', Grade: 'As per requirement', Packaging: 'Bulk bags or retail packs', Origin: 'India' },
    image: '/images/products/turmeric.jpg',
  },
  {
    id: 15,
    slug: 'dry-red-chillies',
    name: 'Dry Red Chillies',
    category: 'spices',
    featured: false,
    summary: 'Whole dried red chillies and chilli powder in multiple varieties.',
    description:
      'Dried red chillies in whole, crushed and powdered forms. Varieties selected for colour and heat level according to the destination market.',
    highlights: ['Whole, crushed and powder', 'Varieties by colour and heat', 'Bulk and retail packing'],
    specs: { Form: 'Whole / Crushed / Powder', Variety: 'As per requirement', Packaging: 'Bulk bags or retail packs', Origin: 'India' },
    image: '/images/products/dry-red-chillies.jpg',
  },
  {
    id: 16,
    slug: 'lentils',
    name: 'Lentils & Pulses',
    category: 'spices',
    featured: false,
    summary: 'Toor, moong, chana, masoor and urad dals, whole and split.',
    description:
      'Indian pulses including toor dal, moong dal, chana dal, masoor dal and urad dal, available whole or split, polished or unpolished.',
    highlights: ['Toor, moong, chana, masoor, urad', 'Whole and split options', 'Polished or unpolished'],
    specs: { Types: 'Toor / Moong / Chana / Masoor / Urad', Form: 'Whole / Split', Packaging: 'Bulk bags or retail packs', Origin: 'India' },
    image: '/images/products/lentils.jpg',
  },
  {
    id: 17,
    slug: 'rice',
    name: 'Rice',
    category: 'spices',
    featured: false,
    summary: 'Basmati and non-basmati rice in raw, steamed and parboiled forms.',
    description:
      'Basmati and non-basmati rice varieties in raw, steamed and parboiled forms. Grain length, polish and packaging as per buyer specification.',
    highlights: ['Basmati and non-basmati', 'Raw, steamed and parboiled', 'Packing to specification'],
    specs: { Types: 'Basmati / Non-basmati', Processing: 'Raw / Steamed / Parboiled', Packaging: 'Bulk bags or retail packs', Origin: 'India' },
    image: '/images/products/rice.jpg',
  },

  // ── Pre-packaged Snacks ────────────────────────────────────────────────
  {
    id: 18,
    slug: 'indian-namkeen-snacks',
    name: 'Indian Namkeen Snacks',
    category: 'snacks',
    featured: false,
    summary: 'Savoury Indian snacks such as bhujia, mixtures and chips in retail packs.',
    description:
      'Packaged savoury snacks including bhujia, mixtures, chips and other traditional namkeen. Supplied in retail pack sizes with shelf life and labelling suited to export.',
    highlights: ['Bhujia, mixtures, chips and more', 'Retail pack sizes', 'Export-ready labelling'],
    specs: { Types: 'Bhujia, mixtures, chips, traditional namkeen', 'Pack sizes': 'As per requirement', Packaging: 'Retail packs in cartons', Origin: 'India' },
    image: '/images/products/dry-red-chillies.jpg',
  },
  {
    id: 19,
    slug: 'biscuits-and-cookies',
    name: 'Biscuits & Cookies',
    category: 'snacks',
    featured: false,
    summary: 'Packaged biscuits and cookies across sweet, cream and cracker ranges.',
    description:
      'Packaged biscuits and cookies including glucose, cream, digestive and cracker varieties. Available in retail packs and family packs with export labelling.',
    highlights: ['Glucose, cream, digestive and crackers', 'Retail and family packs', 'Export-ready labelling'],
    specs: { Types: 'Glucose, cream, digestive, crackers', 'Pack sizes': 'As per requirement', Packaging: 'Retail packs in cartons', Origin: 'India' },
    image: '/images/products/dry-red-chillies.jpg',
  },
]

export const getCategory = (slug) => categories.find((c) => c.slug === slug)
export const getProduct = (slug) => products.find((p) => p.slug === slug)
export const getProductsByCategory = (slug) => products.filter((p) => p.category === slug)
export const featuredProducts = products.filter((p) => p.featured)
