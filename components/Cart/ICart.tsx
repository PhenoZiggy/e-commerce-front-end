interface ICart {
  products: {
    id: number;
    name: string;
    href: string;
    price: string;
    color: string;
    inStock: boolean;
    imageSrc: string;
    imageAlt: string;
    leadTime?: any;
    size?: any;
  }[];
}
export default ICart;
