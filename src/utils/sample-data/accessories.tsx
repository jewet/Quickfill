import AllItems from '../../assets/images/accessories/all_items.svg'
import GasCynlinder from '../../assets/images/accessories/gas-bottle_8951849 1.svg'
import Fuel from '../../assets/images/accessories/fuel.svg'
import ItemOne from '../../assets/images/accessories/item_1.svg'
import ItemTwo from '../../assets/images/accessories/item_2.svg'
import ItemThree from '../../assets/images/accessories/item_3.svg'
import ItemFour from '../../assets/images/accessories/item_4.svg'
import ItemFive from '../../assets/images/accessories/item_5.svg'
import ItemSix from '../../assets/images/accessories/item_6.svg'
import ItemSeven from '../../assets/images/accessories/item_7.svg'
import ItemEight from '../../assets/images/accessories/item_8.svg'
import ItemNine from '../../assets/images/accessories/item_9.svg'
import ItemTen from '../../assets/images/accessories/item_10.svg'
import AddToCartOne from '../../assets/images/accessories/cart_icon1.svg'
import AddToCartTwo from '../../assets/images/accessories/cart_icon2.svg'
import GasBurner from '../../assets/images/accessories/gas_2244995.svg'

interface AccessoriesProps{
    img: any;
    item: any
}

export const accessories_data: AccessoriesProps[] = [
    {
        img: AllItems,
        item: {
            title: 'All items',
            number: 429
        },
    },
    {
        img: GasCynlinder,
        item: {
            title: 'Gas cylinders ',
            number: 100
        },
    },
    {
        img: Fuel,
        item: {
            title: 'Fuel accessories',
            number: 260
        },
    },
    {
        img: GasBurner,
        item: {
            title: 'Gas burners',
            number: 69
        },
    },
]

export interface ItemsProps{
    img: any;
    item: any;
    addToCart: any;
    no_of_orders: number
}

export const items_data: ItemsProps[] = [
    {
        img: ItemOne,
        item: {
            name: 'Bosch (Medium, All-Purpose Burner)',
            spec: 'Our handcrafted bouquets are perfect for any occasion. Choose from a variety of stunning arrangements featuring vibrant blooms expertly put together by our florists.',
            price: 45000
        },
        addToCart: AddToCartOne,
        no_of_orders: 300
    },
    {
        img: ItemTwo,
        item: {
            name: 'Whirlpool (Small, Simmer Burner)',
            spec: 'Durable gas burner with a sleek design and eas ...',
            price: 38000
        },
        addToCart: AddToCartOne,
        no_of_orders: 50
    },
    {
        img: ItemThree,
        item: {
            name: 'LG (Large, Power Burner)',
            spec: 'Multi-purpose gas burner with rapid heating ....',
            price: 50000
        },
        addToCart: AddToCartOne,
        no_of_orders: 89
    },
    {
        img: ItemFour,
        item: {
            name: 'Samsung (Medium, Dual-Ring Burner)',
            spec: 'Advanced gas burner with safety features and ...',
            price: 45000
        },
        addToCart: AddToCartOne,
        no_of_orders: 200
    },
    {
        img: ItemFive,
        item: {
            name: 'Kenmore (Medium, All-Purpose Burner)',
            spec: 'Reliable gas burner with adjustable flame settings.',
            price: ''
        },
        addToCart: AddToCartTwo,
        no_of_orders: 437
    },
    {
        img: ItemSix,
        item: {
            name: 'Electrolux (Medium, Oval Burner)',
            spec: 'Energy-efficient gas burner with a modern ...',
            price: 50000
        },
        addToCart: AddToCartTwo,
        no_of_orders: 221
    },
    {
        img: ItemSeven,
        item: {
            name: 'Electrolux',
            spec: 'Advanced electric gas burner with safety features and ...',
            price: 48000
        },
        addToCart: AddToCartOne,
        no_of_orders: 234
    },
    {
        img: ItemNine,
        item: {
            name: 'Regulator set',
            spec: 'Energy-efficient gas burner with a modern ...',
            price: 8000
        },
        addToCart: AddToCartOne,
        no_of_orders: 25
    },
    {
        img: ItemTen,
        item: {
            name: 'Orchids',
            spec: 'Energy-efficient orchids with a modern ...',
            price: 16500
        },
        addToCart: AddToCartTwo,
        no_of_orders: 15
    },
]