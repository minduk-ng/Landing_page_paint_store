export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  colors: string[];
  type: 'interior' | 'exterior' | 'both';
  coverage: string;
  finish: string;
  dryTime: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
}
