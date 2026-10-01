export const WORLD_TEAS = [
  {
    id: 'da-hong-pao',
    name: 'Da Hong Pao',
    provenance: 'Wuyi Mountains, Fujian, China',
    flag: '🇨🇳',
    elevation: '1,200m',
    rarity: 'Mother Trees Reserve',
    valuation: '₹9.5 Crores / kg',
    visual: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800',
    tagline: 'The Legendary Big Red Robe',
    story: 'Harvested from 350+ year-old cliffside trees in Wuyi rock gardens. Reserved historically for emperors, a few grams once sold for millions at international auctions.',
    notes: ['Roasted Chestnut', 'Mineral Rock', 'Orchid Floral', 'Honeyed Plum'],
    brewing: '95°C | 20s Steep | Yixing Clay Pot',
    curatorQuote: 'The gold standard of mineral-rich rock teas. Pure liquid antiquity.'
  },
  {
    id: 'yellow-gold-buds',
    name: 'Yellow Gold Tea Buds',
    provenance: 'Sichuan, China & Atelier Singapore',
    flag: '🇸🇬',
    elevation: '1,400m',
    rarity: 'Royal Reserve',
    valuation: '₹2.8 Lakhs / kg',
    visual: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=800',
    tagline: 'Infused with Authentic 24-Karat Gold',
    story: 'Plucked once a year using golden shears. Only the highest single leaves are selected, then painted with pure edible 24-karat gold flakes to create an imperial elixir.',
    notes: ['Subtle Metallic', 'Fresh Dew', 'Warm Vanilla', 'Silken Tannins'],
    brewing: '80°C | 2 mins | Crystal Glass',
    curatorQuote: 'Created for sovereigns who seek the alchemy of precious metals & tea.'
  },
  {
    id: 'manohari-gold',
    name: 'Manohari Gold',
    provenance: 'Upper Assam, India',
    flag: '🇮🇳',
    elevation: '150m',
    rarity: 'Guinness Auction Record',
    valuation: '₹99,999 / kg',
    visual: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800',
    tagline: 'Harvested strictly between 4:00 AM – 6:00 AM',
    story: 'Special delicate golden tips plucking happens before sunrise to protect tender buds from solar oxidation. Famous for creating the highest auction record in Indian tea history.',
    notes: ['Malty Honey', 'Sweet Caramel', 'Wild Amber', 'Muscatel Finish'],
    brewing: '90°C | 3 mins | Fine Porcelain',
    curatorQuote: 'The pride of Assam. Plucked in pitch darkness before dawn breaks.'
  },
  {
    id: 'makaibari-silver-tips',
    name: 'Makaibari Silver Tips Imperial',
    provenance: 'Kurseong Valley, Darjeeling, India',
    flag: '🇮🇳',
    elevation: '1,500m',
    rarity: 'Lunar Harvest',
    valuation: '₹1.5 Lakhs / kg',
    visual: 'https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?auto=format&fit=crop&q=80&w=800',
    tagline: 'Harvested under the Full Moon Pull',
    story: 'Plucked exclusively on full moon nights when cosmic gravitational alignment draws maximum sap and volatile oils to the leaf tips. An enchanting biodynamic masterpiece.',
    notes: ['White Peach', 'Elderflower', 'Muscat Grape', 'Crisp Champagne'],
    brewing: '85°C | 4 mins | Glass Teapot',
    curatorQuote: 'Influenced by lunar forces for unrivaled delicate floral complexity.'
  },
  {
    id: 'gyokuro',
    name: 'Gyokuro (Jade Dew)',
    provenance: 'Uji, Kyoto, Japan',
    flag: '🇯🇵',
    elevation: '300m',
    rarity: 'Shaded Masterpiece',
    valuation: '₹65,000 / kg',
    visual: 'https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&q=80&w=800',
    tagline: 'Shaded in Total Darkness for 21 Days',
    story: 'Covered under straw mats for three weeks prior to harvest to restrict sunlight, driving l-theanine amino acids to sky-high concentrations for unparalleled rich umami.',
    notes: ['Concentrated Umami', 'Nori Seaweed', 'Sweet Cream', 'Pine Needle'],
    brewing: '60°C | 2 mins | Kyusu Teapot',
    curatorQuote: 'Deeply relaxing. A velvet umami broth crafted in total shadow.'
  },
  {
    id: 'nilgiri-frost',
    name: 'Nilgiri Frost Tea',
    provenance: 'Blue Mountains, Tamil Nadu, India',
    flag: '🇮🇳',
    elevation: '2,000m',
    rarity: 'Winter Solstice Harvest',
    valuation: '₹45,000 / kg',
    visual: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&q=80&w=800',
    tagline: 'Plucked after Frosty High Hill Nights',
    story: 'Harvested only during December-January cold snaps when sub-zero frosts cause leaves to concentrate natural plant sugars as a defense mechanism, resulting in intense clarity.',
    notes: ['Eucalyptus', 'Passion Fruit', 'Crisp Mint', 'Citrus Blossom'],
    brewing: '90°C | 3 mins | Double-walled Glass',
    curatorQuote: 'Winter frost locked into liquid amber clarity.'
  }
];

export const BUNDLE_TIERS = [
  {
    id: 'pack-1',
    title: 'Single Signature Pouch',
    weight: '250 Grams',
    servings: '125 Cups',
    price: 299,
    originalPrice: 299,
    savings: 0,
    badge: null,
    badgeColor: null,
    description: 'Perfect for experiencing the initial pre-dawn purity of Munnar high-altitude leaves.',
    unitPriceText: '₹2.39 / cup',
    popular: false,
  },
  {
    id: 'pack-2',
    title: 'Duo Reserve Pack',
    weight: '500 Grams (2 x 250g)',
    servings: '250 Cups',
    price: 499,
    originalPrice: 598,
    savings: 99,
    badge: 'Most Popular',
    badgeColor: 'bg-brand-navy text-brand-gold border border-brand-gold/40 font-bold',
    description: 'Our most requested pairing. Ideal for daily tea connoisseurs seeking uncompromised morning clarity.',
    unitPriceText: '₹1.99 / cup',
    popular: true,
  },
  {
    id: 'pack-3',
    title: 'Trio Estate Collection',
    weight: '750 Grams (3 x 250g)',
    servings: '375 Cups',
    price: 699,
    originalPrice: 897,
    savings: 198,
    badge: 'Best Value',
    badgeColor: 'bg-emerald-800 text-white font-bold',
    description: 'Curated for families and tea enthusiasts. Fully preserves nitrogen freshness across 3 sealed pouches.',
    unitPriceText: '₹1.86 / cup',
    popular: false,
  },
  {
    id: 'pack-4',
    title: '1 KG Connoisseur Vault',
    weight: '1,000 Grams (4 x 250g)',
    servings: '500 Cups',
    price: 899,
    originalPrice: 1196,
    savings: 297,
    badge: "Connoisseur's Choice",
    badgeColor: 'bg-brand-gold text-brand-midnight font-bold shadow-soft-luxury',
    description: 'The ultimate high-altitude stash. 4 nitrogen-sealed 250g packs with complimentary express shipping.',
    unitPriceText: '₹1.79 / cup',
    popular: false,
  }
];

export const REALISTIC_REVIEWS = [
  {
    id: 'rev-1',
    author: 'Ananya Roy',
    city: 'Bangalore, KA',
    verified: true,
    rating: 5,
    date: '2 days ago',
    title: 'Unmatched aroma when you open the pouch!',
    comment: 'Having tried Vahdam and TWG, SoftBlue has a distinctly clean malt aroma that doesn’t leave any harsh bitterness even if steeped for 5 minutes. The 1,600m Munnar elevation really shows in the amber clarity.'
  },
  {
    id: 'rev-2',
    author: 'Dr. Vikramaditya Menon',
    city: 'Kochi, KL',
    verified: true,
    rating: 5,
    date: '1 week ago',
    title: 'True single-estate integrity',
    comment: 'Being from Kerala myself, I can verify this is authentic high-altitude Munnar leaf. Zero dust, pure whole-leaf CTC balance. The Duo 500g reserve is my monthly staple now.'
  },
  {
    id: 'rev-3',
    author: 'Priya Sundaram',
    city: 'Mumbai, MH',
    verified: true,
    rating: 5,
    date: '2 weeks ago',
    title: 'Fast shipping & beautiful gold packaging',
    comment: 'Received the 1 KG Vault in Mumbai within 48 hours. The nitrogen-sealed 250g individual pouches keep the tea as fresh as the day it was rolled in Munnar.'
  }
];

export const FREE_SAMPLES = [
  {
    id: 'sample-nilgiri',
    name: 'Nilgiri Frost Winter Sample (20g)',
    desc: 'Crisp eucalyptus and citrus blossom notes',
    icon: '❄️'
  },
  {
    id: 'sample-assam',
    name: 'Assam Gold Tip Sample (20g)',
    desc: 'Deep malty honey amber liquor',
    icon: '✨'
  },
  {
    id: 'sample-green',
    name: 'Highland Jasmine Pearl Sample (20g)',
    desc: 'Hand-rolled scented spring leaves',
    icon: '🌿'
  }
];

export const COMPARISON_DATA = [
  {
    feature: 'Origin & Terroir',
    commercial: 'Generic multi-country dust blends & low-altitude commercial gardens',
    softblue: '100% Single-Origin Munnar Estate (1,600m High Altitude)',
    highlight: true
  },
  {
    feature: 'Harvest Elevation',
    commercial: 'Plains & low valley heat (0 – 400 meters)',
    softblue: 'Mist-shrouded Western Ghats peaks (~1,600 meters)',
    highlight: false
  },
  {
    feature: 'Plucking Discipline',
    commercial: 'Coarse machine trimming (stems, old leaves & debris)',
    softblue: 'Hand-selected pre-dawn plucking (top 2 leaves & bud only)',
    highlight: true
  },
  {
    feature: 'Processing Integrity',
    commercial: 'Crushed-Tear-Curl (CTC) dust, artificial aroma spray & preservatives',
    softblue: 'Pure whole leaf CTC & orthodox balance, zero additives, 100% natural',
    highlight: true
  },
  {
    feature: 'Palate Experience',
    commercial: 'Harsh, bitter, astringent, requires heavy sugar to disguise',
    softblue: 'Naturally sweet, deep amber liquor, silky malt warmth & clean finish',
    highlight: false
  },
  {
    feature: 'Freshness Guarantee',
    commercial: 'Stored in warehouses for 12–18 months before packaging',
    softblue: 'Direct from Munnar estate, nitrogen-sealed within 48h of processing',
    highlight: true
  }
];

export const RADAR_SPECS = [
  { label: 'Maltiness & Body', score: 96 },
  { label: 'Highland Floral Aroma', score: 92 },
  { label: 'Palate Smoothness', score: 98 },
  { label: 'Natural Sweetness', score: 94 },
  { label: 'L-Theanine Retention', score: 99 },
];
