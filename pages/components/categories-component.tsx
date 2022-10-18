import React from 'react';
import Categories from '../../components/categories/Categories';
import cat from '../../public/img/cat-1.jpg';

const CategoriesComponent = () => {
  const categories = [
    {
      name: 'New Arrivals',
      href: '#',
      imageSrc: '../../public/img/cat-1.jpg',
    },
    {
      name: 'Productivity',
      href: '#',
      imageSrc: '../../public/img/cat-1.jpg',
    },
    {
      name: 'Workspace',
      href: '#',
      imageSrc: '../../public/img/cat-1.jpg',
    },
    {
      name: 'Accessories',
      href: '#',
      imageSrc: '../../public/img/cat-1.jpg',
    },
    { name: 'Sale', href: '#', imageSrc: '../../public/img/cat-1.jpg' },
  ];
  return (
    <div>
      <Categories categories={categories} />
    </div>
  );
};

export default CategoriesComponent;
