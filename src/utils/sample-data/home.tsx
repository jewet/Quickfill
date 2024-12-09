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

interface QuickActionProps {
  Img: any;
  title: string;
  details: any;
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
          pump: DieselPump,
        },
        {
          img: VendorTwo,
          name: 'Johnson Gas Limited ',
          price: 1100,
          status: 'Online',
          rating: '4.6',
          delivery_time: '25-40mins',
          pump: DieselPump,
        },
        {
          img: VendorThree,
          name: 'Uchez  Gas Test',
          price: 12005,
          status: 'Online',
          rating: '4.1',
          delivery_time: '30-50mins',
          pump: DieselPump,
        },
        {
          img: VendorFour,
          name: 'Uche Gas Limited',
          price: 1140,
          status: 'Offline',
          rating: '4.2',
          delivery_time: '30-50mins',
          pump: DieselPump,
        },
      ],
  },
  {
    Img: Petroleum,
    title: 'Petroleum',
    details: [],
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
      },
      {
        img: VendorTwo,
        name: 'Vanguard Petroleum ',
        price: 1100,
        status: 'Online',
        rating: '4.6',
        delivery_time: '25-40mins',
        pump: DieselPump,
      },
      {
        img: VendorThree,
        name: 'Prime PetroSource',
        price: 12005,
        status: 'Online',
        rating: '4.1',
        delivery_time: '30-50mins',
        pump: DieselPump,
      },
      {
        img: VendorFour,
        name: 'EverGreen Oil & Gas',
        price: 1140,
        status: 'Offline',
        rating: '4.2',
        delivery_time: '30-50mins',
        pump: DieselPump,
      },
    ],
  },
  {
    Img: Electricity,
    title: 'Electricity',
    details: [
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
