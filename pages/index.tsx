import type { NextPage } from 'next';
import UserBoardWidget from './components/user-board';
import Categories from '../components/categories/Categories';
import Product from '../components/product/product';
import PageLayout from '../components/layout/PageLayout';

const Home: NextPage = () => {
  const categories = [
    {
      name: 'New Arrivals',
      href: '#',
      imageSrc: '/img/cat-1.jpg',
    },
    {
      name: 'Productivity',
      href: '#',
      imageSrc: '/img/cat-1.jpg',
    },
    {
      name: 'Workspace',
      href: '#',
      imageSrc: '/img/cat-1.jpg',
    },
    {
      name: 'Accessories',
      href: '#',
      imageSrc: '/img/cat-1.jpg',
    },
    { name: 'Sale', href: '#', imageSrc: '/img/cat-1.jpg' },
  ];
  const products = [
    {
      id: 1,
      name: 'Zip Tote Basket',
      color: 'White and black',
      href: '#',
      imageSrc: '/img/card-product-1.jpg',
      imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
      price: '$140',
    },
    {
      id: 1,
      name: 'Zip Tote Basket',
      color: 'White and black',
      href: '#',
      imageSrc: '/img/card-product-1.jpg',
      imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
      price: '$140',
    },
    {
      id: 1,
      name: 'Zip Tote Basket',
      color: 'White and black',
      href: '#',
      imageSrc: '/img/card-product-1.jpg',
      imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
      price: '$140',
    },
  ];
  return (
    <PageLayout>
      <Categories categories={categories} />
      <Product products={products} />
    </PageLayout>
  );
};

export default Home;
