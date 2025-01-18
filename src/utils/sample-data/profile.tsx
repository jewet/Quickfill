import WalletIcon from '../../assets/images/profile/wallet.svg';
import DetailsIcon from '../../assets/images/profile/details.svg';
import FavIcon from '../../assets/images/profile/fav.svg';
import AddressIcon from '../../assets/images/profile/address.svg';
import PaymentIcon from '../../assets/images/profile/payment.svg';
import HelpIcon from '../../assets/images/profile/help.svg';
import SupportIcon from '../../assets/images/profile/contact.svg';
import ItemOne from '../../assets/images/accessories/item_1.svg';
import ItemTwo from '../../assets/images/accessories/item_2.svg';
import VendorOne from '../../assets/images/profile/vendor_img1.svg';
import VendorTwo from '../../assets/images/profile/vendo_img2.svg';
import Name from '../../assets/images/profile/tabler_user.svg';
import Username from '../../assets/images/profile/tabler_at.svg';
import Phone from '../../assets/images/profile/tabler_phone.svg';
import Email from '../../assets/images/profile/tabler_mail.svg';
import Gender from '../../assets/images/profile/tabler_users.svg';
import Dob from '../../assets/images/profile/tabler_cake.svg';
import Referral from '../../assets/images/profile/referral.svg';
import MailUs from '../../assets/images/profile/mail_us.svg';
import WhatsAppUs from '../../assets/images/profile/whatsapp_us.svg';
import CallUs from '../../assets/images/profile/call_us.svg';
import FailedArrow from '../../assets/images/payment/failed_arrow.svg';
import SuccessArrow from '../../assets/images/payment/success_arrow.svg';

interface PersonalDetails {
  title?: string;
  phone_number?: string;
  email?: string;
  username?: string;
  gender?: string;
  dob?: string;
}

export interface ProfileProps {
  icon: any;
  profile: any;
}

export const profile_data: ProfileProps[] = [
  {
    icon: Referral,
    profile: {
      type: 'Referral code',
    },
  },
  {
    icon: WalletIcon,
    profile: {
      type: 'My Wallet',
      details: [
        {
          icon: FailedArrow,
          amt: 19500,
          des: 'Order payment by mohgas wallet ',
          date: '05 Aug 24',
        },
        {
          icon: SuccessArrow,
          amt: 9500,
          des: 'WallWallet funded via card',
          date: '09 Aug 24',
        },
        {
          icon: FailedArrow,
          amt: 22500,
          des: 'Order payment by  flutter wave  ',
          date: '20 Jul 24',
        },
        {
          icon: FailedArrow,
          amt: 5500,
          des: 'Order payment by card',
          date: '10 Jun 24',
        },
      ],
      bal: 96484.09
    },
  },
  {
    icon: DetailsIcon,
    profile: {
      type: 'My Details',
      details: [
        {icon: Name, name: 'Ministar Samuel', title: 'Name'},
        {
          icon: Phone,
          phone_number: '+234 806 968 4739',
          title: 'Phone number',
        },
        {icon: Email, email: 'ministar@email.com', title: 'Email'},
        {icon: Username, username: 'ministar2134', title: 'Username'},
        {icon: Gender, gender: 'Male', title: 'Gender'},
        {icon: Dob, dob: 'October, 24', title: 'Birthday'},
      ],
      verified: false,
    },
  },
  {
    icon: FavIcon,
    profile: {
      type: 'My Favourites',
      accessories: [
        {
          img: ItemOne,
          name: 'Bosch (Medium, All-Purpose Burner)',
          spec: 'Our handcrafted bouquets are perfect for any occasion. Choose from a variety of stunning arrangements featuring vibrant blooms expertly put together by our florists.',
          price: 45000,
        },
        {
          img: ItemTwo,
          name: 'Whirlpool (Small, Simmer Burner)',
          spec: 'Durable gas burner with a sleek design and eas ...',
          price: 38000,
        },
      ],
      vendors: [
        {
          img: VendorOne,
          name: 'Gas Hub ',
          price: 1500,
          status: 'Online',
          rating: '4.2',
          delivery_time: '20-30mins',
        },
        {
          img: VendorTwo,
          name: 'Uchez  Gas Test',
          price: 1750,
          status: 'Offline',
          rating: '4.1',
          delivery_time: '30-50mins',
        },
      ],
    },
  },
  {
    icon: AddressIcon,
    profile: {
      type: 'Saved Addresses',
      location: '8-26 Ango Abdullahi St, Gwarinpa, Abuja..',
    },
  },
  // {
  //   icon: PaymentIcon,
  //   profile: {
  //     type: 'Payment',
  //   },
  // },
  {
    icon: HelpIcon,
    profile: {
      type: 'Help/feedback',
      details: [
        {name: 'FAQ’s'},
        {name: 'User policy'},
        {name: 'Complaints & feedback'},
        {name: 'Rate us on the store'},
        {name: 'Share this app with friends'},
      ],
    },
  },
  {
    icon: SupportIcon,
    profile: {
      type: 'Contact/support',
      details: [
        {
          icon: MailUs,
          title: 'Email Us',
          more: 'Replies with 7hrs',
        },
        {
          icon: WhatsAppUs,
          title: 'Chat on Whatsapp',
          more: 'Replies ASAP',
        },
        {
          icon: CallUs,
          title: 'Call us',
          more: 'Business hours Mon-Fri',
        },
      ],
    },
  },
];
