import Gas from '../../assets/images/home/gas.svg'
import Petroleum from '../../assets/images/home/petroleum.svg'
import Diesel from '../../assets/images/home/diesel.svg'
import Electricity from '../../assets/images/home/electricity.svg'
import FirstVendor from '../../assets/images/home/vendor1.svg'
import SecondVendor from '../../assets/images/home/vendor2.svg'
import ThirdVendor from '../../assets/images/home/vendor3.svg'


interface QuickActionProps {
  Img: any;
  title: string;
}

export const quick_action_data: QuickActionProps[] = [
    {
        Img: Gas,
        title: 'Cooking\nGas'
    },
    {
        Img: Petroleum,
        title: 'Petroleum'
    },
    {
        Img: Diesel,
        title: 'Diesel'
    },
    {
        Img: Electricity,
        title: 'Electricity'
    },
]

interface VendorProps{
    img: any;
    name: string;
    no_of_orders: number;
}

export const vendors_data: VendorProps[] = [
    {
        img: FirstVendor,
        name: 'Naomi Todd',
        no_of_orders: 2392
    },
    {
        img: SecondVendor,
        name: 'Olivier Webb',
        no_of_orders: 2242
    },
    {
        img: ThirdVendor,
        name: 'Jada Rice',
        no_of_orders: 1264
    },
]

export   const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return '#2BBD6F';
      case 'cancelled':
        return '#DC5513';
      default:
        return '#5E5E5E';
    }
  };