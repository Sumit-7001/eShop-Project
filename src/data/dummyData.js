import phone1 from '../assets/images/phone1.png';
import phone2 from '../assets/images/phone2.png';
import phone3 from '../assets/images/phone3.png';
import phone4 from '../assets/images/phone4.png';
import watchRep from '../assets/images/watch.png';
import furnitureRep from '../assets/images/furniture.png';
import kidsRep from '../assets/images/kids.png';

export const categories = [
  { id: 0, name: 'See All', image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=200&h=200&fit=crop' },
  { id: 1, name: 'Furniture', image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=200&h=200&fit=crop' },
  { id: 2, name: 'Fashion', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=200&h=200&fit=crop' },
  { id: 3, name: 'Electronics', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop' },
  { id: 4, name: 'Digital product', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200&h=200&fit=crop' },
  { id: 5, name: 'Home appliances', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=200&h=200&fit=crop' },
  { id: 6, name: 'Vegetable', image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=200&h=200&fit=crop' },
  { id: 7, name: 'Decor', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=200&h=200&fit=crop' },
];

export const brands = [
  { id: 1, name: 'Adidas', logo: 'https://www.google.com/s2/favicons?domain=adidas.com&sz=128' },
  { id: 2, name: 'Nike', logo: 'https://www.google.com/s2/favicons?domain=nike.com&sz=128' },
  { id: 3, name: 'Aldo', logo: 'https://www.google.com/s2/favicons?domain=aldoshoes.com&sz=128' },
  { id: 4, name: 'Zara', logo: 'https://www.google.com/s2/favicons?domain=zara.com&sz=128' },
  { id: 5, name: 'Puma', logo: 'https://www.google.com/s2/favicons?domain=puma.com&sz=128' },
  { id: 6, name: 'Levi\'s', logo: 'https://www.google.com/s2/favicons?domain=levi.com&sz=128' },
  { id: 7, name: 'Gucci', logo: 'https://www.google.com/s2/favicons?domain=gucci.com&sz=128' },
  { id: 8, name: 'Asics', logo: 'https://www.google.com/s2/favicons?domain=asics.com&sz=128' },
];

export const smartphones = [
  { id: 1, title: 'Samsung Galaxy S24 Ultra', price: 1199, oldPrice: 1399, rating: 5, image: phone1, sale: true },
  { id: 2, title: 'iPhone 15 Pro Max', price: 1099, oldPrice: 1299, rating: 4.8, image: phone2, sale: true },
  { id: 3, title: 'Google Pixel 8 Pro', price: 899, oldPrice: 999, rating: 4.7, image: phone3, sale: false },
  { id: 4, title: 'OnePlus 12', price: 799, oldPrice: 899, rating: 4.6, image: phone4, sale: true },
];

export const watches = [
  { id: 5, title: 'Apple Watch Series 9', price: 399, oldPrice: 449, rating: 4.9, image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=400&auto=format&fit=crop', sale: true },
  { id: 6, title: 'Samsung Galaxy Watch 6', price: 299, oldPrice: 349, rating: 4.7, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&auto=format&fit=crop', sale: false },
  { id: 7, title: 'Garmin Venu 3', price: 449, oldPrice: 499, rating: 4.8, image: 'https://images.unsplash.com/photo-1508685096489-7aac291ba597?w=400&auto=format&fit=crop', sale: true },
  { id: 8, title: 'Luxury Chronograph', price: 599, oldPrice: 799, rating: 4.3, image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&auto=format&fit=crop', sale: true },
];

export const furniture = [
  { id: 9, title: 'Modern Velvet Sofa', price: 899, oldPrice: 1199, rating: 4.9, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&auto=format&fit=crop', sale: true },
  { id: 10, title: 'Oak Wood Dining Table', price: 549, oldPrice: 699, rating: 4.7, image: 'https://images.unsplash.com/photo-1530018607912-eff2df114f11?w=400&auto=format&fit=crop', sale: false },
  { id: 11, title: 'Ergonomic Office Chair', price: 299, oldPrice: 399, rating: 4.8, image: 'https://images.unsplash.com/photo-1505797149-43b0ad01f994?w=400&auto=format&fit=crop', sale: true },
  { id: 12, title: 'Minimalist Coffee Table', price: 149, oldPrice: 199, rating: 4.5, image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=400&auto=format&fit=crop', sale: false },
];

export const kids = [
  { id: 13, title: 'Wooden Building Blocks', price: 49, oldPrice: 69, rating: 5, image: 'https://images.unsplash.com/photo-1515488484532-43d792739f9b?w=400&auto=format&fit=crop', sale: true },
  { id: 14, title: 'Plush Teddy Bear', price: 29, oldPrice: 39, rating: 4.9, image: 'https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=400&auto=format&fit=crop', sale: false },
  { id: 15, title: 'Electric Ride-on Car', price: 199, oldPrice: 249, rating: 4.8, image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=400&auto=format&fit=crop', sale: true },
  { id: 16, title: 'Art & Craft Set', price: 35, oldPrice: 45, rating: 4.7, image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&auto=format&fit=crop', sale: false },
];
