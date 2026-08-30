/* ===================================================
   SMART SALON TRACKER — Application Logic
   =================================================== */

// ========== SEED DATA ==========

const SEED_SALONS = [
  {
    id: 's1',
    name: 'Luxe Cuts Studio',
    address: '42 Maple Avenue, Downtown',
    phone: '+1 (555) 234-5678',
    distance: 0.8,
    lat: 40.7128,
    lng: -74.0060,
    rating: 4.9,
    reviews: 247,
    priceRange: '$$',
    description: 'An upscale salon experience with master stylists who specialize in precision cuts, creative coloring, and luxurious spa treatments. Our modern space is designed for relaxation and transformation.',
    hours: 'Mon-Sat: 9:00 AM - 8:00 PM | Sun: 10:00 AM - 6:00 PM',
    isOpen: true,
    tags: ['haircut', 'coloring', 'spa'],
    emoji: '💇',
    services: [
      { name: 'Classic Haircut', duration: '30 min', price: 35 },
      { name: 'Premium Haircut & Style', duration: '45 min', price: 55 },
      { name: 'Hair Coloring', duration: '90 min', price: 120 },
      { name: 'Balayage / Highlights', duration: '120 min', price: 180 },
      { name: 'Deep Conditioning Treatment', duration: '30 min', price: 40 },
      { name: 'Scalp Spa Treatment', duration: '45 min', price: 65 }
    ],
    staff: [
      { name: 'Elena Rodriguez', role: 'Creative Director', initials: 'ER' },
      { name: 'Marcus Chen', role: 'Senior Colorist', initials: 'MC' },
      { name: 'Aisha Patel', role: 'Stylist', initials: 'AP' }
    ],
    reviewList: [
      { author: 'Sarah M.', rating: 5, text: 'Elena is a genius! Best haircut I\'ve ever had. The salon atmosphere is incredible.' },
      { author: 'David K.', rating: 5, text: 'Marcus did my highlights and they look natural and stunning. Worth every penny.' },
      { author: 'Lisa T.', rating: 4, text: 'Great experience overall. A bit pricey but the quality is undeniable.' }
    ]
  },
  {
    id: 's2',
    name: 'The Gentleman\'s Quarter',
    address: '18 King Street, Midtown',
    phone: '+1 (555) 876-5432',
    distance: 1.2,
    lat: 40.7150,
    lng: -73.9950,
    rating: 4.8,
    reviews: 189,
    priceRange: '$$',
    description: 'A premium barbershop for the modern gentleman. Classic techniques meet contemporary style in a refined, masculine atmosphere with complimentary beverages.',
    hours: 'Mon-Fri: 8:00 AM - 7:00 PM | Sat: 9:00 AM - 6:00 PM | Sun: Closed',
    isOpen: true,
    tags: ['haircut', 'beard', 'facial'],
    emoji: '💈',
    services: [
      { name: 'Gentleman\'s Haircut', duration: '30 min', price: 40 },
      { name: 'Beard Sculpt & Trim', duration: '20 min', price: 25 },
      { name: 'Hot Towel Shave', duration: '30 min', price: 35 },
      { name: 'Haircut + Beard Combo', duration: '45 min', price: 55 },
      { name: 'Executive Facial', duration: '40 min', price: 50 },
      { name: 'Grey Blending', duration: '30 min', price: 45 }
    ],
    staff: [
      { name: 'James Mitchell', role: 'Master Barber', initials: 'JM' },
      { name: 'Carlos Vega', role: 'Senior Barber', initials: 'CV' },
      { name: 'Tony Russo', role: 'Barber', initials: 'TR' }
    ],
    reviewList: [
      { author: 'Mike R.', rating: 5, text: 'Best barbershop in town. James gives the sharpest fades. The hot towel shave is a must-try.' },
      { author: 'Alex W.', rating: 5, text: 'The attention to detail here is amazing. Love the atmosphere and the free coffee!' },
      { author: 'Ryan B.', rating: 4, text: 'Consistently great cuts. Can get busy on Saturdays so book ahead.' }
    ]
  },
  {
    id: 's3',
    name: 'Bloom Beauty Bar',
    address: '95 Rose Boulevard, Westside',
    phone: '+1 (555) 321-9876',
    distance: 2.1,
    lat: 40.7200,
    lng: -74.0100,
    rating: 4.7,
    reviews: 312,
    priceRange: '$$$',
    description: 'A full-service beauty destination offering cutting-edge hair design, artisan coloring, rejuvenating spa treatments, and bridal packages in an Instagram-worthy setting.',
    hours: 'Mon-Sat: 10:00 AM - 9:00 PM | Sun: 11:00 AM - 7:00 PM',
    isOpen: true,
    tags: ['haircut', 'coloring', 'spa', 'facial'],
    emoji: '🌸',
    services: [
      { name: 'Signature Haircut', duration: '40 min', price: 60 },
      { name: 'Blowout & Style', duration: '30 min', price: 45 },
      { name: 'Full Color Service', duration: '120 min', price: 150 },
      { name: 'Luxury Facial', duration: '60 min', price: 95 },
      { name: 'Bridal Hair Package', duration: '180 min', price: 350 },
      { name: 'Keratin Treatment', duration: '150 min', price: 250 }
    ],
    staff: [
      { name: 'Sophia Laurent', role: 'Creative Director', initials: 'SL' },
      { name: 'Nina Okafor', role: 'Color Specialist', initials: 'NO' },
      { name: 'Priya Sharma', role: 'Spa Therapist', initials: 'PS' },
      { name: 'Zoe Kim', role: 'Junior Stylist', initials: 'ZK' }
    ],
    reviewList: [
      { author: 'Emma L.', rating: 5, text: 'Sophia is incredible! My bridal hair was absolutely perfect. Everyone at the wedding complimented it.' },
      { author: 'Rachel G.', rating: 5, text: 'The luxury facial here is heavenly. Priya really knows what she\'s doing.' },
      { author: 'Jennifer H.', rating: 4, text: 'Beautiful salon, great service. Prices are high but you get what you pay for.' }
    ]
  },
  {
    id: 's4',
    name: 'FreshFade Studio',
    address: '7 Market Street, East End',
    phone: '+1 (555) 654-3210',
    distance: 0.5,
    lat: 40.7100,
    lng: -73.9900,
    rating: 4.6,
    reviews: 156,
    priceRange: '$',
    description: 'Trendy, affordable barbershop known for precision fades, creative designs, and a chill vibe. Walk-ins welcome. Follow us for the latest styles.',
    hours: 'Mon-Sat: 10:00 AM - 8:00 PM | Sun: 12:00 PM - 5:00 PM',
    isOpen: true,
    tags: ['haircut', 'beard'],
    emoji: '✂️',
    services: [
      { name: 'Fresh Fade', duration: '25 min', price: 20 },
      { name: 'Buzz Cut', duration: '15 min', price: 15 },
      { name: 'Beard Lineup', duration: '15 min', price: 12 },
      { name: 'Fade + Beard Combo', duration: '35 min', price: 30 },
      { name: 'Hair Design / Art', duration: '40 min', price: 35 },
      { name: 'Kids Haircut', duration: '20 min', price: 15 }
    ],
    staff: [
      { name: 'DeShawn Williams', role: 'Lead Barber', initials: 'DW' },
      { name: 'Jamal Harris', role: 'Barber', initials: 'JH' }
    ],
    reviewList: [
      { author: 'Chris P.', rating: 5, text: 'DeShawn is the best barber in the area. Clean fades every time for an unbeatable price.' },
      { author: 'Andre M.', rating: 4, text: 'Great shop, good vibes. Sometimes have to wait but it\'s worth it.' },
      { author: 'Kevin L.', rating: 5, text: 'Got a hair design here and it was fire. Very talented barbers.' }
    ]
  },
  {
    id: 's5',
    name: 'Serenity Spa & Salon',
    address: '230 Lakeview Drive, Northpoint',
    phone: '+1 (555) 111-2233',
    distance: 3.5,
    lat: 40.7300,
    lng: -74.0200,
    rating: 4.9,
    reviews: 428,
    priceRange: '$$$',
    description: 'An award-winning spa and salon offering holistic beauty treatments, organic products, and a tranquil environment. Voted #1 Spa in the city for three consecutive years.',
    hours: 'Mon-Fri: 9:00 AM - 9:00 PM | Sat-Sun: 10:00 AM - 8:00 PM',
    isOpen: false,
    tags: ['spa', 'facial', 'haircut', 'coloring'],
    emoji: '🧖',
    services: [
      { name: 'Organic Haircut', duration: '40 min', price: 70 },
      { name: 'Aromatherapy Facial', duration: '60 min', price: 110 },
      { name: 'Full Body Massage', duration: '90 min', price: 140 },
      { name: 'Organic Hair Color', duration: '120 min', price: 200 },
      { name: 'Anti-Aging Facial', duration: '75 min', price: 150 },
      { name: 'Detox Scalp Treatment', duration: '45 min', price: 80 }
    ],
    staff: [
      { name: 'Dr. Amanda Wells', role: 'Wellness Director', initials: 'AW' },
      { name: 'Kenji Tanaka', role: 'Senior Stylist', initials: 'KT' },
      { name: 'Maria Santos', role: 'Spa Therapist', initials: 'MS' },
      { name: 'Liam O\'Brien', role: 'Colorist', initials: 'LO' }
    ],
    reviewList: [
      { author: 'Patricia N.', rating: 5, text: 'A true oasis. The aromatherapy facial changed my skin. Dr. Wells is amazing.' },
      { author: 'Steven J.', rating: 5, text: 'The best spa experience in the city. Everything is organic and the results are incredible.' },
      { author: 'Michelle R.', rating: 5, text: 'Worth the drive! The detox scalp treatment is heavenly.' }
    ]
  },
  {
    id: 's6',
    name: 'Urban Edge Hair Co.',
    address: '56 Industrial Blvd, Arts District',
    phone: '+1 (555) 444-7788',
    distance: 1.8,
    lat: 40.7180,
    lng: -73.9980,
    rating: 4.5,
    reviews: 201,
    priceRange: '$$',
    description: 'A creative salon in the heart of the arts district. Known for bold transformations, vivid colors, and editorial-inspired looks. Express your unique style.',
    hours: 'Tue-Sat: 11:00 AM - 8:00 PM | Sun-Mon: Closed',
    isOpen: true,
    tags: ['haircut', 'coloring'],
    emoji: '🎨',
    services: [
      { name: 'Creative Cut', duration: '40 min', price: 50 },
      { name: 'Vivid Color', duration: '150 min', price: 200 },
      { name: 'Color Correction', duration: '180 min', price: 280 },
      { name: 'Undercut Design', duration: '45 min', price: 55 },
      { name: 'Extensions Install', duration: '180 min', price: 350 },
      { name: 'Ombre / Sombre', duration: '120 min', price: 180 }
    ],
    staff: [
      { name: 'Raven Black', role: 'Color Artist', initials: 'RB' },
      { name: 'Finn O\'Sullivan', role: 'Senior Stylist', initials: 'FO' },
      { name: 'Yuki Sato', role: 'Stylist', initials: 'YS' }
    ],
    reviewList: [
      { author: 'Chloe V.', rating: 5, text: 'Raven is a true artist! My vivid purple came out exactly as I envisioned.' },
      { author: 'Jordan S.', rating: 4, text: 'Great creative salon. The vibe is cool and the stylists are talented.' },
      { author: 'Taylor M.', rating: 5, text: 'Best color correction I\'ve ever had. They saved my hair after a box dye disaster.' }
    ]
  },
  {
    id: 's7',
    name: 'Clipper King Barbershop',
    address: '12 Main Street, Old Town',
    phone: '+1 (555) 999-8877',
    distance: 0.3,
    lat: 40.7110,
    lng: -74.0080,
    rating: 4.4,
    reviews: 98,
    priceRange: '$',
    description: 'No-frills, classic barbershop with decades of experience. Quick, clean cuts at honest prices. A neighborhood favorite since 1995.',
    hours: 'Mon-Sat: 8:00 AM - 6:00 PM | Sun: Closed',
    isOpen: true,
    tags: ['haircut', 'beard'],
    emoji: '👑',
    services: [
      { name: 'Standard Haircut', duration: '20 min', price: 18 },
      { name: 'Senior / Kids Cut', duration: '20 min', price: 14 },
      { name: 'Beard Trim', duration: '10 min', price: 10 },
      { name: 'Head Shave', duration: '15 min', price: 15 },
      { name: 'Haircut + Beard', duration: '30 min', price: 25 }
    ],
    staff: [
      { name: 'Big Joe Moretti', role: 'Owner / Barber', initials: 'JM' },
      { name: 'Sam Moretti', role: 'Barber', initials: 'SM' }
    ],
    reviewList: [
      { author: 'Frank D.', rating: 5, text: 'Been coming here for 20 years. Joe always gets it right. No nonsense.' },
      { author: 'Tom W.', rating: 4, text: 'Quick, affordable, and consistent. Exactly what a barbershop should be.' },
      { author: 'Mark C.', rating: 4, text: 'Great old-school barber shop. Cash only though, heads up.' }
    ]
  },
  {
    id: 's8',
    name: 'Velvet Touch Salon',
    address: '180 Park Avenue, Uptown',
    phone: '+1 (555) 222-3344',
    distance: 2.6,
    lat: 40.7250,
    lng: -73.9900,
    rating: 4.7,
    reviews: 274,
    priceRange: '$$',
    description: 'A chic, modern salon specializing in precision cuts, smoothing treatments, and rejuvenating facials. Our team stays ahead of trends with ongoing international training.',
    hours: 'Mon-Sat: 9:00 AM - 7:00 PM | Sun: 10:00 AM - 5:00 PM',
    isOpen: true,
    tags: ['haircut', 'spa', 'facial', 'coloring'],
    emoji: '✨',
    services: [
      { name: 'Precision Haircut', duration: '35 min', price: 45 },
      { name: 'Brazilian Blowout', duration: '120 min', price: 250 },
      { name: 'Hydrating Facial', duration: '50 min', price: 75 },
      { name: 'Root Touch-Up', duration: '60 min', price: 80 },
      { name: 'Full Highlights', duration: '120 min', price: 160 },
      { name: 'Lash Lift & Tint', duration: '45 min', price: 65 }
    ],
    staff: [
      { name: 'Isabella Fontaine', role: 'Lead Stylist', initials: 'IF' },
      { name: 'Derek Washington', role: 'Colorist', initials: 'DW' },
      { name: 'Hannah Lee', role: 'Aesthetician', initials: 'HL' }
    ],
    reviewList: [
      { author: 'Natalie P.', rating: 5, text: 'Isabella is phenomenal. My Brazilian blowout lasted for months and my hair never looked better.' },
      { author: 'Lauren C.', rating: 5, text: 'The hydrating facial here is life-changing. Hannah is so knowledgeable about skincare.' },
      { author: 'Diana M.', rating: 4, text: 'Lovely salon with talented staff. Parking can be tricky in the area.' }
    ]
  },
  {
    id: 's9',
    name: 'Roots & Ritual',
    address: '88 Elm Street, Village Green',
    phone: '+1 (555) 777-6655',
    distance: 1.5,
    lat: 40.7190,
    lng: -74.0020,
    rating: 4.8,
    reviews: 167,
    priceRange: '$$',
    description: 'An eco-conscious salon using 100% sustainable and cruelty-free products. Specializing in natural hair care, textured hair, and holistic beauty rituals.',
    hours: 'Tue-Sat: 10:00 AM - 7:00 PM | Sun-Mon: Closed',
    isOpen: true,
    tags: ['haircut', 'coloring', 'spa'],
    emoji: '🌿',
    services: [
      { name: 'Natural Hair Cut & Shape', duration: '40 min', price: 50 },
      { name: 'Twist / Loc Maintenance', duration: '60 min', price: 75 },
      { name: 'Plant-Based Color', duration: '90 min', price: 130 },
      { name: 'Curl Definition Treatment', duration: '60 min', price: 85 },
      { name: 'Scalp Ritual', duration: '30 min', price: 45 },
      { name: 'Silk Press', duration: '60 min', price: 70 }
    ],
    staff: [
      { name: 'Amara Johnson', role: 'Founder / Stylist', initials: 'AJ' },
      { name: 'Kai Rivera', role: 'Natural Hair Specialist', initials: 'KR' },
      { name: 'Zara Adams', role: 'Colorist', initials: 'ZA' }
    ],
    reviewList: [
      { author: 'Tiana W.', rating: 5, text: 'Finally a salon that truly understands natural hair! Amara is amazing with curly textures.' },
      { author: 'Jasmine B.', rating: 5, text: 'Love that everything is eco-friendly. My hair has never been healthier since coming here.' },
      { author: 'Olivia G.', rating: 4, text: 'Beautiful space, great products. The scalp ritual is so relaxing.' }
    ]
  },
  {
    id: 's10',
    name: 'Platinum Shears',
    address: '5 Diamond Plaza, Financial District',
    phone: '+1 (555) 888-1122',
    distance: 4.2,
    lat: 40.7050,
    lng: -74.0150,
    rating: 4.3,
    reviews: 134,
    priceRange: '$$$',
    description: 'Exclusive, appointment-only salon catering to professionals. Express services available during lunch hours. Complimentary espresso bar and private styling suites.',
    hours: 'Mon-Fri: 7:00 AM - 8:00 PM | Sat: 9:00 AM - 5:00 PM | Sun: Closed',
    isOpen: false,
    tags: ['haircut', 'beard', 'facial'],
    emoji: '💎',
    services: [
      { name: 'Executive Haircut', duration: '30 min', price: 65 },
      { name: 'Express Cut (Lunch)', duration: '15 min', price: 35 },
      { name: 'Beard Sculpting', duration: '20 min', price: 30 },
      { name: 'Power Facial', duration: '30 min', price: 60 },
      { name: 'VIP Package (Cut+Beard+Facial)', duration: '60 min', price: 120 },
      { name: 'Scalp Micropigmentation Consult', duration: '30 min', price: 0 }
    ],
    staff: [
      { name: 'Alexander Grant', role: 'Director', initials: 'AG' },
      { name: 'Victoria Reeves', role: 'Senior Stylist', initials: 'VR' },
      { name: 'Hassan Ali', role: 'Grooming Specialist', initials: 'HA' }
    ],
    reviewList: [
      { author: 'Robert T.', rating: 5, text: 'The VIP package is worth every cent. Alexander is meticulous and professional.' },
      { author: 'Brian S.', rating: 4, text: 'Love the express lunch cut option. Perfect for busy workdays.' },
      { author: 'James F.', rating: 4, text: 'High-end experience. Private suites are a nice touch for busy execs.' }
    ]
  }
];

const STAFF_GRADIENTS = [
  'linear-gradient(135deg, #00e5ff, #8b5cf6)',
  'linear-gradient(135deg, #ff2d95, #ff8a00)',
  'linear-gradient(135deg, #8b5cf6, #ff2d95)',
  'linear-gradient(135deg, #00ff88, #00e5ff)',
  'linear-gradient(135deg, #ffe600, #ff8a00)',
  'linear-gradient(135deg, #00e5ff, #00ff88)'
];

const CUSTOMER_GRADIENTS = [
  'linear-gradient(135deg, #00e5ff, #8b5cf6)',
  'linear-gradient(135deg, #ff2d95, #8b5cf6)',
  'linear-gradient(135deg, #00ff88, #00e5ff)',
  'linear-gradient(135deg, #ff8a00, #ff2d95)',
  'linear-gradient(135deg, #8b5cf6, #00e5ff)'
];

const TAG_CLASSES = {
  'haircut': 'tag-cyan',
  'beard': 'tag-orange',
  'spa': 'tag-purple',
  'coloring': 'tag-magenta',
  'facial': 'tag-green'
};

// ========== STATE ==========

let state = {
  salons: [...SEED_SALONS],
  appointments: [],
  customers: [],
  managedStaff: [],
  currentPage: 'discover',
  currentAppointmentTab: 'upcoming',
  currentSalonId: null,
  mapInstance: null,
  mapMarkers: []
};

// ========== INIT ==========

function init() {
  loadState();
  seedIfEmpty();
  setupNavigation();
  setupSearch();
  setupFilters();
  setupAppointmentTabs();
  setupCustomerSearch();
  renderCurrentPage();
  updateAppointmentBadge();
}

function loadState() {
  try {
    const saved = localStorage.getItem('salonTrackerState');
    if (saved) {
      const parsed = JSON.parse(saved);
      state.appointments = parsed.appointments || [];
      state.customers = parsed.customers || [];
      state.managedStaff = parsed.managedStaff || [];
    }
  } catch (e) {
    console.warn('Failed to load state:', e);
  }
}

function saveState() {
  try {
    localStorage.setItem('salonTrackerState', JSON.stringify({
      appointments: state.appointments,
      customers: state.customers,
      managedStaff: state.managedStaff
    }));
  } catch (e) {
    console.warn('Failed to save state:', e);
  }
}

function seedIfEmpty() {
  if (state.customers.length === 0) {
    state.customers = [
      { id: 'c1', name: 'Emily Watson', phone: '+1 (555) 100-2001', email: 'emily.w@email.com', prefs: 'Prefers layered cuts, sensitive scalp', visits: 12, lastVisit: '2026-08-25' },
      { id: 'c2', name: 'Jason Park', phone: '+1 (555) 100-2002', email: 'jason.park@email.com', prefs: 'Low fade, beard lineup every 2 weeks', visits: 24, lastVisit: '2026-08-28' },
      { id: 'c3', name: 'Amira Hassan', phone: '+1 (555) 100-2003', email: 'amira.h@email.com', prefs: 'Curly hair specialist needed, no sulfate products', visits: 8, lastVisit: '2026-08-20' },
      { id: 'c4', name: 'Marcus Johnson', phone: '+1 (555) 100-2004', email: 'marcus.j@email.com', prefs: 'Regular beard trim, straight razor shave', visits: 18, lastVisit: '2026-08-27' },
      { id: 'c5', name: 'Sophie Chen', phone: '+1 (555) 100-2005', email: 'sophie.c@email.com', prefs: 'Balayage touch-ups every 3 months', visits: 6, lastVisit: '2026-08-15' },
      { id: 'c6', name: 'Ryan O\'Brien', phone: '+1 (555) 100-2006', email: 'ryan.ob@email.com', prefs: 'Classic cut, no product on top', visits: 30, lastVisit: '2026-08-29' }
    ];
  }

  if (state.managedStaff.length === 0) {
    state.managedStaff = [
      { id: 'ms1', name: 'Elena Rodriguez', role: 'Creative Director', specialties: ['Precision Cuts', 'Styling', 'Consultation'], availability: 'available', clients: 89, rating: 4.9 },
      { id: 'ms2', name: 'Marcus Chen', role: 'Senior Colorist', specialties: ['Balayage', 'Vivid Color', 'Highlights'], availability: 'available', clients: 67, rating: 4.8 },
      { id: 'ms3', name: 'James Mitchell', role: 'Master Barber', specialties: ['Fades', 'Hot Towel Shave', 'Beard Design'], availability: 'busy', clients: 112, rating: 4.9 },
      { id: 'ms4', name: 'Priya Sharma', role: 'Spa Therapist', specialties: ['Facials', 'Aromatherapy', 'Scalp Treatments'], availability: 'available', clients: 54, rating: 4.7 },
      { id: 'ms5', name: 'DeShawn Williams', role: 'Lead Barber', specialties: ['Fades', 'Hair Art', 'Lineups'], availability: 'off', clients: 95, rating: 4.8 },
      { id: 'ms6', name: 'Sophia Laurent', role: 'Creative Director', specialties: ['Bridal', 'Editorial', 'Color Correction'], availability: 'available', clients: 76, rating: 4.9 }
    ];
  }

  if (state.appointments.length === 0) {
    const today = new Date();
    state.appointments = [
      {
        id: 'a1', salonId: 's1', salonName: 'Luxe Cuts Studio', service: 'Premium Haircut & Style',
        staff: 'Elena Rodriguez', customer: 'Emily Watson', date: formatDate(addDays(today, 1)),
        time: '10:30', status: 'upcoming', price: 55, notes: ''
      },
      {
        id: 'a2', salonId: 's2', salonName: 'The Gentleman\'s Quarter', service: 'Haircut + Beard Combo',
        staff: 'James Mitchell', customer: 'Jason Park', date: formatDate(addDays(today, 2)),
        time: '14:00', status: 'upcoming', price: 55, notes: 'Wants a skin fade'
      },
      {
        id: 'a3', salonId: 's4', salonName: 'FreshFade Studio', service: 'Fresh Fade',
        staff: 'DeShawn Williams', customer: 'Marcus Johnson', date: formatDate(addDays(today, 3)),
        time: '11:00', status: 'upcoming', price: 20, notes: ''
      },
      {
        id: 'a4', salonId: 's3', salonName: 'Bloom Beauty Bar', service: 'Full Color Service',
        staff: 'Nina Okafor', customer: 'Sophie Chen', date: formatDate(addDays(today, -3)),
        time: '13:00', status: 'completed', price: 150, notes: 'Warm blonde tones'
      },
      {
        id: 'a5', salonId: 's1', salonName: 'Luxe Cuts Studio', service: 'Scalp Spa Treatment',
        staff: 'Aisha Patel', customer: 'Amira Hassan', date: formatDate(addDays(today, -5)),
        time: '15:30', status: 'completed', price: 65, notes: ''
      },
      {
        id: 'a6', salonId: 's8', salonName: 'Velvet Touch Salon', service: 'Brazilian Blowout',
        staff: 'Isabella Fontaine', customer: 'Emily Watson', date: formatDate(addDays(today, -1)),
        time: '09:00', status: 'cancelled', price: 250, notes: 'Had to reschedule'
      }
    ];
  }
  saveState();
}

// ========== NAVIGATION ==========

function setupNavigation() {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      const page = item.dataset.page;
      navigateTo(page);
    });
  });
}

function navigateTo(page) {
  state.currentPage = page;

  // Update nav
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.querySelector(`[data-page="${page}"]`).classList.add('active');

  // Update pages
  document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
  document.getElementById(`page-${page}`).classList.add('active');

  renderCurrentPage();
}

function renderCurrentPage() {
  switch (state.currentPage) {
    case 'discover': renderSalons(); break;
    case 'map': renderMap(); break;
    case 'appointments': renderAppointments(); break;
    case 'customers': renderCustomers(); break;
    case 'staff': renderStaff(); break;
    case 'analytics': renderAnalytics(); break;
  }
}

// ========== DISCOVER / SALONS ==========

function setupSearch() {
  const input = document.getElementById('salon-search');
  input.addEventListener('input', debounce(renderSalons, 200));
}

function setupFilters() {
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      renderSalons();
    });
  });

  document.getElementById('sort-select').addEventListener('change', renderSalons);
}

function renderSalons() {
  const query = document.getElementById('salon-search').value.toLowerCase().trim();
  const activeFilter = document.querySelector('.filter-chip.active')?.dataset.filter || 'all';
  const sortBy = document.getElementById('sort-select').value;

  let filtered = [...state.salons];

  // Search
  if (query) {
    filtered = filtered.filter(s =>
      s.name.toLowerCase().includes(query) ||
      s.address.toLowerCase().includes(query) ||
      s.services.some(sv => sv.name.toLowerCase().includes(query)) ||
      s.tags.some(t => t.includes(query))
    );
  }

  // Filter
  if (activeFilter !== 'all') {
    filtered = filtered.filter(s => s.tags.includes(activeFilter));
  }

  // Sort
  switch (sortBy) {
    case 'rating': filtered.sort((a, b) => b.rating - a.rating); break;
    case 'distance': filtered.sort((a, b) => a.distance - b.distance); break;
    case 'price-low': filtered.sort((a, b) => a.services[0].price - b.services[0].price); break;
    case 'price-high': filtered.sort((a, b) => b.services[0].price - a.services[0].price); break;
  }

  const grid = document.getElementById('salons-grid');

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1;">
        <div class="empty-icon">🔍</div>
        <h3>No salons found</h3>
        <p>Try adjusting your search or filters to find what you're looking for.</p>
      </div>`;
    return;
  }

  grid.innerHTML = filtered.map(salon => {
    const minPrice = Math.min(...salon.services.map(s => s.price));
    const maxPrice = Math.max(...salon.services.map(s => s.price));
    const stars = '★'.repeat(Math.floor(salon.rating)) + (salon.rating % 1 >= 0.5 ? '½' : '');

    return `
      <div class="glass-card" onclick="openSalonDetail('${salon.id}')" style="cursor:pointer;">
        <div class="card-image-placeholder">${salon.emoji}</div>
        <div class="card-body">
          <div class="card-header">
            <div>
              <div class="card-title">${salon.name}</div>
              <div class="card-subtitle">📍 ${salon.address}</div>
            </div>
            <div class="card-rating">
              <span class="stars">${stars}</span>
              <span>${salon.rating}</span>
            </div>
          </div>
          <div class="card-tags">
            ${salon.tags.map(t => `<span class="tag ${TAG_CLASSES[t] || 'tag-cyan'}">${t}</span>`).join('')}
          </div>
          <div class="card-meta">
            <span class="card-price">$${minPrice} — $${maxPrice}</span>
            <span class="card-status ${salon.isOpen ? 'status-open' : 'status-closed'}">${salon.isOpen ? 'Open' : 'Closed'}</span>
            <span class="card-distance">📍 ${salon.distance} km</span>
          </div>
        </div>
      </div>`;
  }).join('');
}

// ========== SALON DETAIL ==========

function openSalonDetail(salonId) {
  const salon = state.salons.find(s => s.id === salonId);
  if (!salon) return;
  state.currentSalonId = salonId;

  document.getElementById('detail-hero').textContent = salon.emoji;
  document.getElementById('detail-name').textContent = salon.name;
  document.getElementById('detail-rating').innerHTML = `⭐ ${salon.rating} (${salon.reviews} reviews)`;
  document.getElementById('detail-address').innerHTML = `📍 ${salon.address}`;
  document.getElementById('detail-phone').innerHTML = `📞 ${salon.phone}`;
  document.getElementById('detail-description').textContent = salon.description;
  document.getElementById('detail-hours').textContent = salon.hours;

  // Services
  document.getElementById('detail-services-tbody').innerHTML = salon.services.map(s => `
    <tr>
      <td>${s.name}</td>
      <td class="service-duration">🕐 ${s.duration}</td>
      <td class="service-price">${s.price === 0 ? 'Free' : '$' + s.price}</td>
    </tr>`).join('');

  // Staff
  document.getElementById('detail-staff-list').innerHTML = salon.staff.map((s, i) => `
    <div class="staff-chip">
      <div class="staff-avatar" style="background:${STAFF_GRADIENTS[i % STAFF_GRADIENTS.length]}">${s.initials}</div>
      <div class="staff-chip-info">
        <span class="staff-chip-name">${s.name}</span>
        <span class="staff-chip-role">${s.role}</span>
      </div>
    </div>`).join('');

  // Reviews
  document.getElementById('detail-reviews-list').innerHTML = salon.reviewList.map(r => `
    <div class="review-item">
      <div class="review-header">
        <span class="review-author">${r.author}</span>
        <span class="review-rating">${'★'.repeat(r.rating)}</span>
      </div>
      <p class="review-text">${r.text}</p>
    </div>`).join('');

  openModal('salon-detail-modal');
}

function bookFromDetail() {
  closeModal('salon-detail-modal');
  openBookingModal(state.currentSalonId);
}

// ========== APPOINTMENTS ==========

function setupAppointmentTabs() {
  document.querySelectorAll('#appointment-tabs .section-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('#appointment-tabs .section-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.currentAppointmentTab = tab.dataset.tab;
      renderAppointments();
    });
  });
}

function renderAppointments() {
  const filtered = state.appointments.filter(a => a.status === state.currentAppointmentTab);
  const list = document.getElementById('appointments-list');

  if (filtered.length === 0) {
    const emptyMessages = {
      upcoming: { icon: '📅', title: 'No upcoming appointments', text: 'Book an appointment from the Discover page to get started.' },
      completed: { icon: '✅', title: 'No completed appointments yet', text: 'Your completed appointments will appear here.' },
      cancelled: { icon: '🚫', title: 'No cancelled appointments', text: 'Cancelled appointments will show up here.' }
    };
    const msg = emptyMessages[state.currentAppointmentTab];
    list.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">${msg.icon}</div>
        <h3>${msg.title}</h3>
        <p>${msg.text}</p>
      </div>`;
    return;
  }

  filtered.sort((a, b) => new Date(a.date + 'T' + a.time) - new Date(b.date + 'T' + b.time));

  list.innerHTML = filtered.map(appt => {
    const d = new Date(appt.date);
    const day = d.getDate();
    const month = d.toLocaleString('en', { month: 'short' }).toUpperCase();
    const isUpcoming = appt.status === 'upcoming';

    return `
      <div class="appointment-card">
        <div class="appointment-date">
          <div class="date-day">${day}</div>
          <div class="date-month">${month}</div>
        </div>
        <div class="appointment-info">
          <h4>${appt.salonName}</h4>
          <div class="appointment-details">
            <span>✂️ ${appt.service}</span>
            <span>🕐 ${formatTime(appt.time)}</span>
            <span>👤 ${appt.staff || 'Any Staff'}</span>
            <span>💰 $${appt.price}</span>
          </div>
          ${appt.notes ? `<div style="font-size:0.8rem;color:var(--text-muted);margin-top:4px;">📝 ${appt.notes}</div>` : ''}
        </div>
        <span class="appointment-status ${appt.status}">${appt.status}</span>
        ${isUpcoming ? `
          <div class="appointment-actions">
            <button class="btn btn-ghost btn-sm" onclick="completeAppointment('${appt.id}')">✅</button>
            <button class="btn btn-danger btn-sm" onclick="cancelAppointment('${appt.id}')">✕</button>
          </div>` : ''}
      </div>`;
  }).join('');
}

function openBookingModal(preselectedSalonId) {
  // Populate salon dropdown
  const salonSelect = document.getElementById('booking-salon');
  salonSelect.innerHTML = state.salons.map(s =>
    `<option value="${s.id}" ${s.id === preselectedSalonId ? 'selected' : ''}>${s.name}</option>`
  ).join('');

  populateBookingServices();
  salonSelect.addEventListener('change', populateBookingServices);

  // Set default date to tomorrow
  const tomorrow = addDays(new Date(), 1);
  document.getElementById('booking-date').value = formatDate(tomorrow);
  document.getElementById('booking-time').value = '10:00';
  document.getElementById('booking-customer').value = '';
  document.getElementById('booking-notes').value = '';

  openModal('booking-modal');
}

function populateBookingServices() {
  const salonId = document.getElementById('booking-salon').value;
  const salon = state.salons.find(s => s.id === salonId);
  if (!salon) return;

  document.getElementById('booking-service').innerHTML = salon.services.map(s =>
    `<option value="${s.name}" data-price="${s.price}">${s.name} — $${s.price}</option>`
  ).join('');

  document.getElementById('booking-staff').innerHTML =
    `<option value="">Any Available</option>` +
    salon.staff.map(s => `<option value="${s.name}">${s.name} (${s.role})</option>`).join('');
}

function saveAppointment() {
  const salonId = document.getElementById('booking-salon').value;
  const salon = state.salons.find(s => s.id === salonId);
  const serviceName = document.getElementById('booking-service').value;
  const service = salon?.services.find(s => s.name === serviceName);
  const staff = document.getElementById('booking-staff').value;
  const date = document.getElementById('booking-date').value;
  const time = document.getElementById('booking-time').value;
  const customer = document.getElementById('booking-customer').value.trim();
  const notes = document.getElementById('booking-notes').value.trim();

  if (!date || !time || !customer) {
    showToast('Please fill in all required fields', 'error');
    return;
  }

  const appt = {
    id: 'a' + Date.now(),
    salonId,
    salonName: salon.name,
    service: serviceName,
    staff,
    customer,
    date,
    time,
    status: 'upcoming',
    price: service?.price || 0,
    notes
  };

  state.appointments.push(appt);
  saveState();
  closeModal('booking-modal');
  showToast(`Appointment booked at ${salon.name}!`);
  updateAppointmentBadge();

  if (state.currentPage === 'appointments') renderAppointments();
}

function completeAppointment(id) {
  const appt = state.appointments.find(a => a.id === id);
  if (appt) {
    appt.status = 'completed';
    saveState();
    renderAppointments();
    updateAppointmentBadge();
    showToast('Appointment marked as completed');
  }
}

function cancelAppointment(id) {
  const appt = state.appointments.find(a => a.id === id);
  if (appt) {
    appt.status = 'cancelled';
    saveState();
    renderAppointments();
    updateAppointmentBadge();
    showToast('Appointment cancelled', 'error');
  }
}

function updateAppointmentBadge() {
  const count = state.appointments.filter(a => a.status === 'upcoming').length;
  const badge = document.getElementById('appointment-badge');
  if (count > 0) {
    badge.textContent = count;
    badge.style.display = 'inline';
  } else {
    badge.style.display = 'none';
  }
}

// ========== CUSTOMERS ==========

function setupCustomerSearch() {
  document.getElementById('customer-search').addEventListener('input', debounce(renderCustomers, 200));
}

function renderCustomers() {
  const query = (document.getElementById('customer-search')?.value || '').toLowerCase().trim();
  let customers = [...state.customers];

  if (query) {
    customers = customers.filter(c =>
      c.name.toLowerCase().includes(query) ||
      c.phone.includes(query) ||
      c.email.toLowerCase().includes(query)
    );
  }

  const tbody = document.getElementById('customer-tbody');

  if (customers.length === 0) {
    tbody.innerHTML = `
      <tr><td colspan="6">
        <div class="empty-state">
          <div class="empty-icon">👤</div>
          <h3>No customers found</h3>
          <p>Add your first customer to get started.</p>
        </div>
      </td></tr>`;
    return;
  }

  tbody.innerHTML = customers.map((c, i) => {
    const initials = c.name.split(' ').map(n => n[0]).join('').toUpperCase();
    const grad = CUSTOMER_GRADIENTS[i % CUSTOMER_GRADIENTS.length];

    return `
      <tr>
        <td>
          <div class="customer-name-cell">
            <div class="customer-avatar" style="background:${grad}">${initials}</div>
            <div>
              <div style="font-weight:600;">${c.name}</div>
              <div style="font-size:0.75rem;color:var(--text-muted);">${c.prefs || 'No preferences set'}</div>
            </div>
          </div>
        </td>
        <td>${c.phone}</td>
        <td style="color:var(--text-secondary);">${c.email}</td>
        <td><span style="font-weight:700;color:var(--neon-cyan);">${c.visits}</span></td>
        <td style="color:var(--text-muted);">${c.lastVisit || '—'}</td>
        <td>
          <div style="display:flex;gap:var(--space-sm);">
            <button class="btn btn-ghost btn-sm" onclick="editCustomer('${c.id}')">✏️</button>
            <button class="btn btn-danger btn-sm" onclick="deleteCustomer('${c.id}')">🗑️</button>
          </div>
        </td>
      </tr>`;
  }).join('');
}

function openCustomerModal(editId) {
  document.getElementById('customer-edit-id').value = editId || '';
  document.getElementById('customer-modal-title').textContent = editId ? '✏️ Edit Customer' : '➕ Add Customer';

  if (editId) {
    const c = state.customers.find(cu => cu.id === editId);
    if (c) {
      document.getElementById('customer-name').value = c.name;
      document.getElementById('customer-phone').value = c.phone;
      document.getElementById('customer-email').value = c.email;
      document.getElementById('customer-prefs').value = c.prefs || '';
    }
  } else {
    document.getElementById('customer-name').value = '';
    document.getElementById('customer-phone').value = '';
    document.getElementById('customer-email').value = '';
    document.getElementById('customer-prefs').value = '';
  }

  openModal('customer-modal');
}

function editCustomer(id) {
  openCustomerModal(id);
}

function saveCustomer() {
  const editId = document.getElementById('customer-edit-id').value;
  const name = document.getElementById('customer-name').value.trim();
  const phone = document.getElementById('customer-phone').value.trim();
  const email = document.getElementById('customer-email').value.trim();
  const prefs = document.getElementById('customer-prefs').value.trim();

  if (!name || !phone) {
    showToast('Name and phone are required', 'error');
    return;
  }

  if (editId) {
    const c = state.customers.find(cu => cu.id === editId);
    if (c) {
      c.name = name;
      c.phone = phone;
      c.email = email;
      c.prefs = prefs;
      showToast('Customer updated successfully');
    }
  } else {
    state.customers.push({
      id: 'c' + Date.now(),
      name,
      phone,
      email,
      prefs,
      visits: 0,
      lastVisit: null
    });
    showToast('Customer added successfully');
  }

  saveState();
  closeModal('customer-modal');
  renderCustomers();
}

function deleteCustomer(id) {
  state.customers = state.customers.filter(c => c.id !== id);
  saveState();
  renderCustomers();
  showToast('Customer removed', 'info');
}

// ========== STAFF MANAGEMENT ==========

function renderStaff() {
  const grid = document.getElementById('staff-grid');

  grid.innerHTML = state.managedStaff.map((s, i) => {
    const initials = s.name.split(' ').map(n => n[0]).join('');
    const grad = STAFF_GRADIENTS[i % STAFF_GRADIENTS.length];

    return `
      <div class="staff-card">
        <div class="staff-avatar-lg" style="background:${grad}">${initials}</div>
        <h4>${s.name}</h4>
        <div class="staff-role">${s.role}</div>
        <div class="staff-specialties">
          ${s.specialties.map((sp, j) => `<span class="tag ${['tag-cyan', 'tag-magenta', 'tag-purple', 'tag-green', 'tag-orange'][j % 5]}">${sp}</span>`).join('')}
        </div>
        <button class="availability-toggle ${s.availability}" onclick="toggleAvailability('${s.id}')">
          ● ${s.availability.charAt(0).toUpperCase() + s.availability.slice(1)}
        </button>
        <div class="staff-stats">
          <div class="staff-stat">
            <div class="staff-stat-value">${s.clients}</div>
            <div class="staff-stat-label">Clients</div>
          </div>
          <div class="staff-stat">
            <div class="staff-stat-value">⭐ ${s.rating}</div>
            <div class="staff-stat-label">Rating</div>
          </div>
        </div>
        <div style="display:flex;gap:var(--space-sm);justify-content:center;margin-top:var(--space-md);">
          <button class="btn btn-ghost btn-sm" onclick="editStaffMember('${s.id}')">✏️ Edit</button>
          <button class="btn btn-danger btn-sm" onclick="deleteStaffMember('${s.id}')">🗑️</button>
        </div>
      </div>`;
  }).join('');
}

function toggleAvailability(id) {
  const s = state.managedStaff.find(st => st.id === id);
  if (s) {
    const cycle = { available: 'busy', busy: 'off', off: 'available' };
    s.availability = cycle[s.availability] || 'available';
    saveState();
    renderStaff();
  }
}

function openStaffModal(editId) {
  document.getElementById('staff-edit-id').value = editId || '';
  document.getElementById('staff-modal-title').textContent = editId ? '✏️ Edit Staff' : '➕ Add Staff';

  if (editId) {
    const s = state.managedStaff.find(st => st.id === editId);
    if (s) {
      document.getElementById('staff-name-input').value = s.name;
      document.getElementById('staff-role-input').value = s.role;
      document.getElementById('staff-specialties-input').value = s.specialties.join(', ');
    }
  } else {
    document.getElementById('staff-name-input').value = '';
    document.getElementById('staff-role-input').value = 'Stylist';
    document.getElementById('staff-specialties-input').value = '';
  }

  openModal('staff-modal');
}

function editStaffMember(id) {
  openStaffModal(id);
}

function saveStaff() {
  const editId = document.getElementById('staff-edit-id').value;
  const name = document.getElementById('staff-name-input').value.trim();
  const role = document.getElementById('staff-role-input').value;
  const specialties = document.getElementById('staff-specialties-input').value.split(',').map(s => s.trim()).filter(Boolean);

  if (!name) {
    showToast('Name is required', 'error');
    return;
  }

  if (editId) {
    const s = state.managedStaff.find(st => st.id === editId);
    if (s) {
      s.name = name;
      s.role = role;
      s.specialties = specialties;
      showToast('Staff updated successfully');
    }
  } else {
    state.managedStaff.push({
      id: 'ms' + Date.now(),
      name,
      role,
      specialties,
      availability: 'available',
      clients: 0,
      rating: 5.0
    });
    showToast('Staff member added');
  }

  saveState();
  closeModal('staff-modal');
  renderStaff();
}

function deleteStaffMember(id) {
  state.managedStaff = state.managedStaff.filter(s => s.id !== id);
  saveState();
  renderStaff();
  showToast('Staff member removed', 'info');
}

// ========== ANALYTICS ==========

function renderAnalytics() {
  renderAnalyticsStats();
  renderRevenueChart();
  renderServicesChart();
  renderTopLists();
}

function renderAnalyticsStats() {
  const completed = state.appointments.filter(a => a.status === 'completed');
  const today = new Date();

  const todayRev = completed
    .filter(a => a.date === formatDate(today))
    .reduce((s, a) => s + a.price, 0);

  const weekStart = addDays(today, -7);
  const weekRev = completed
    .filter(a => new Date(a.date) >= weekStart)
    .reduce((s, a) => s + a.price, 0);

  const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
  const monthRev = completed
    .filter(a => new Date(a.date) >= monthStart)
    .reduce((s, a) => s + a.price, 0);

  const totalClients = state.customers.length;

  document.getElementById('analytics-stats').innerHTML = `
    <div class="stat-card cyan">
      <div class="stat-icon">💰</div>
      <div class="stat-value">$${todayRev.toLocaleString()}</div>
      <div class="stat-label">Today's Revenue</div>
      <div class="stat-change positive">▲ Real-time</div>
    </div>
    <div class="stat-card magenta">
      <div class="stat-icon">📈</div>
      <div class="stat-value">$${weekRev.toLocaleString()}</div>
      <div class="stat-label">This Week</div>
      <div class="stat-change positive">▲ Last 7 days</div>
    </div>
    <div class="stat-card purple">
      <div class="stat-icon">📊</div>
      <div class="stat-value">$${monthRev.toLocaleString()}</div>
      <div class="stat-label">This Month</div>
      <div class="stat-change positive">▲ Month to date</div>
    </div>
    <div class="stat-card green">
      <div class="stat-icon">👥</div>
      <div class="stat-value">${totalClients}</div>
      <div class="stat-label">Total Customers</div>
      <div class="stat-change positive">▲ Active</div>
    </div>`;
}

function renderRevenueChart() {
  const canvas = document.getElementById('revenue-chart');
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;

  canvas.width = canvas.offsetWidth * dpr;
  canvas.height = canvas.offsetHeight * dpr;
  ctx.scale(dpr, dpr);

  const w = canvas.offsetWidth;
  const h = canvas.offsetHeight;
  const padding = { top: 20, right: 20, bottom: 40, left: 60 };
  const chartW = w - padding.left - padding.right;
  const chartH = h - padding.top - padding.bottom;

  ctx.clearRect(0, 0, w, h);

  // Generate data
  const today = new Date();
  const days = [];
  const values = [];
  for (let i = 6; i >= 0; i--) {
    const d = addDays(today, -i);
    const dateStr = formatDate(d);
    days.push(d.toLocaleString('en', { weekday: 'short' }));
    const dayRev = state.appointments
      .filter(a => a.status === 'completed' && a.date === dateStr)
      .reduce((s, a) => s + a.price, 0);
    // Add some visual data if empty
    values.push(dayRev || Math.floor(Math.random() * 200 + 100));
  }

  const maxVal = Math.max(...values, 100);

  // Grid lines
  ctx.strokeStyle = 'rgba(255,255,255,0.05)';
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = padding.top + chartH - (chartH * i / 4);
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(w - padding.right, y);
    ctx.stroke();

    // Labels
    ctx.fillStyle = 'rgba(255,255,255,0.3)';
    ctx.font = '11px Inter';
    ctx.textAlign = 'right';
    ctx.fillText('$' + Math.round(maxVal * i / 4), padding.left - 8, y + 4);
  }

  // Line
  const grad = ctx.createLinearGradient(padding.left, 0, w - padding.right, 0);
  grad.addColorStop(0, '#00e5ff');
  grad.addColorStop(0.5, '#8b5cf6');
  grad.addColorStop(1, '#ff2d95');

  ctx.strokeStyle = grad;
  ctx.lineWidth = 3;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.beginPath();

  const points = [];
  for (let i = 0; i < values.length; i++) {
    const x = padding.left + (chartW * i / (values.length - 1));
    const y = padding.top + chartH - (chartH * values[i] / maxVal);
    points.push({ x, y });
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();

  // Area fill
  const areaGrad = ctx.createLinearGradient(0, padding.top, 0, h - padding.bottom);
  areaGrad.addColorStop(0, 'rgba(0, 229, 255, 0.15)');
  areaGrad.addColorStop(1, 'rgba(0, 229, 255, 0)');

  ctx.fillStyle = areaGrad;
  ctx.beginPath();
  ctx.moveTo(points[0].x, h - padding.bottom);
  points.forEach(p => ctx.lineTo(p.x, p.y));
  ctx.lineTo(points[points.length - 1].x, h - padding.bottom);
  ctx.closePath();
  ctx.fill();

  // Dots
  points.forEach((p, i) => {
    ctx.fillStyle = '#06060e';
    ctx.beginPath();
    ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = i < 3 ? '#00e5ff' : i < 5 ? '#8b5cf6' : '#ff2d95';
    ctx.beginPath();
    ctx.arc(p.x, p.y, 3.5, 0, Math.PI * 2);
    ctx.fill();
  });

  // Day labels
  ctx.fillStyle = 'rgba(255,255,255,0.4)';
  ctx.font = '11px Inter';
  ctx.textAlign = 'center';
  days.forEach((d, i) => {
    const x = padding.left + (chartW * i / (days.length - 1));
    ctx.fillText(d, x, h - padding.bottom + 20);
  });
}

function renderServicesChart() {
  const canvas = document.getElementById('services-chart');
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;

  canvas.width = canvas.offsetWidth * dpr;
  canvas.height = canvas.offsetHeight * dpr;
  ctx.scale(dpr, dpr);

  const w = canvas.offsetWidth;
  const h = canvas.offsetHeight;
  const cx = w / 2;
  const cy = h / 2;
  const radius = Math.min(w, h) / 2 - 40;

  ctx.clearRect(0, 0, w, h);

  // Service categories
  const categories = {
    'Haircut': { count: 0, color: '#00e5ff' },
    'Coloring': { count: 0, color: '#ff2d95' },
    'Beard': { count: 0, color: '#ff8a00' },
    'Spa/Facial': { count: 0, color: '#8b5cf6' },
    'Other': { count: 0, color: '#00ff88' }
  };

  state.appointments.filter(a => a.status === 'completed').forEach(a => {
    const svc = a.service.toLowerCase();
    if (svc.includes('haircut') || svc.includes('cut') || svc.includes('fade') || svc.includes('blowout')) categories['Haircut'].count++;
    else if (svc.includes('color') || svc.includes('balayage') || svc.includes('highlight') || svc.includes('ombre')) categories['Coloring'].count++;
    else if (svc.includes('beard') || svc.includes('shave')) categories['Beard'].count++;
    else if (svc.includes('spa') || svc.includes('facial') || svc.includes('massage') || svc.includes('treatment')) categories['Spa/Facial'].count++;
    else categories['Other'].count++;
  });

  // Ensure visual data
  const hasData = Object.values(categories).some(c => c.count > 0);
  if (!hasData) {
    categories['Haircut'].count = 45;
    categories['Coloring'].count = 25;
    categories['Beard'].count = 18;
    categories['Spa/Facial'].count = 8;
    categories['Other'].count = 4;
  }

  const total = Object.values(categories).reduce((s, c) => s + c.count, 0);
  let startAngle = -Math.PI / 2;

  const entries = Object.entries(categories).filter(([_, v]) => v.count > 0);

  entries.forEach(([name, data]) => {
    const sliceAngle = (data.count / total) * Math.PI * 2;
    const endAngle = startAngle + sliceAngle;

    // Draw slice
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fillStyle = data.color;
    ctx.globalAlpha = 0.8;
    ctx.fill();
    ctx.globalAlpha = 1;

    // Slice border
    ctx.strokeStyle = '#06060e';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Label
    const midAngle = startAngle + sliceAngle / 2;
    const labelRadius = radius + 20;
    const lx = cx + Math.cos(midAngle) * labelRadius;
    const ly = cy + Math.sin(midAngle) * labelRadius;

    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    ctx.font = '11px Inter';
    ctx.textAlign = midAngle > Math.PI / 2 && midAngle < Math.PI * 1.5 ? 'right' : 'left';
    ctx.fillText(`${name} ${Math.round(data.count / total * 100)}%`, lx, ly);

    startAngle = endAngle;
  });

  // Inner circle (donut)
  ctx.beginPath();
  ctx.arc(cx, cy, radius * 0.55, 0, Math.PI * 2);
  ctx.fillStyle = '#0c0c1a';
  ctx.fill();

  // Center text
  ctx.fillStyle = '#f0f0f8';
  ctx.font = 'bold 20px Inter';
  ctx.textAlign = 'center';
  ctx.fillText(total, cx, cy - 2);
  ctx.fillStyle = 'rgba(255,255,255,0.4)';
  ctx.font = '11px Inter';
  ctx.fillText('Services', cx, cy + 16);
}

function renderTopLists() {
  // Top Services
  const serviceCounts = {};
  state.appointments.filter(a => a.status === 'completed').forEach(a => {
    serviceCounts[a.service] = (serviceCounts[a.service] || 0) + 1;
  });

  let topServices = Object.entries(serviceCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  // Default data if empty
  if (topServices.length === 0) {
    topServices = [
      ['Premium Haircut & Style', 28],
      ['Haircut + Beard Combo', 22],
      ['Full Color Service', 15],
      ['Fresh Fade', 12],
      ['Luxury Facial', 9]
    ];
  }

  document.getElementById('top-services-list').innerHTML = topServices.map(([name, count], i) => `
    <li class="top-list-item">
      <span class="top-list-rank ${i < 3 ? 'rank-' + (i + 1) : ''}">${i + 1}</span>
      <div class="top-list-info">
        <div class="top-list-name">${name}</div>
        <div class="top-list-sub">${count} bookings</div>
      </div>
      <span class="top-list-value">${count}</span>
    </li>`).join('');

  // Top Staff
  let topStaff = state.managedStaff
    .sort((a, b) => b.clients - a.clients)
    .slice(0, 5);

  document.getElementById('top-staff-list').innerHTML = topStaff.map((s, i) => `
    <li class="top-list-item">
      <span class="top-list-rank ${i < 3 ? 'rank-' + (i + 1) : ''}">${i + 1}</span>
      <div class="top-list-info">
        <div class="top-list-name">${s.name}</div>
        <div class="top-list-sub">${s.role} • ⭐ ${s.rating}</div>
      </div>
      <span class="top-list-value">${s.clients} clients</span>
    </li>`).join('');
}

// ========== MODALS ==========

function openModal(id) {
  document.getElementById(id).classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  document.getElementById(id).classList.remove('active');
  document.body.style.overflow = '';
}

// Close modal on overlay click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});

// Close on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.active').forEach(m => {
      m.classList.remove('active');
    });
    document.body.style.overflow = '';
  }
});

// ========== TOAST ==========

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}</span> ${message}`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// ========== UTILITIES ==========

function debounce(fn, ms) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), ms);
  };
}

function addDays(date, days) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

function formatDate(date) {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function formatTime(timeStr) {
  const [h, m] = timeStr.split(':').map(Number);
  const ampm = h >= 12 ? 'PM' : 'AM';
  const hour = h % 12 || 12;
  return `${hour}:${String(m).padStart(2, '0')} ${ampm}`;
}

// ========== RESIZE HANDLER ==========

window.addEventListener('resize', debounce(() => {
  if (state.currentPage === 'analytics') {
    renderRevenueChart();
    renderServicesChart();
  }
}, 250));

// ========== MAP VIEW ==========

function renderMap() {
  if (!state.mapInstance) {
    setTimeout(initMap, 100); // Wait for DOM
  } else {
    setTimeout(() => state.mapInstance.invalidateSize(), 100);
  }
}

function initMap() {
  const mapContainer = document.getElementById('salon-map');
  if (!mapContainer) return;

  // Center on average of seeded salons
  const centerLat = 40.7166;
  const centerLng = -74.0034;

  state.mapInstance = L.map('salon-map').setView([centerLat, centerLng], 14);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(state.mapInstance);

  showAllSalonsOnMap();
}

function showAllSalonsOnMap() {
  if (!state.mapInstance) return;
  
  // Clear existing
  state.mapMarkers.forEach(m => state.mapInstance.removeLayer(m));
  state.mapMarkers = [];

  const bounds = L.latLngBounds();

  state.salons.forEach(salon => {
    if (!salon.lat || !salon.lng) return;

    const latLng = [salon.lat, salon.lng];
    bounds.extend(latLng);

    // Custom HTML marker
    const icon = L.divIcon({
      className: 'custom-marker',
      html: `<div style="background:var(--bg-card);border:2px solid var(--neon-cyan);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:1.2rem;box-shadow:var(--glow-cyan);">${salon.emoji}</div>`,
      iconSize: [36, 36],
      iconAnchor: [18, 18],
      popupAnchor: [0, -18]
    });

    const marker = L.marker(latLng, { icon }).addTo(state.mapInstance);

    const stars = '★'.repeat(Math.floor(salon.rating));
    const minPrice = Math.min(...salon.services.map(s => s.price));
    const statusClass = salon.isOpen ? 'status-open' : 'status-closed';
    const statusText = salon.isOpen ? 'Open' : 'Closed';

    marker.bindPopup(`
      <div class="map-popup">
        <div class="map-popup-title">${salon.emoji} ${salon.name}</div>
        <div class="map-popup-address">${salon.address}</div>
        <div class="map-popup-meta">
          <span class="popup-rating">${stars} ${salon.rating}</span>
          <span class="popup-status ${statusClass}">${statusText}</span>
          <span class="popup-distance">~${salon.distance} km</span>
        </div>
        <div class="map-popup-actions">
          <button class="btn btn-primary btn-sm" onclick="openSalonDetail('${salon.id}')">View Salon</button>
          <button class="btn btn-secondary btn-sm" onclick="openBookingModal('${salon.id}')">Book</button>
        </div>
      </div>
    `);

    state.mapMarkers.push(marker);
  });

  if (state.mapMarkers.length > 0) {
    state.mapInstance.fitBounds(bounds, { padding: [50, 50] });
  }
  
  renderMapSalonList(state.salons);
}

function locateMe() {
  if (!navigator.geolocation) {
    showToast('Geolocation is not supported by your browser', 'error');
    return;
  }

  showToast('Locating...', 'info');
  const btn = document.getElementById('btn-locate-me');
  btn.innerHTML = '<span class="locating-spinner"></span> Locating...';

  navigator.geolocation.getCurrentPosition(
    position => {
      btn.innerHTML = '📍 Locate Me';
      const userLat = position.coords.latitude;
      const userLng = position.coords.longitude;
      
      // We'll mock the user location near the salons for demo purposes
      // If we use real location, we might be thousands of miles away from demo data
      const demoLat = 40.7150;
      const demoLng = -74.0000;
      
      updateUserLocation(demoLat, demoLng);
    },
    error => {
      btn.innerHTML = '📍 Locate Me';
      showToast('Could not get location', 'error');
      // Fallback for demo
      updateUserLocation(40.7150, -74.0000);
    }
  );
}

let userMarker = null;

function updateUserLocation(lat, lng) {
  if (!state.mapInstance) return;

  if (userMarker) {
    state.mapInstance.removeLayer(userMarker);
  }

  const userIcon = L.divIcon({
    className: 'user-marker',
    html: '<div class="user-marker-pulse"></div>',
    iconSize: [26, 26],
    iconAnchor: [13, 13]
  });

  userMarker = L.marker([lat, lng], { icon: userIcon, zIndexOffset: 1000 }).addTo(state.mapInstance);
  state.mapInstance.setView([lat, lng], 14);

  // Calculate real distances
  const updatedSalons = state.salons.map(s => {
    // Haversine distance
    const R = 6371;
    const dLat = (s.lat - lat) * Math.PI / 180;
    const dLng = (s.lng - lng) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat * Math.PI / 180) * Math.cos(s.lat * Math.PI / 180) *
              Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const d = R * c;
    return { ...s, calculatedDistance: d.toFixed(1) };
  }).sort((a, b) => a.calculatedDistance - b.calculatedDistance);

  // Update nearest salon status
  const nearest = updatedSalons[0];
  document.getElementById('map-user-location').innerHTML = `
    <span class="map-status-icon">📍</span>
    <span class="map-status-text">Your location: <strong>Found</strong></span>
  `;
  document.getElementById('map-nearest-salon').innerHTML = `
    <span class="map-status-icon">✂️</span>
    <span class="map-status-text">Nearest: <strong>${nearest.name}</strong> (${nearest.calculatedDistance} km)</span>
  `;

  renderMapSalonList(updatedSalons, true);
}

function renderMapSalonList(salons, useCalculated = false) {
  const list = document.getElementById('map-salon-list');
  
  // Take top 6 for the list
  const displaySalons = salons.slice(0, 6);

  list.innerHTML = displaySalons.map(s => {
    const dist = useCalculated ? s.calculatedDistance : s.distance;
    return \`
      <div class="map-distance-card" onclick="panToSalon('\${s.id}')">
        <div class="distance-emoji">\${s.emoji}</div>
        <div class="distance-info">
          <div class="distance-name">\${s.name}</div>
          <div class="distance-address">\${s.address}</div>
          <div class="distance-rating">⭐ \${s.rating} (\${s.reviews})</div>
        </div>
        <div class="distance-value">
          <div class="distance-km">\${dist}</div>
          <div class="distance-label">km away</div>
          <a href="#" class="directions-link" onclick="event.stopPropagation(); showToast('Opening directions...')">↗ Directions</a>
        </div>
      </div>
    \`;
  }).join('');
}

function panToSalon(id) {
  const salon = state.salons.find(s => s.id === id);
  if (salon && state.mapInstance) {
    state.mapInstance.setView([salon.lat, salon.lng], 16);
    // Find and open popup
    const marker = state.mapMarkers.find(m => m.getLatLng().lat === salon.lat && m.getLatLng().lng === salon.lng);
    if (marker) marker.openPopup();
  }
}

// ========== START ==========
document.addEventListener('DOMContentLoaded', init);
