import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Premium Interior Emulsion',
    brand: 'Dulux',
    price: 450000,
    originalPrice: 550000,
    image: 'https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=400',
    colors: ['#FFFFFF', '#F5F5DC', '#FFE4B5', '#E6E6FA'],
    type: 'interior',
    coverage: '12-14 m²/liter',
    finish: 'Matte',
    dryTime: '2-4 hours'
  },
  {
    id: 2,
    name: 'Weather Shield Exterior',
    brand: 'Nippon',
    price: 520000,
    image: 'https://images.pexels.com/photos/1109354/pexels-photo-1109354.jpeg?auto=compress&cs=tinysrgb&w=400',
    colors: ['#FFFFFF', '#F0F0F0', '#D3D3D3', '#FFF8DC'],
    type: 'exterior',
    coverage: '10-12 m²/liter',
    finish: 'Semi-Gloss',
    dryTime: '4-6 hours'
  },
  {
    id: 3,
    name: 'Eco-Friendly Wall Paint',
    brand: 'Kansai',
    price: 380000,
    originalPrice: 450000,
    image: 'https://images.pexels.com/photos/1053687/pexels-photo-1053687.jpeg?auto=compress&cs=tinysrgb&w=400',
    colors: ['#98FB98', '#87CEEB', '#FFB6C1', '#FFFACD'],
    type: 'interior',
    coverage: '13-15 m²/liter',
    finish: 'Matte',
    dryTime: '2-3 hours'
  },
  {
    id: 4,
    name: 'Professional Grade Enamel',
    brand: 'Jotun',
    price: 680000,
    image: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=400',
    colors: ['#000000', '#FFFFFF', '#FF0000', '#0000FF'],
    type: 'both',
    coverage: '11-13 m²/liter',
    finish: 'Gloss',
    dryTime: '6-8 hours'
  },
  {
    id: 5,
    name: 'Luxury Silk Finish',
    brand: 'Dulux',
    price: 590000,
    image: 'https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=400',
    colors: ['#F5DEB3', '#DEB887', '#D2B48C', '#BC8F8F'],
    type: 'interior',
    coverage: '12-14 m²/liter',
    finish: 'Silk',
    dryTime: '3-5 hours'
  },
  {
    id: 6,
    name: 'All-Weather Protection',
    brand: 'Nippon',
    price: 550000,
    originalPrice: 650000,
    image: 'https://images.pexels.com/photos/1070945/pexels-photo-1070945.jpeg?auto=compress&cs=tinysrgb&w=400',
    colors: ['#8B4513', '#A0522D', '#CD853F', '#DEB887'],
    type: 'exterior',
    coverage: '10-12 m²/liter',
    finish: 'Satin',
    dryTime: '4-6 hours'
  },
  {
    id: 7,
    name: 'Quick Dry Interior',
    brand: 'Kansai',
    price: 420000,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400',
    colors: ['#FFE4E1', '#FFF0F5', '#FAF0E6', '#FDF5E6'],
    type: 'interior',
    coverage: '13-15 m²/liter',
    finish: 'Matte',
    dryTime: '1-2 hours'
  },
  {
    id: 8,
    name: 'Ultra Durable Coating',
    brand: 'Jotun',
    price: 720000,
    image: 'https://images.pexels.com/photos/3760607/pexels-photo-3760607.jpeg?auto=compress&cs=tinysrgb&w=400',
    colors: ['#2F4F4F', '#708090', '#778899', '#B0C4DE'],
    type: 'exterior',
    coverage: '9-11 m²/liter',
    finish: 'Gloss',
    dryTime: '6-8 hours'
  }
];

export const brands = ['All', 'Dulux', 'Nippon', 'Kansai', 'Jotun'];
