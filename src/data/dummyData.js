export const buyers = [
  {
    id: 1,
    name: "Green Garden Hotels",
    type: "Hotel / Restaurant",
    distance: "2.5 km",
    priceOffered: "₹45/kg",
    rating: 4.8,
    verified: true,
    recentlyActive: true,
    highDemand: true,
    category: "Bulk Buyer"
  },
  {
    id: 2,
    name: "FreshMart Retail",
    type: "Supermarket",
    distance: "5.0 km",
    priceOffered: "₹42/kg",
    rating: 4.5,
    verified: true,
    recentlyActive: true,
    highDemand: false,
    category: "Retail"
  },
  {
    id: 3,
    name: "Annapurna Canteen",
    type: "Bulk Buyer",
    distance: "1.2 km",
    priceOffered: "₹38/kg",
    rating: 4.2,
    verified: false,
    recentlyActive: false,
    highDemand: true,
    category: "Bulk Buyer"
  },
  {
    id: 4,
    name: "Organic Bites",
    type: "Shop",
    distance: "3.8 km",
    priceOffered: "₹50/kg",
    rating: 4.9,
    verified: true,
    recentlyActive: true,
    highDemand: false,
    category: "Specialty"
  }
];

export const marketTrends = [
  { day: 'Mon', price: 32 },
  { day: 'Tue', price: 35 },
  { day: 'Wed', price: 34 },
  { day: 'Thu', price: 38 },
  { day: 'Fri', price: 40 },
  { day: 'Sat', price: 39 },
  { day: 'Sun', price: 42 },
];

export const commodities = [
  { id: 1, name: 'Tomato', price: 42, change: 5.4, status: 'up' },
  { id: 2, name: 'Onion', price: 28, change: -2.1, status: 'down' },
  { id: 3, name: 'Potato', price: 18, change: 0.5, status: 'up' },
  { id: 4, name: 'Green Chili', price: 65, change: 12.3, status: 'up' },
  { id: 5, name: 'Cauliflower', price: 35, change: -1.2, status: 'down' },
];

export const wasteCollectors = [
  {
    id: 1,
    name: "BioEnergy NGO",
    type: "Compost Maker",
    distance: "3.2 km",
    rating: 4.7,
    specialty: "Animal Feed",
    verified: true
  },
  {
    id: 2,
    name: "Krishi Organic Farm",
    type: "Farm",
    distance: "5.5 km",
    rating: 4.5,
    specialty: "Vermicompost",
    verified: true
  },
  {
    id: 3,
    name: "Happy Paws Shelter",
    type: "Animal Shelter",
    distance: "1.8 km",
    rating: 4.9,
    specialty: "Animal Feed",
    verified: false
  }
];

export const advisoryData = [
  {
    id: 1,
    title: 'Managing Wheat Rust',
    description: 'Learn how to identify and treat common wheat diseases.',
    category: 'Crop Management',
    date: '2024-03-20',
    readTime: '5 min'
  },
  {
    id: 2,
    title: 'Organic Fertilizer Guide',
    description: 'Best practices for sustainable soil health using organic matter.',
    category: 'Sustainable Farming',
    date: '2024-03-18',
    readTime: '8 min'
  },
  {
    id: 3,
    title: 'Post-Harvest Handling',
    description: 'Maximize your profits by reducing post-harvest losses.',
    category: 'Market Insights',
    date: '2024-03-15',
    readTime: '6 min'
  }
];

export const quickActionsData = [
  {
    icon: 'Camera',
    title: 'Crop Scan',
    description: 'Scan disease',
    color: 'emerald'
  },
  {
    icon: 'MessageCircle',
    title: 'Expert Appt',
    description: 'Talk to expert',
    color: 'blue'
  },
  {
    icon: 'Newspaper',
    title: 'Daily News',
    description: 'Agri updates',
    color: 'amber'
  }
];

export const testimonialsData = [
  {
    id: 1,
    name: 'Suresh Patil',
    location: 'Pune, Maharashtra',
    text: 'KisanSarthi helped me increase my yields by 30%! The expert advice is invaluable.'
  },
  {
    id: 2,
    name: 'Anita Devi',
    location: 'Karnal, Haryana',
    text: 'Market rates feature helped me sell my produce at the best prices this season.'
  },
  {
    id: 3,
    name: 'Ramesh Singh',
    location: 'Patna, Bihar',
    text: 'Crop scan feature saved my tomato crop from early blight. Highly recommend!'
  }
];

export const cropsData = [
  {
    id: 1,
    name: 'Wheat',
    plantedDate: '15 Nov 2023',
    health: 'Excellent',
    status: 'Ready'
  },
  {
    id: 2,
    name: 'Maize',
    plantedDate: '10 Dec 2023',
    health: 'Good',
    status: 'Growing'
  }
];

export const marketData = {
  mandi: 'Pune Agricultural Market (Laudha)',
  commodities: [
    { id: 1, name: 'Wheat', price: 2200, change: 50, changePercent: 2.3 },
    { id: 2, name: 'Maize', price: 1950, change: 80, changePercent: 4.4 },
    { id: 3, name: 'Cotton', price: 6500, change: -150, changePercent: -2.2 },
    { id: 4, name: 'Tomato', price: 1800, change: 200, changePercent: 12.5 },
  ],
};


export const agroCatalogue = [
  {
    id: 1,
    name: "Premium Wheat Seeds",
    category: "Seeds",
    brand: "KisanBrand",
    price: "₹1,200",
    unit: "50kg Bag",
    stock: 45,
    rating: 4.8,
    image: "/images/wheat_seeds.png"
  },
  {
    id: 2,
    name: "Organic Nitrogen Boost",
    category: "Fertilizers",
    brand: "GreenLeaf",
    price: "₹850",
    unit: "25kg Bag",
    stock: 120,
    rating: 4.5,
    image: "/images/nitrogen_boost.png"
  },
  {
    id: 3,
    name: "Neem Oil Pesticide",
    category: "Pesticides",
    brand: "NatureGuard",
    price: "₹450",
    unit: "1L Bottle",
    stock: 85,
    rating: 4.9,
    image: "/images/neem_oil.png"
  },
  {
    id: 4,
    name: "Hybrid Tomato Seeds",
    category: "Seeds",
    brand: "VeggieGrow",
    price: "₹250",
    unit: "500g Pouch",
    stock: 200,
    rating: 4.7,
    image: "/images/tomato_seeds.png"
  }
];

export const agroDealers = [
  {
    id: 1,
    name: "Mahindra Agri Solutions",
    contact: "98765 43210",
    location: "Pune Industrial Area",
    type: "Distributor",
    ordersCount: 45,
    status: "Active",
    rating: 4.8
  },
  {
    id: 2,
    name: "Krishi Traders",
    contact: "98765 43211",
    location: "Nashik Mandi",
    type: "Wholesaler",
    ordersCount: 22,
    status: "Active",
    rating: 4.5
  },
  {
    id: 3,
    name: "Bharat Seeds Agency",
    contact: "98765 43212",
    location: "Nagpur Main Road",
    type: "Retailer",
    ordersCount: 15,
    status: "Pending",
    rating: 4.2
  }
];

export const agroOrders = [
  {
    id: "ORD-8821",
    customer: "Suresh Patil",
    date: "2024-03-22",
    items: "Premium Wheat Seeds x 2",
    amount: "₹2,400",
    status: "Delivered",
    payment: "Paid"
  },
  {
    id: "ORD-8822",
    customer: "Mahindra Agri Solutions",
    date: "2024-03-21",
    items: "Organic Nitrogen Boost x 10",
    amount: "₹8,500",
    status: "Processing",
    payment: "Pending"
  },
  {
    id: "ORD-8823",
    customer: "Anita Devi",
    date: "2024-03-20",
    items: "Neem Oil Pesticide x 5",
    amount: "₹2,250",
    status: "Shipped",
    payment: "Paid"
  }
];
