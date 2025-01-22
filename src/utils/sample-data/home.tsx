import Gas from '../../assets/images/home/gas.svg';
import Petroleum from '../../assets/images/home/petroleum.svg';
import Diesel from '../../assets/images/home/diesel.svg';
import Electricity from '../../assets/images/home/electricity.svg';
import FirstVendor from '../../assets/images/home/vendor1.svg';
import SecondVendor from '../../assets/images/home/vendor2.svg';
import ThirdVendor from '../../assets/images/home/vendor3.svg';
import FirstGas from '../../assets/images/gas/3kg.svg';
import SecondGas from '../../assets/images/gas/6kg.svg';
import ThirdGas from '../../assets/images/gas/12kg.svg';
import FourthGas from '../../assets/images/gas/25kg.svg';
import VendorOne from '../../assets/images/diesel/vendor_img1.svg';
import VendorTwo from '../../assets/images/diesel/vendor_img2.svg';
import VendorThree from '../../assets/images/diesel/vendor_img3.svg';
import VendorFour from '../../assets/images/diesel/vendor_img4.svg';
import DieselPump from '../../assets/images/diesel/diesel-pump.svg';
import DisplayGas from '../../assets/images/gas/biggest-gas.svg';
import ProfilePic from '../../assets/images/orders/profile_pic.svg';

export interface DetailsProps {
  img: any;
  name: string;
  price: number;
  status: string;
  rating: string;
  delivery_time: string;
  delivery_timeline: any;
  delivery_fee: number;
  order_no: number;
  delivery_code: number;
  pump?: any;
  available_gas_cylinders?: any;
  rider?: any;
}

export interface QuickActionProps {
  Img: any;
  title: string;
  details?: DetailsProps[];
  electricity_provider?: any;
}

export const quick_action_data: QuickActionProps[] = [
  {
    Img: Gas,
    title: 'Cooking\nGas',
    details: [
      {
        img: VendorOne,
        name: 'Gas Hub ',
        price: 1082,
        status: 'Online',
        rating: '4.2',
        delivery_time: '20-30mins',
        delivery_timeline: [
          {
            status: 'Order received',
            des: 'Waiting for vendor to accept your order',
            pending: true,
            itsTurn: true,
          },
          {
            status: 'Order accepted ',
            des: 'Vendor on his way to pick your cylinder',
            pending: true,
            itsTurn: false,
          },
          // {
          //   status: 'Refilling your cylinder',
          //   des: 'Your  cylinder is being refilled',
          //   pending: true,
          //   itsTurn: false,
          // },
          {
            status: 'In transit',
            des: 'Your order it’s  on the way and will arrive soon.',
            pending: true,
            itsTurn: false,
          },
        ],
        rider: {
          name: 'John Doe',
          status: 'In-transit',
          phone_number: '+234 817 464 8379',
          pic: ProfilePic,
        },
        delivery_fee: 1500,
        order_no: 112233,
        delivery_code: 1234,
        available_gas_cylinders: [
          {
            img: FirstGas,
            kg: '3',
            amount: 4500,
            displayGas: DisplayGas,
          },
          {
            img: SecondGas,
            kg: '6',
            amount: 9000,
            displayGas: DisplayGas,
          },
          {
            img: ThirdGas,
            kg: '12',
            amount: 18000,
            displayGas: DisplayGas,
          },
          {
            img: FourthGas,
            kg: '25',
            amount: 36000,
            displayGas: DisplayGas,
          },
        ],
      },
      {
        img: VendorTwo,
        name: 'Johnson Gas Limited ',
        price: 1100,
        status: 'Online',
        rating: '4.6',
        delivery_time: '25-40mins',
        delivery_timeline: [
          {
            status: 'Order received',
            des: 'Waiting for vendor to accept your order',
            pending: true,
            itsTurn: true,
          },
          {
            status: 'Order accepted ',
            des: 'Vendor on his way to pick your cylinder',
            pending: true,
            itsTurn: false,
          },
          // {
          //   status: 'Refilling your cylinder',
          //   des: 'Your  cylinder is being refilled',
          //   pending: true,
          //   itsTurn: false,
          // },
          {
            status: 'In transit',
            des: 'Your order it’s  on the way and will arrive soon.',
            pending: true,
            itsTurn: false,
          },
        ],
        rider: {
          name: 'John Doe',
          status: 'In-transit',
          phone_number: '+234 817 464 8379',
          pic: ProfilePic,
        },
        delivery_fee: 1500,
        order_no: 112234,
        delivery_code: 7676,
        available_gas_cylinders: [
          {
            img: FirstGas,
            kg: '3',
            amount: 4500,
            displayGas: DisplayGas,
          },
          {
            img: SecondGas,
            kg: '6',
            amount: 9000,
            displayGas: DisplayGas,
          },
          {
            img: ThirdGas,
            kg: '12',
            amount: 18000,
            displayGas: DisplayGas,
          },
          {
            img: FourthGas,
            kg: '25',
            amount: 36000,
            displayGas: DisplayGas,
          },
        ],
      },
      {
        img: VendorThree,
        name: 'Uchez  Gas Test',
        price: 1105,
        status: 'Online',
        rating: '4.1',
        delivery_time: '30-50mins',
        delivery_timeline: [
          {
            status: 'Order received',
            des: 'Waiting for vendor to accept your order',
            pending: true,
            itsTurn: true,
          },
          {
            status: 'Order accepted ',
            des: 'Vendor on his way to pick your cylinder',
            pending: true,
            itsTurn: false,
          },
          {
            status: 'Refilling your cylinder',
            des: 'Your  cylinder is being refilled',
            pending: true,
            itsTurn: false,
          },
          {
            status: 'In transit',
            des: 'Your order it’s  on the way and will arrive soon.',
            pending: true,
            itsTurn: false,
          },
        ],
        rider: {
          name: 'John Doe',
          status: 'In-transit',
          phone_number: '+234 817 464 8379',
          pic: ProfilePic,
        },
        delivery_fee: 1500,
        order_no: 112235,
        delivery_code: 2343,
        available_gas_cylinders: [
          {
            img: FirstGas,
            kg: '3',
            amount: 4500,
            displayGas: DisplayGas,
          },
          {
            img: SecondGas,
            kg: '6',
            amount: 9000,
            displayGas: DisplayGas,
          },
          {
            img: ThirdGas,
            kg: '12',
            amount: 18000,
            displayGas: DisplayGas,
          },
          {
            img: FourthGas,
            kg: '25',
            amount: 36000,
            displayGas: DisplayGas,
          },
        ],
      },
      {
        img: VendorFour,
        name: 'Uche Gas Limited',
        price: 1140,
        status: 'Offline',
        rating: '4.2',
        delivery_time: '30-50mins',
        delivery_timeline: [
          {
            status: 'Order received',
            des: 'Waiting for vendor to accept your order',
            pending: true,
            itsTurn: true,
          },
          {
            status: 'Order accepted',
            des: 'Vendor on his way to pick your cylinder',
            pending: true,
            itsTurn: false,
          },
          {
            status: 'Refilling your cylinder',
            des: 'Your  cylinder is being refilled',
            pending: true,
            itsTurn: false,
          },
          {
            status: 'In transit',
            des: 'Your order it’s  on the way and will arrive soon.',
            pending: true,
            itsTurn: false,
          },
        ],
        rider: {
          name: 'John Doe',
          status: 'In-transit',
          phone_number: '+234 817 464 8379',
          pic: ProfilePic,
        },
        delivery_fee: 1500,
        order_no: 112236,
        delivery_code: 1021,
        available_gas_cylinders: [
          {
            img: FirstGas,
            kg: '3',
            amount: 4500,
            displayGas: DisplayGas,
          },
          {
            img: SecondGas,
            kg: '6',
            amount: 9000,
            displayGas: DisplayGas,
          },
          {
            img: ThirdGas,
            kg: '12',
            amount: 18000,
            displayGas: DisplayGas,
          },
          {
            img: FourthGas,
            kg: '25',
            amount: 36000,
            displayGas: DisplayGas,
          },
        ],
      },
      {
        img: VendorOne,
        name: 'Gas Station ',
        price: 1000,
        status: 'Offline',
        rating: '4.8',
        delivery_time: '50-59mins',
        delivery_timeline: [
          {
            status: 'Order received',
            des: 'Waiting for vendor to accept your order',
            pending: true,
            itsTurn: true,
          },
          {
            status: 'Order accepted ',
            des: 'Vendor on his way to pick your cylinder',
            pending: true,
            itsTurn: false,
          },
          {
            status: 'Refilling your cylinder',
            des: 'Your  cylinder is being refilled',
            pending: true,
            itsTurn: false,
          },
          {
            status: 'In transit',
            des: 'Your order it’s  on the way and will arrive soon.',
            pending: true,
            itsTurn: false,
          },
        ],
        rider: {
          name: 'John Doe',
          status: 'In-transit',
          phone_number: '+234 817 464 8379',
          pic: ProfilePic,
        },
        delivery_fee: 1500,
        order_no: 112233,
        delivery_code: 1234,
        available_gas_cylinders: [
          {
            img: FirstGas,
            kg: '3',
            amount: 4500,
            displayGas: DisplayGas,
          },
          {
            img: SecondGas,
            kg: '6',
            amount: 9000,
            displayGas: DisplayGas,
          },
          {
            img: ThirdGas,
            kg: '12',
            amount: 18000,
            displayGas: DisplayGas,
          },
          {
            img: FourthGas,
            kg: '25',
            amount: 36000,
            displayGas: DisplayGas,
          },
        ],
      },
      {
        img: VendorTwo,
        name: 'Ibe & Sons Gas Limited ',
        price: 1005,
        status: 'Online',
        rating: '4.4',
        delivery_time: '25-40mins',
        delivery_timeline: [
          {
            status: 'Order received',
            des: 'Waiting for vendor to accept your order',
            pending: true,
            itsTurn: true,
          },
          {
            status: 'Order accepted ',
            des: 'Vendor on his way to pick your cylinder',
            pending: true,
            itsTurn: false,
          },
          {
            status: 'Refilling your cylinder',
            des: 'Your  cylinder is being refilled',
            pending: true,
            itsTurn: false,
          },
          {
            status: 'In transit',
            des: 'Your order it’s  on the way and will arrive soon.',
            pending: true,
            itsTurn: false,
          },
        ],
        rider: {
          name: 'Gee Doe',
          status: 'In-transit',
          phone_number: '+234 817 464 8379',
          pic: ProfilePic,
        },
        delivery_fee: 1500,
        order_no: 112234,
        delivery_code: 7676,
        available_gas_cylinders: [
          {
            img: FirstGas,
            kg: '3',
            amount: 4500,
            displayGas: DisplayGas,
          },
          {
            img: SecondGas,
            kg: '6',
            amount: 9000,
            displayGas: DisplayGas,
          },
          {
            img: ThirdGas,
            kg: '12',
            amount: 18000,
            displayGas: DisplayGas,
          },
          {
            img: FourthGas,
            kg: '25',
            amount: 36000,
            displayGas: DisplayGas,
          },
        ],
      },
      {
        img: VendorThree,
        name: ' Gas Republic',
        price: 1200,
        status: 'Online',
        rating: '3.2',
        delivery_time: '15-30mins',
        delivery_timeline: [
          {
            status: 'Order received',
            des: 'Waiting for vendor to accept your order',
            pending: true,
            itsTurn: true,
          },
          {
            status: 'Order accepted ',
            des: 'Vendor on his way to pick your cylinder',
            pending: true,
            itsTurn: false,
          },
          {
            status: 'Refilling your cylinder',
            des: 'Your  cylinder is being refilled',
            pending: true,
            itsTurn: false,
          },
          {
            status: 'In transit',
            des: 'Your order it’s  on the way and will arrive soon.',
            pending: true,
            itsTurn: false,
          },
        ],
        rider: {
          name: 'John Doe',
          status: 'In-transit',
          phone_number: '+234 817 464 8379',
          pic: ProfilePic,
        },
        delivery_fee: 1500,
        order_no: 112235,
        delivery_code: 2343,
        available_gas_cylinders: [
          {
            img: FirstGas,
            kg: '3',
            amount: 4500,
            displayGas: DisplayGas,
          },
          {
            img: SecondGas,
            kg: '6',
            amount: 9000,
            displayGas: DisplayGas,
          },
          {
            img: ThirdGas,
            kg: '12',
            amount: 18000,
            displayGas: DisplayGas,
          },
          {
            img: FourthGas,
            kg: '25',
            amount: 36000,
            displayGas: DisplayGas,
          },
        ],
      },
      {
        img: VendorFour,
        name: 'Your Gas Vendor',
        price: 999,
        status: 'Offline',
        rating: '4.9',
        delivery_time: '30-59mins',
        delivery_timeline: [
          {
            status: 'Order received',
            des: 'Waiting for vendor to accept your order',
            pending: true,
            itsTurn: true,
          },
          {
            status: 'Order accepted',
            des: 'Vendor on his way to pick your cylinder',
            pending: true,
            itsTurn: false,
          },
          {
            status: 'Refilling your cylinder',
            des: 'Your  cylinder is being refilled',
            pending: true,
            itsTurn: false,
          },
          {
            status: 'In transit',
            des: 'Your order it’s  on the way and will arrive soon.',
            pending: true,
            itsTurn: false,
          },
        ],
        rider: {
          name: 'John Doe',
          status: 'In-transit',
          phone_number: '+234 817 464 8379',
          pic: ProfilePic,
        },
        delivery_fee: 1500,
        order_no: 112236,
        delivery_code: 1021,
        available_gas_cylinders: [
          {
            img: FirstGas,
            kg: '3',
            amount: 4500,
            displayGas: DisplayGas,
          },
          {
            img: SecondGas,
            kg: '6',
            amount: 9000,
            displayGas: DisplayGas,
          },
          {
            img: ThirdGas,
            kg: '12',
            amount: 18000,
            displayGas: DisplayGas,
          },
          {
            img: FourthGas,
            kg: '25',
            amount: 36000,
            displayGas: DisplayGas,
          },
        ],
      },
    ],
  },
  {
    Img: Petroleum,
    title: 'Petroleum',
    details: [
      {
        img: VendorOne,
        name: 'Peak Energy Supplies',
        price: 1082,
        status: 'Online',
        rating: '4.2',
        delivery_time: '20-30mins',
        pump: DieselPump,
        delivery_timeline: [
          {
            status: 'Order received',
            des: 'Waiting for vendor to accept your order',
            pending: true,
            itsTurn: true,
          },
          {
            status: 'Order accepted ',
            des: 'Vendor on his way to pick your cylinder',
            pending: true,
            itsTurn: false,
          },
          // {
          //   status: 'Refilling your cylinder',
          //   des: 'Your  cylinder is being refilled',
          //   pending: true,
          //   itsTurn: false,
          // },
          {
            status: 'In transit',
            des: 'Your order it’s  on the way and will arrive soon.',
            pending: true,
            itsTurn: false,
          },
        ],
        rider: {
          name: 'John Doe',
          status: 'In-transit',
          phone_number: '+234 817 464 8379',
          pic: ProfilePic,
        },
        delivery_fee: 1500,
        order_no: 112237,
        delivery_code: 1023,
      },
      {
        img: VendorTwo,
        name: 'Vanguard Petroleum ',
        price: 1100,
        status: 'Online',
        rating: '4.6',
        delivery_time: '25-40mins',
        pump: DieselPump,
        delivery_timeline: [
          {
            status: 'Order received',
            des: 'Waiting for vendor to accept your order',
            pending: true,
            itsTurn: true,
          },
          {
            status: 'Order accepted ',
            des: 'Vendor on his way to pick your cylinder',
            pending: true,
            itsTurn: false,
          },
          // {
          //   status: 'Refilling your cylinder',
          //   des: 'Your  cylinder is being refilled',
          //   pending: true,
          //   itsTurn: false,
          // },
          {
            status: 'In transit',
            des: 'Your order it’s  on the way and will arrive soon.',
            pending: true,
            itsTurn: false,
          },
        ],
        rider: {
          name: 'John Doe',
          status: 'In-transit',
          phone_number: '+234 817 464 8379',
          pic: ProfilePic,
        },
        delivery_fee: 1500,
        order_no: 112238,
        delivery_code: 1235,
      },
      {
        img: VendorThree,
        name: 'Prime PetroSource',
        price: 12005,
        status: 'Online',
        rating: '4.1',
        delivery_time: '30-50mins',
        pump: DieselPump,
        delivery_timeline: [
          {
            status: 'Order received',
            des: 'Waiting for vendor to accept your order',
            pending: true,
            itsTurn: true,
          },
          {
            status: 'Order accepted ',
            des: 'Vendor on his way to pick your cylinder',
            pending: true,
            itsTurn: false,
          },
          // {
          //   status: 'Refilling your cylinder',
          //   des: 'Your  cylinder is being refilled',
          //   pending: true,
          //   itsTurn: false,
          // },
          {
            status: 'In transit',
            des: 'Your order it’s  on the way and will arrive soon.',
            pending: true,
            itsTurn: false,
          },
        ],
        rider: {
          name: 'Dubem Gabriel',
          status: 'In-transit',
          phone_number: '+234 817 464 8379',
          pic: ProfilePic,
        },
        delivery_fee: 1500,
        order_no: 112239,
        delivery_code: 3452,
      },
      {
        img: VendorFour,
        name: 'EverGreen Oil & Gas',
        price: 1140,
        status: 'Offline',
        rating: '4.2',
        delivery_time: '30-50mins',
        pump: DieselPump,
        delivery_timeline: [
          {
            status: 'Order received',
            des: 'Waiting for vendor to accept your order',
            pending: true,
            itsTurn: true,
          },
          {
            status: 'Order accepted ',
            des: 'Vendor on his way to pick your cylinder',
            pending: true,
            itsTurn: false,
          },
          // {
          //   status: 'Refilling your cylinder',
          //   des: 'Your  cylinder is being refilled',
          //   pending: true,
          //   itsTurn: false,
          // },
          {
            status: 'In transit',
            des: 'Your order it’s  on the way and will arrive soon.',
            pending: true,
            itsTurn: false,
          },
        ],
        rider: {
          name: 'Jim Bells',
          status: 'Available',
          phone_number: '+234 817 464 8379',
          pic: ProfilePic,
        },
        delivery_fee: 1500,
        order_no: 112240,
        delivery_code: 1236,
      },

      {
        img: VendorOne,
        name: 'Energy Supplies',
        price: 1003,
        status: 'Online',
        rating: '4.6',
        delivery_time: '13-30mins',
        pump: DieselPump,
        delivery_timeline: [
          {
            status: 'Order received',
            des: 'Waiting for vendor to accept your order',
            pending: true,
            itsTurn: true,
          },
          {
            status: 'Order accepted ',
            des: 'Vendor on his way to pick your cylinder',
            pending: true,
            itsTurn: false,
          },
          // {
          //   status: 'Refilling your cylinder',
          //   des: 'Your  cylinder is being refilled',
          //   pending: true,
          //   itsTurn: false,
          // },
          {
            status: 'In transit',
            des: 'Your order it’s  on the way and will arrive soon.',
            pending: true,
            itsTurn: false,
          },
        ],
        rider: {
          name: 'Fave Dave',
          status: 'In-transit',
          phone_number: '+234 817 464 8379',
          pic: ProfilePic,
        },
        delivery_fee: 1500,
        order_no: 112237,
        delivery_code: 1023,
      },
      {
        img: VendorTwo,
        name: 'Fave Energies',
        price: 1050,
        status: 'Offline',
        rating: '4.7',
        delivery_time: '15-40mins',
        pump: DieselPump,
        delivery_timeline: [
          {
            status: 'Order received',
            des: 'Waiting for vendor to accept your order',
            pending: true,
            itsTurn: true,
          },
          {
            status: 'Order accepted ',
            des: 'Vendor on his way to pick your cylinder',
            pending: true,
            itsTurn: false,
          },
          // {
          //   status: 'Refilling your cylinder',
          //   des: 'Your  cylinder is being refilled',
          //   pending: true,
          //   itsTurn: false,
          // },
          {
            status: 'In transit',
            des: 'Your order it’s  on the way and will arrive soon.',
            pending: true,
            itsTurn: false,
          },
        ],
        rider: {
          name: 'Daniel Linus',
          status: 'In-transit',
          phone_number: '+234 817 464 8379',
          pic: ProfilePic,
        },
        delivery_fee: 1500,
        order_no: 112238,
        delivery_code: 1235,
      },
      {
        img: VendorThree,
        name: 'Better Petroleum',
        price: 1100,
        status: 'Online',
        rating: '3.9',
        delivery_time: '40-50mins',
        pump: DieselPump,
        delivery_timeline: [
          {
            status: 'Order received',
            des: 'Waiting for vendor to accept your order',
            pending: true,
            itsTurn: true,
          },
          {
            status: 'Order accepted ',
            des: 'Vendor on his way to pick your cylinder',
            pending: true,
            itsTurn: false,
          },
          // {
          //   status: 'Refilling your cylinder',
          //   des: 'Your  cylinder is being refilled',
          //   pending: true,
          //   itsTurn: false,
          // },
          {
            status: 'In transit',
            des: 'Your order it’s  on the way and will arrive soon.',
            pending: true,
            itsTurn: false,
          },
        ],
        rider: {
          name: 'John James',
          status: 'In-transit',
          phone_number: '+234 817 464 8379',
          pic: ProfilePic,
        },
        delivery_fee: 1500,
        order_no: 112239,
        delivery_code: 3452,
      },
      {
        img: VendorFour,
        name: 'Oster Oil & Gas',
        price: 1300,
        status: 'Offline',
        rating: '4.0',
        delivery_time: '30-50mins',
        pump: DieselPump,
        delivery_timeline: [
          {
            status: 'Order received',
            des: 'Waiting for vendor to accept your order',
            pending: true,
            itsTurn: true,
          },
          {
            status: 'Order accepted ',
            des: 'Vendor on his way to pick your cylinder',
            pending: true,
            itsTurn: false,
          },
          // {
          //   status: 'Refilling your cylinder',
          //   des: 'Your  cylinder is being refilled',
          //   pending: true,
          //   itsTurn: false,
          // },
          {
            status: 'In transit',
            des: 'Your order it’s  on the way and will arrive soon.',
            pending: true,
            itsTurn: false,
          },
        ],
        rider: {
          name: 'Innocent Nnamdi',
          status: 'In-transit',
          phone_number: '+234 817 464 8379',
          pic: ProfilePic,
        },
        delivery_fee: 1500,
        order_no: 112240,
        delivery_code: 1236,
      },
    ],
  },
  {
    Img: Diesel,
    title: 'Diesel',
    details: [
      {
        img: VendorOne,
        name: 'Peak Energy Supplies',
        price: 1082,
        status: 'Online',
        rating: '4.2',
        delivery_time: '20-30mins',
        pump: DieselPump,
        delivery_timeline: [
          {
            status: 'Order received',
            des: 'Waiting for vendor to accept your order',
            pending: true,
            itsTurn: true,
          },
          {
            status: 'Order accepted ',
            des: 'Vendor on his way to pick your cylinder',
            pending: true,
            itsTurn: false,
          },
          // {
          //   status: 'Refilling your cylinder',
          //   des: 'Your  cylinder is being refilled',
          //   pending: true,
          //   itsTurn: false,
          // },
          {
            status: 'In transit',
            des: 'Your order it’s  on the way and will arrive soon.',
            pending: true,
            itsTurn: false,
          },
        ],
        rider: {
          name: 'David Doe',
          status: 'Available',
          phone_number: '+234 817 464 8379',
          pic: ProfilePic,
        },
        delivery_fee: 1500,
        order_no: 112240,
        delivery_code: 2244,
      },
      {
        img: VendorTwo,
        name: 'Vanguard Petroleum ',
        price: 1100,
        status: 'Online',
        rating: '4.6',
        delivery_time: '25-40mins',
        pump: DieselPump,
        delivery_timeline: [
          {
            status: 'Order received',
            des: 'Waiting for vendor to accept your order',
            pending: true,
            itsTurn: true,
          },
          {
            status: 'Order accepted ',
            des: 'Vendor on his way to pick your cylinder',
            pending: true,
            itsTurn: false,
          },
          // {
          //   status: 'Refilling your cylinder',
          //   des: 'Your  cylinder is being refilled',
          //   pending: true,
          //   itsTurn: false,
          // },
          {
            status: 'In transit',
            des: 'Your order it’s  on the way and will arrive soon.',
            pending: true,
            itsTurn: false,
          },
        ],
        rider: {
          name: 'Efe Dim',
          status: 'In-transit',
          phone_number: '+234 817 464 8379',
          pic: ProfilePic,
        },
        delivery_fee: 1500,
        order_no: 112240,
        delivery_code: 3425,
      },
      {
        img: VendorThree,
        name: 'Prime PetroSource',
        price: 12005,
        status: 'Online',
        rating: '4.1',
        delivery_time: '30-50mins',
        pump: DieselPump,
        delivery_timeline: [
          {
            status: 'Order received',
            des: 'Waiting for vendor to accept your order',
            pending: true,
            itsTurn: true,
          },
          {
            status: 'Order accepted ',
            des: 'Vendor on his way to pick your cylinder',
            pending: true,
            itsTurn: false,
          },
          // {
          //   status: 'Refilling your cylinder',
          //   des: 'Your  cylinder is being refilled',
          //   pending: true,
          //   itsTurn: false,
          // },
          {
            status: 'In transit',
            des: 'Your order it’s  on the way and will arrive soon.',
            pending: true,
            itsTurn: false,
          },
        ],
        rider: {
          name: 'Sydney Joe',
          status: 'In-transit',
          phone_number: '+234 817 464 8379',
          pic: ProfilePic,
        },
        delivery_fee: 1500,
        order_no: 112240,
        delivery_code: 4455,
      },
      {
        img: VendorFour,
        name: 'EverGreen Oil & Gas',
        price: 1140,
        status: 'Offline',
        rating: '4.2',
        delivery_time: '30-50mins',
        pump: DieselPump,
        delivery_timeline: [
          {
            status: 'Order received',
            des: 'Waiting for vendor to accept your order',
            pending: true,
            itsTurn: true,
          },
          {
            status: 'Order accepted ',
            des: 'Vendor on his way to pick your cylinder',
            pending: true,
            itsTurn: false,
          },
          // {
          //   status: 'Refilling your cylinder',
          //   des: 'Your  cylinder is being refilled',
          //   pending: true,
          //   itsTurn: false,
          // },
          {
            status: 'In transit',
            des: 'Your order it’s  on the way and will arrive soon.',
            pending: true,
            itsTurn: false,
          },
        ],
        rider: {
          name: 'Simon Peters',
          status: 'In-transit',
          phone_number: '+234 817 464 8379',
          pic: ProfilePic,
        },
        delivery_fee: 1500,
        order_no: 112240,
        delivery_code: 5543,
      },
      {
        img: VendorOne,
        name: 'Energy Supplies',
        price: 1003,
        status: 'Online',
        rating: '4.6',
        delivery_time: '13-30mins',
        pump: DieselPump,
        delivery_timeline: [
          {
            status: 'Order received',
            des: 'Waiting for vendor to accept your order',
            pending: true,
            itsTurn: true,
          },
          {
            status: 'Order accepted ',
            des: 'Vendor on his way to pick your cylinder',
            pending: true,
            itsTurn: false,
          },
          // {
          //   status: 'Refilling your cylinder',
          //   des: 'Your  cylinder is being refilled',
          //   pending: true,
          //   itsTurn: false,
          // },
          {
            status: 'In transit',
            des: 'Your order it’s  on the way and will arrive soon.',
            pending: true,
            itsTurn: false,
          },
        ],
        rider: {
          name: 'Dami Kan',
          status: 'In-transit',
          phone_number: '+234 817 464 8379',
          pic: ProfilePic,
        },
        delivery_fee: 1500,
        order_no: 112237,
        delivery_code: 1023,
      },
      {
        img: VendorTwo,
        name: 'Fave Energies',
        price: 1050,
        status: 'Offline',
        rating: '4.7',
        delivery_time: '15-40mins',
        pump: DieselPump,
        delivery_timeline: [
          {
            status: 'Order received',
            des: 'Waiting for vendor to accept your order',
            pending: true,
            itsTurn: true,
          },
          {
            status: 'Order accepted ',
            des: 'Vendor on his way to pick your cylinder',
            pending: true,
            itsTurn: false,
          },
          // {
          //   status: 'Refilling your cylinder',
          //   des: 'Your  cylinder is being refilled',
          //   pending: true,
          //   itsTurn: false,
          // },
          {
            status: 'In transit',
            des: 'Your order it’s  on the way and will arrive soon.',
            pending: true,
            itsTurn: false,
          },
        ],
        rider: {
          name: 'John Paul',
          status: 'In-transit',
          phone_number: '+234 817 464 8379',
          pic: ProfilePic,
        },
        delivery_fee: 1500,
        order_no: 112238,
        delivery_code: 1235,
      },
      {
        img: VendorThree,
        name: 'Better Petroleum',
        price: 1100,
        status: 'Online',
        rating: '3.9',
        delivery_time: '40-50mins',
        pump: DieselPump,
        delivery_timeline: [
          {
            status: 'Order received',
            des: 'Waiting for vendor to accept your order',
            pending: true,
            itsTurn: true,
          },
          {
            status: 'Order accepted ',
            des: 'Vendor on his way to pick your cylinder',
            pending: true,
            itsTurn: false,
          },
          // {
          //   status: 'Refilling your cylinder',
          //   des: 'Your  cylinder is being refilled',
          //   pending: true,
          //   itsTurn: false,
          // },
          {
            status: 'In transit',
            des: 'Your order it’s  on the way and will arrive soon.',
            pending: true,
            itsTurn: false,
          },
        ],
        rider: {
          name: 'King Nat',
          status: 'In-transit',
          phone_number: '+234 817 464 8379',
          pic: ProfilePic,
        },
        delivery_fee: 1500,
        order_no: 112239,
        delivery_code: 3452,
      },
      {
        img: VendorFour,
        name: 'Oster Oil & Gas',
        price: 1300,
        status: 'Offline',
        rating: '4.0',
        delivery_time: '30-50mins',
        pump: DieselPump,
        delivery_timeline: [
          {
            status: 'Order received',
            des: 'Waiting for vendor to accept your order',
            pending: true,
            itsTurn: true,
          },
          {
            status: 'Order accepted ',
            des: 'Vendor on his way to pick your cylinder',
            pending: true,
            itsTurn: false,
          },
          // {
          //   status: 'Refilling your cylinder',
          //   des: 'Your  cylinder is being refilled',
          //   pending: true,
          //   itsTurn: false,
          // },
          {
            status: 'In transit',
            des: 'Your order it’s  on the way and will arrive soon.',
            pending: true,
            itsTurn: false,
          },
        ],
        rider: {
          name: 'Osita Chi',
          status: 'In-transit',
          phone_number: '+234 817 464 8379',
          pic: ProfilePic,
        },
        delivery_fee: 1500,
        order_no: 112240,
        delivery_code: 1236,
      },
    ],
  },
  {
    Img: Electricity,
    title: 'Electricity',
    electricity_provider: [
      {
        electricity: 'Eko Electricity PrePaid',
      },
      {
        electricity: 'Jos Electricity PrePaid',
      },
      {
        electricity: 'Port-Harcourt Electricity PrePaid',
      },
      {
        electricity: 'Kano Electricity PrePaid',
      },
      {
        electricity: 'Enugu Electricity PrePaid',
      },
      {
        electricity: 'Kaduna Electricity PrePaid',
      },
      {
        electricity: 'Ibadan Electricity PrePaid',
      },
      {
        electricity: 'Abuja Electricity PrePaid',
      },
    ],
  },
];

interface VendorProps {
  img: any;
  name: string;
  no_of_orders: number;
}

export const vendors_data: VendorProps[] = [
  {
    img: FirstVendor,
    name: 'Naomi Todd',
    no_of_orders: 2392,
  },
  {
    img: SecondVendor,
    name: 'Olivier Webb',
    no_of_orders: 2242,
  },
  {
    img: ThirdVendor,
    name: 'Jada Rice',
    no_of_orders: 1264,
  },
];

export const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'completed':
      return '#2BBD6F';
    case 'cancelled':
      return '#DC5513';
    default:
      return '#5E5E5E';
  }
};
