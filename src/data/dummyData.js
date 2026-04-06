// Dummy data for the KisanSarthi application

export const weatherData = {
  location: 'Pune, Maharashtra',
  temperature: 28,
  condition: 'Partly Cloudy',
  humidity: 65,
  wind: 12,
  rainChance: 20,
}

export const cropsData = [
  {
    id: 1,
    name: 'Wheat',
    health: 'Excellent',
    plantedDate: '15 Nov 2023',
    expectedHarvest: '15 Mar 2024',
    image: null,
  },
  {
    id: 2,
    name: 'Rice',
    health: 'Good',
    plantedDate: '01 Dec 2023',
    expectedHarvest: '31 Mar 2024',
    image: null,
  },
  {
    id: 3,
    name: 'Cotton',
    health: 'Fair',
    plantedDate: '20 Jan 2024',
    expectedHarvest: '01 Jun 2024',
    image: null,
  },
]

export const marketData = {
  mandi: 'Pune Agricultural Market ( Laudha )',
  commodities: [
    {
      id: 1,
      name: 'Wheat',
      price: 2200,
      change: 50,
      changePercent: 2.3,
    },
    {
      id: 2,
      name: 'Rice (Basmati)',
      price: 3500,
      change: -120,
      changePercent: -3.3,
    },
    {
      id: 3,
      name: 'Cotton',
      price: 6500,
      change: 200,
      changePercent: 3.2,
    },
    {
      id: 4,
      name: 'Soybean',
      price: 4800,
      change: 0,
      changePercent: 0,
    },
    {
      id: 5,
      name: 'Maize',
      price: 1900,
      change: 80,
      changePercent: 4.4,
    },
    {
      id: 6,
      name: 'Groundnut',
      price: 5500,
      change: -150,
      changePercent: -2.7,
    },
  ],
}

export const advisoryData = [
  {
    id: 1,
    title: 'Best Practices for Wheat Crop This Season',
    description: 'Learn about the optimal sowing time, fertilizer schedule, and pest management strategies for wheat cultivation in winter season.',
    category: 'Crop Management',
    date: '5 days ago',
    readTime: 5,
  },
  {
    id: 2,
    title: 'Understanding Weather Patterns for Better Yield',
    description: 'How to interpret weather forecasts and make informed decisions about irrigation and harvesting.',
    category: 'Weather',
    date: '1 week ago',
    readTime: 8,
  },
  {
    id: 3,
    title: 'Organic Farming Techniques for Small Farmers',
    description: 'Step-by-step guide to transitioning to organic farming with minimal investment.',
    category: 'Sustainable Farming',
    date: '2 weeks ago',
    readTime: 12,
  },
  {
    id: 4,
    title: 'Market Analysis: Cotton Prices Expected to Rise',
    description: 'Recent market trends indicate a potential increase in cotton prices. Here is what farmers should know.',
    category: 'Market Insights',
    date: '3 days ago',
    readTime: 6,
  },
  {
    id: 5,
    title: 'Government Schemes for Small and Marginal Farmers',
    description: 'Complete list of subsidies, loans, and support programs available for 2024.',
    category: 'Policies',
    date: '1 month ago',
    readTime: 10,
  },
  {
    id: 6,
    title: 'Water Conservation Techniques for Dry Areas',
    description: 'Modern irrigation methods and water-saving practices for drought-prone regions.',
    category: 'Irrigation',
    date: '2 days ago',
    readTime: 7,
  },
]

export const quickActionsData = [
  {
    id: 1,
    title: 'Crop Scan',
    description: 'AI-powered crop disease detection',
    icon: 'Camera',
    color: 'primary',
  },
  {
    id: 2,
    title: 'Expert Chat',
    description: 'Connect with agriculture experts',
    icon: 'MessageCircle',
    color: 'blue',
  },
  {
    id: 3,
    title: 'Agri Store',
    description: 'Buy seeds, tools & fertilizers',
    icon: 'Store',
    color: 'green',
  },
  {
    id: 4,
    title: 'News',
    description: 'Latest agriculture updates',
    icon: 'Newspaper',
    color: 'yellow',
  },
]

export const testimonialsData = [
  {
    id: 1,
    name: 'Ramesh Kumar',
    location: 'Punjab',
    text: 'KisanSarthi helped me increase my wheat yield by 30% through personalized advisory.',
  },
  {
    id: 2,
    name: 'Suresh Patil',
    location: 'Maharashtra',
    text: 'The market price feature ensures I get the best price for my produce. Highly recommended!',
  },
  {
    id: 3,
    name: 'Venkatesh Reddy',
    location: 'Karnataka',
    text: 'Crop scan feature detected disease early and saved my entire crop. Amazing technology!',
  },
]
