import AllItems from '../../assets/images/accessories/all_items.svg';
import GasCylinder from '../../assets/images/accessories/gas-bottle_8951849 1.svg';
import Fuel from '../../assets/images/accessories/fuel.svg';
import ItemOne from '../../assets/images/accessories/item_1.svg';
import ItemTwo from '../../assets/images/accessories/item_2.svg';
import ItemThree from '../../assets/images/accessories/item_3.svg';
import ItemFour from '../../assets/images/accessories/item_4.svg';
import ItemFive from '../../assets/images/accessories/item_5.svg';
import ItemSix from '../../assets/images/accessories/item_6.svg';
import ItemSeven from '../../assets/images/accessories/item_7.svg';
import ItemEight from '../../assets/images/accessories/item_8.svg';
import ItemNine from '../../assets/images/accessories/item_9.svg';
import ItemTen from '../../assets/images/accessories/item_10.svg';
import AddToCartOne from '../../assets/images/accessories/cart_icon1.svg';
import AddToCartTwo from '../../assets/images/accessories/cart_icon2.svg';
import GasBurner from '../../assets/images/accessories/gas_2244995.svg';

export interface AccessoriesProps {
  item: any;
  img: string;
}

export const imageMap: Record<string, React.ComponentType<any>> = {
  AllItems,
  GasCylinder,
  Fuel,
  GasBurner,
};

export const accessories_data: AccessoriesProps[] = [
  {
    item: {
      title: 'All items',
      number: 429,
    },
    img: 'AllItems',
  },
  {
    item: {
      title: 'Gas cylinders ',
      number: 100,
    },
    img: 'GasCylinder',
  },
  {
    item: {
      title: 'Fuel accessories',
      number: 260,
    },
    img: 'Fuel',
  },
  {
    item: {
      title: 'Gas burners',
      number: 69,
    },
    img: 'GasBurner',
  },
];

export interface ItemsProps {
  img: string;
  item: any;
  addToCart: string;
  no_of_orders: number;
}

export const itemsImageMap: Record<string, React.ComponentType<any>> = {
  ItemOne,
  ItemTwo,
  ItemThree,
  ItemFour,
  ItemFive,
  ItemSix,
  ItemSeven,
  ItemEight,
  ItemNine,
  ItemTen,
};
export const addToCartImageMap: Record<string, React.ComponentType<any>> = {
  AddToCartOne,
  AddToCartTwo,
};

export const items_data: ItemsProps[] = [
  {
    img: 'ItemOne',
    item: {
      name: 'Bosch (Medium, All-Purpose Burner)',
      spec: 'Our handcrafted bouquets are perfect for any occasion. Choose from a variety of stunning arrangements featuring vibrant blooms expertly put together by our florists.',
      price: 45000,
    },
    addToCart: 'AddToCartOne',
    no_of_orders: 300,
  },
  {
    img: 'ItemTwo',
    item: {
      name: 'Whirlpool (Small, Simmer Burner)',
      spec: 'Durable gas burner with a sleek design and eas ...',
      price: 38000,
    },
    addToCart: 'AddToCartOne',
    no_of_orders: 50,
  },
  {
    img: 'ItemThree',
    item: {
      name: 'LG (Large, Power Burner)',
      spec: 'Multi-purpose gas burner with rapid heating ....',
      price: 50000,
    },
    addToCart: 'AddToCartOne',
    no_of_orders: 89,
  },
  {
    img: 'ItemFour',
    item: {
      name: 'Samsung (Medium, Dual-Ring Burner)',
      spec: 'Advanced gas burner with safety features and ...',
      price: 45000,
    },
    addToCart: 'AddToCartOne',
    no_of_orders: 200,
  },
  {
    img: 'ItemFive',
    item: {
      name: 'Kenmore (Medium, All-Purpose Burner)',
      spec: 'Reliable gas burner with adjustable flame settings.',
      price: 50000,
    },
    addToCart: 'AddToCartTwo',
    no_of_orders: 437,
  },
  {
    img: 'ItemSix',
    item: {
      name: 'Electrolux (Medium, Oval Burner)',
      spec: 'Energy-efficient gas burner with a modern ...',
      price: 50000,
    },
    addToCart: 'AddToCartTwo',
    no_of_orders: 221,
  },
  {
    img: 'ItemSeven',
    item: {
      name: 'Electrolux',
      spec: 'Advanced electric gas burner with safety features and ...',
      price: 48000,
    },
    addToCart: 'AddToCartOne',
    no_of_orders: 234,
  },
  {
    img: 'ItemNine',
    item: {
      name: 'Regulator set',
      spec: 'Energy-efficient gas burner with a modern ...',
      price: 8000,
    },
    addToCart: 'AddToCartOne',
    no_of_orders: 25,
  },
  {
    img: 'ItemTen',
    item: {
      name: 'Orchids',
      spec: 'Energy-efficient orchids with a modern ...',
      price: 16500,
    },
    addToCart: 'AddToCartTwo',
    no_of_orders: 15,
  },
];

interface CartProps {
  img?: any;
  item?: any;
  qty?: number;
}

export const cart_data: CartProps[] = [
  {
    img: ItemOne,
    item: {
      name: 'Bosch (Medium, All-Purpose Burner)',
      price: 45000,
    },
    qty: 1,
  },
  {
    img: ItemTwo,
    item: {
      name: 'Whirlpool (Small, Simmer Burner)',
      price: 38000,
    },
    qty: 1,
  },
  {
    img: ItemThree,
    item: {
      name: 'LG (Large, Power Burner)',
      price: 50000,
    },
    qty: 1,
  },
  {
    img: ItemFour,
    item: {
      name: 'Samsung (Medium, Dual-Ring Burner)',
      price: 45000,
    },
    qty: 1,
  },
];
