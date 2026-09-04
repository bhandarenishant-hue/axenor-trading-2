// Product catalog. Images live in /public/images; set image: null to fall back to the branded placeholder.

export const categories = [
  {
    slug: 'textiles',
    name: 'Textiles',
    short: 'Textiles',
    icon: 'Layers',
    image: '/images/categories/textiles.jpg',
    description: 'Woven and handloom textiles sourced from established mills and weaving clusters across Asia.',
  },
  {
    slug: 'garments',
    name: 'Garments',
    short: 'Garments',
    icon: 'Shirt',
    image: '/images/categories/garments.jpg',
    description: 'Ready-to-wear apparel sourced for retail and private-label programmes.',
  },
  {
    slug: 'consumer-goods',
    name: 'Consumer Goods',
    short: 'Consumer Goods',
    icon: 'ShoppingBasket',
    image: '/images/categories/consumer-goods.jpg',
    description: 'Everyday retail lines spanning personal care, packaged food and household staples.',
  },
  {
    slug: 'home-accessories',
    name: 'Home Accessories',
    short: 'Home',
    icon: 'Lamp',
    image: '/images/categories/home-accessories.jpg',
    description: 'Home textiles and fittings for retailers and interior suppliers.',
  },
  {
    slug: 'electronics',
    name: 'Electronics',
    short: 'Electronics',
    icon: 'Cpu',
    image: '/images/categories/electronics.jpg',
    description: 'Consumer and accessory electronics. Ranges are sourced to order, so tell us what you need.',
    // No catalogued lines yet: the UI shows an enquiry prompt instead of a count.
    enquiryOnly: true,
  },
]

// Optional second level. A category may hold subcategories; a product may name one
// via its `subcategory` field. Products without a subcategory sit directly in the category.
export const subcategories = [
  {
    slug: 'sarees',
    category: 'textiles',
    name: 'Sarees',
    short: 'Sarees',
    image: '/images/subcategories/sarees.jpg',
    description:
      'Regional Indian saree weaves in silk, cotton and blends, from Banarasi zari brocade to Sambalpuri ikat.',
  },
]

export const products = [
  // ── Home textiles and accessories ─────────────────────────────────────
  {
    id: 1,
    slug: 'cotton-bedsheet-sets',
    name: 'Cotton Bedsheet Sets',
    category: 'home-accessories',
    featured: true,
    summary: 'Woven cotton bedsheets with matching pillow covers in a range of sizes and prints.',
    description:
      'Cotton bedsheet sets sourced from Indian textile hubs. Available in plain, printed and jacquard finishes, with pillow covers included. Sizes, thread counts and packaging can be aligned to buyer requirements.',
    highlights: ['Plain, printed and jacquard options', 'Single, double and king sizes', 'Custom labels and packaging on request'],
    specs: { Material: 'Cotton', Sizes: 'Single / Double / King', Finish: 'Plain, printed, jacquard', Packaging: 'Customisable' },
    image: '/images/products/cotton-bedsheet-sets.jpg',
  },
  // ── Sarees (subcategory of Textiles) ──────────────────────────────────
  // Photography note: the images below are generic royalty-free saree photos.
  // They are NOT verified as depicting the specific weave they sit against, so
  // replace them with real product shots before the site goes live.
  {
    id: 20,
    slug: 'banarasi-silk-saree',
    name: 'Banarasi Silk Saree',
    category: 'textiles',
    subcategory: 'sarees',
    featured: true,
    summary: 'Varanasi silk sarees woven with gold and silver zari brocade.',
    description:
      'Silk sarees woven in and around Varanasi, Uttar Pradesh, using gold and silver zari to build brocade patterns. Motifs draw on Mughal-influenced florals, vines and figured borders. Offered in pure silk and silk-blend grades.',
    highlights: ['Woven in the Varanasi cluster', 'Gold and silver zari brocade', 'Pure silk and blended grades'],
    specs: { Material: 'Silk with zari', Weave: 'Brocade', Region: 'Varanasi, Uttar Pradesh', Packaging: 'Individual box or poly pack' },
    image: '/images/products/saree-banarasi.jpg',
  },
  {
    id: 21,
    slug: 'kanjivaram-silk-saree',
    name: 'Kanjivaram Silk Saree',
    category: 'textiles',
    subcategory: 'sarees',
    featured: false,
    summary: 'Heavy mulberry silk sarees from Tamil Nadu with contrast interlocked borders.',
    description:
      'Mulberry silk sarees woven in Kanchipuram, Tamil Nadu. The body and border are typically woven separately and interlocked, giving the contrast border the weave is known for. Common motifs include temple borders, checks and stripes.',
    highlights: ['Mulberry silk in heavier weights', 'Contrast interlocked borders', 'Temple, check and stripe motifs'],
    specs: { Material: 'Mulberry silk with zari', Weave: 'Interlocked border', Region: 'Kanchipuram, Tamil Nadu', Packaging: 'Individual box or poly pack' },
    image: '/images/products/saree-kanjivaram.jpg',
  },
  {
    id: 22,
    slug: 'chanderi-saree',
    name: 'Chanderi Saree',
    category: 'textiles',
    subcategory: 'sarees',
    featured: false,
    summary: 'Lightweight sheer sarees in silk-cotton from Madhya Pradesh.',
    description:
      'Sarees woven in Chanderi, Madhya Pradesh, in silk, cotton and silk-cotton blends. The cloth is light and semi-sheer with a soft sheen, usually carrying small scattered buti motifs across the body.',
    highlights: ['Light, semi-sheer handle', 'Silk, cotton and blended options', 'Scattered buti motifs'],
    specs: { Material: 'Silk / Cotton / Silk-cotton', Weave: 'Plain with buti motifs', Region: 'Chanderi, Madhya Pradesh', Packaging: 'Individual poly pack' },
    image: '/images/products/saree-chanderi.jpg',
  },
  {
    id: 23,
    slug: 'bandhani-saree',
    name: 'Bandhani Saree',
    category: 'textiles',
    subcategory: 'sarees',
    featured: false,
    summary: 'Tie-and-dye sarees from Gujarat and Rajasthan patterned in fine dots.',
    description:
      'Sarees patterned by the bandhani tie-and-dye method, in which the cloth is tied at many small points before dyeing so those points resist the colour. The result is a field of fine dots forming geometric and floral arrangements.',
    highlights: ['Traditional tie-and-dye process', 'Dot-formed geometric and floral patterns', 'Cotton, georgette and silk bases'],
    specs: { Material: 'Cotton / Georgette / Silk', Technique: 'Bandhani tie-and-dye', Region: 'Gujarat and Rajasthan', Packaging: 'Individual poly pack' },
    image: '/images/products/saree-bandhani.jpg',
  },
  {
    id: 24,
    slug: 'paithani-saree',
    name: 'Paithani Saree',
    category: 'textiles',
    subcategory: 'sarees',
    featured: false,
    summary: 'Silk sarees from Maharashtra with zari borders and figured pallu.',
    description:
      'Silk sarees associated with Paithan in Maharashtra, woven with zari borders and a figured pallu. Peacock and lotus motifs are characteristic, and borders often carry an oblique square pattern.',
    highlights: ['Zari borders and figured pallu', 'Peacock and lotus motifs', 'Silk in festive weights'],
    specs: { Material: 'Silk with zari', Weave: 'Tapestry-style pallu', Region: 'Paithan, Maharashtra', Packaging: 'Individual box' },
    image: '/images/products/saree-paithani.jpg',
  },
  {
    id: 25,
    slug: 'sambalpuri-ikat-saree',
    name: 'Sambalpuri Ikat Saree',
    category: 'textiles',
    subcategory: 'sarees',
    featured: false,
    summary: 'Odisha sarees patterned by tie-dyeing the yarn before weaving.',
    description:
      'Sarees from western Odisha made by the bandha or ikat method, where warp and weft yarns are tie-dyed before weaving. Because the pattern is dyed into the yarn, motifs carry the soft feathered edge typical of ikat.',
    highlights: ['Yarn tie-dyed before weaving', 'Feathered-edge ikat motifs', 'Cotton and silk versions'],
    specs: { Material: 'Cotton / Silk', Technique: 'Bandha (ikat)', Region: 'Sambalpur, Odisha', Packaging: 'Individual poly pack' },
    image: '/images/products/saree-sambalpuri.jpg',
  },
  {
    id: 26,
    slug: 'tussar-silk-saree',
    name: 'Tussar Silk Saree',
    category: 'textiles',
    subcategory: 'sarees',
    featured: false,
    summary: 'Textured wild silk sarees with a natural golden tone.',
    description:
      'Sarees in tussar, a wild silk produced in the forest belts of Jharkhand, Bihar, West Bengal and Odisha. The yarn gives a coarser, textured surface and a natural pale-gold colour that takes dyes and hand-painting well.',
    highlights: ['Textured wild silk yarn', 'Natural pale-gold base colour', 'Suits printing and hand-painting'],
    specs: { Material: 'Tussar silk', Weave: 'Plain and dobby', Region: 'Jharkhand, Bihar, West Bengal, Odisha', Packaging: 'Individual poly pack' },
    image: '/images/products/saree-tussar.jpg',
  },
  {
    id: 27,
    slug: 'cotton-handloom-saree',
    name: 'Cotton Handloom Saree',
    category: 'textiles',
    subcategory: 'sarees',
    featured: false,
    summary: 'Everyday handloom cotton sarees suited to warm climates.',
    description:
      'Plain and striped handloom cotton sarees from weaving clusters across India. Breathable and hard-wearing, these suit everyday retail volumes, with counts, borders and colour ranges set to buyer requirement.',
    highlights: ['Breathable everyday cotton', 'Plain, striped and checked options', 'Counts and borders to order'],
    specs: { Material: 'Handloom cotton', Weave: 'Plain, stripe, check', Region: 'Multiple Indian clusters', Packaging: 'Individual poly pack' },
    image: '/images/products/saree-cotton-handloom.jpg',
  },
  {
    id: 3,
    slug: 'ethnic-wear',
    name: 'Ethnic Wear',
    category: 'garments',
    featured: true,
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
    category: 'garments',
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
    category: 'home-accessories',
    featured: false,
    summary: 'Cotton terry bath, hand and face towels in solid colours and stripes.',
    description:
      'Absorbent cotton terry towels for household and hospitality use. Offered in bath, hand and face sizes, with GSM, colour and border styles adjustable to order.',
    highlights: ['Bath, hand and face sizes', 'Household and hospitality use', 'GSM and colours to order'],
    specs: { Material: 'Cotton terry', Types: 'Bath / Hand / Face', GSM: 'As per requirement', Packaging: 'Customisable' },
    image: '/images/products/terry-towels.jpg',
  },

  // ── Personal care ─────────────────────────────────────────────────────
  {
    id: 6,
    slug: 'natural-handmade-soaps',
    name: 'Natural Handmade Soaps',
    category: 'consumer-goods',
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
    category: 'consumer-goods',
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
    category: 'consumer-goods',
    featured: false,
    summary: 'Powder and paste face packs made from clays, herbs and botanicals.',
    description:
      'Face packs based on multani mitti, sandalwood, turmeric, neem and rose. Supplied in powder or ready-to-use paste formats with packaging suited to retail shelves.',
    highlights: ['Powder and paste formats', 'Clay and botanical bases', 'Retail-ready packaging'],
    specs: { Type: 'Face pack', Formats: 'Powder / Paste', Variants: 'Multani mitti, sandalwood, turmeric, neem, rose', Packaging: 'Jars, sachets, tubes' },
    image: '/images/products/herbal-face-packs.jpg',
  },

  {
    id: 13,
    slug: 'brass-hardware',
    name: 'Brass Hardware',
    category: 'home-accessories',
    featured: true,
    summary: 'Brass hinges, handles, knobs and fittings for doors, furniture and decor.',
    description:
      'Brass hardware including hinges, handles, knobs, latches and decorative fittings, sourced from established brass-working clusters in India. Finishes include polished, antique and lacquered.',
    highlights: ['Hinges, handles, knobs and latches', 'Polished, antique and lacquered finishes', 'Furniture and architectural use'],
    specs: { Material: 'Brass', Types: 'Hinges, handles, knobs, latches, fittings', Finish: 'Polished / Antique / Lacquered', Packaging: 'Individual or bulk' },
    image: '/images/products/brass-hardware.jpg',
  },

  // ── Packaged food ─────────────────────────────────────────────────────
  {
    id: 14,
    slug: 'turmeric',
    name: 'Turmeric',
    category: 'consumer-goods',
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
    category: 'consumer-goods',
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
    category: 'consumer-goods',
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
    category: 'consumer-goods',
    featured: false,
    summary: 'Basmati and non-basmati rice in raw, steamed and parboiled forms.',
    description:
      'Basmati and non-basmati rice varieties in raw, steamed and parboiled forms. Grain length, polish and packaging as per buyer specification.',
    highlights: ['Basmati and non-basmati', 'Raw, steamed and parboiled', 'Packing to specification'],
    specs: { Types: 'Basmati / Non-basmati', Processing: 'Raw / Steamed / Parboiled', Packaging: 'Bulk bags or retail packs', Origin: 'India' },
    image: '/images/products/rice.jpg',
  },

  // ── Snacks ────────────────────────────────────────────────────────────
  {
    id: 18,
    slug: 'indian-namkeen-snacks',
    name: 'Indian Namkeen Snacks',
    category: 'consumer-goods',
    featured: false,
    summary: 'Savoury Indian snacks such as bhujia, mixtures and chips in retail packs.',
    description:
      'Packaged savoury snacks including bhujia, mixtures, chips and other traditional namkeen. Supplied in retail pack sizes with shelf life and labelling suited to export.',
    highlights: ['Bhujia, mixtures, chips and more', 'Retail pack sizes', 'Export-ready labelling'],
    specs: { Types: 'Bhujia, mixtures, chips, traditional namkeen', 'Pack sizes': 'As per requirement', Packaging: 'Retail packs in cartons', Origin: 'India' },
    image: '/images/products/indian-namkeen-snacks.jpg',
  },
  {
    id: 19,
    slug: 'biscuits-and-cookies',
    name: 'Biscuits & Cookies',
    category: 'consumer-goods',
    featured: false,
    summary: 'Packaged biscuits and cookies across sweet, ivory and cracker ranges.',
    description:
      'Packaged biscuits and cookies including glucose, ivory, digestive and cracker varieties. Available in retail packs and family packs with export labelling.',
    highlights: ['Glucose, ivory, digestive and crackers', 'Retail and family packs', 'Export-ready labelling'],
    specs: { Types: 'Glucose, ivory, digestive, crackers', 'Pack sizes': 'As per requirement', Packaging: 'Retail packs in cartons', Origin: 'India' },
    image: '/images/products/biscuits-and-cookies.jpg',
  },
]

// Products that fall outside the five categories the client specified
// (industrial fasteners, valves and electrical fittings). Kept here rather than
// deleted so any of them can be restored by moving the entry back into
// `products` and giving it a current category slug.
export const archivedProducts = [
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
]

export const getCategory = (slug) => categories.find((c) => c.slug === slug)
export const getSubcategory = (slug) => subcategories.find((s) => s.slug === slug)
export const getSubcategoriesByCategory = (slug) => subcategories.filter((s) => s.category === slug)
export const getProductsBySubcategory = (slug) => products.filter((p) => p.subcategory === slug)
export const getProduct = (slug) => products.find((p) => p.slug === slug)
export const getProductsByCategory = (slug) => products.filter((p) => p.category === slug)
export const featuredProducts = products.filter((p) => p.featured)
