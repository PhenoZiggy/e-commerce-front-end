import React from 'react';
import Cart from '../../components/Cart/Cart';
import PageLayout from '../../components/layout/PageLayout';

const CartPage = () => {
  const products = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      price: '$32.00',
      color: 'Sienna',
      inStock: true,
      size: 'Large',
      imageSrc: '/img/cat-1.jpg',
      imageAlt: "Front of men's Basic Tee in sienna.",
    },
    {
      id: 2,
      name: 'Basic Tee',
      href: '#',
      price: '$32.00',
      color: 'Black',
      inStock: false,
      leadTime: '3–4 weeks',
      size: 'Large',
      imageSrc: '/img/cat-1.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
    },
    {
      id: 3,
      name: 'Nomad Tumbler',
      href: '#',
      price: '$35.00',
      color: 'White',
      inStock: true,
      imageSrc: '/img/cat-1.jpg',
      imageAlt: 'Insulated bottle with white base and black snap lid.',
    },
  ];
  return (
    <div>
      <PageLayout>
        <Cart products={products} />
      </PageLayout>
    </div>
  );
};

export default CartPage;
