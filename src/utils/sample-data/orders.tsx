import ProfilePic from '../../assets/images/orders/profile_pic.svg';
import AchievementIcon from '../../assets/images/orders/award.svg';
import VendorPic from '../../assets/images/electricity/mtn-icon.svg';

export interface OrdersProps {
  id: string;
  order_type: any;
  amount: number;
  date: string;
  time: string;
  status: string;
  vendor: any;
  rider: any;
  delivery: any;
  delivery_timeline: any;
  customer_review: any;
}

export const order_data: OrdersProps[] = [
  {
    id: '#SHG324HJF',
    order_type: [{item: '12kg gas refill', price: 18000}],
    amount: 19500,
    date: '12th Feb, 2022',
    time: '2:30pm',
    vendor: {
      name: 'Gas Hub',
      status: 'Online',
      pic: VendorPic,
      phone_number: '+234 817 464 8379',
    },
    rider: {
      name: 'John Doe',
      status: 'In-transit',
      phone_number: '+234 817 464 8379',
      pic: ProfilePic,
    },
    status: 'Completed',
    delivery: {
      code: '1234',
      fee: 1500,
    },
    delivery_timeline: [
      {
        status: 'Order received',
        des: 'Waiting for vendor to accept your order',
        pending: false,
        itsTurn: true,
      },
      {
        status: 'Order accepted ',
        des: 'Delivery rep on his way to pick your cylinder',
        pending: false,
        itsTurn: true,
      },
      {
        status: 'In transit',
        des: 'Your order is  on the way and will arrive soon.',
        pending: true,
        itsTurn: true,
      },
      {
        status: 'Order completed',
        des: 'Your  cylinder is being refilled',
        pending: true,
        itsTurn: false,
      },
    ],
    customer_review: [
      {
        name: 'John Johnson',
        timeStamp: '5h',
        review:
          'Amazing service! The delivery was right on time, and the agent was super polite and professional.',
        rating: 5,
      },
      {
        name: 'Emeka Nnaemeka',
        timeStamp: '10h',
        review:
          'Quick and reliable! My package arrived in perfect condition. Highly recommended!',
        rating: 4,
      },
      {
        name: 'Yemi Adeyemi',
        timeStamp: '15h',
        review:
          "Excellent communication and punctuality. Couldn't have asked for a better delivery experience.",
        rating: 4,
      },
      {
        name: 'Chibuzor Ekene',
        timeStamp: '20h',
        review: 'Great work',
        rating: 2,
      },
      {
        name: 'John Daniel',
        timeStamp: '1 day',
        review: 'Keep it up',
        rating: 3,
      },
      {
        name: 'Dinma Gabriel',
        timeStamp: '3 days',
        review: 'Excellent',
        rating: 1,
      },
    ],
  },
  {
    id: '#MGJHG387HK',
    order_type: [
      {item: '12kg gas refill', price: 18000},
      {item: 'Gas  burner head', price: 6000},
    ],
    amount: 19500,
    date: '12th Feb, 2022',
    time: '2:30pm',
    vendor: {
      name: 'Home of Gas',
      status: 'Online',
      pic: VendorPic,
      phone_number: '+234 817 464 8379',
    },
    rider: {
      name: 'John Doe',
      status: 'In-transit',
      phone_number: '+234 817 464 8379',
      pic: ProfilePic,
    },
    status: 'Cancelled',
    delivery: {
      code: '2323',
      fee: 1500,
    },
    delivery_timeline: [
      {
        status: 'Order received',
        des: 'Waiting for vendor to accept your order',
        pending: false,
        itsTurn: true,
      },
      {
        status: 'Order accepted ',
        des: 'Delivery rep on his way to pick your cylinder',
        pending: false,
        itsTurn: true,
      },
      {
        status: 'In transit',
        des: 'Your order is  on the way and will arrive soon.',
        pending: true,
        itsTurn: true,
      },
      {
        status: 'Order completed',
        des: 'Your  cylinder is being refilled',
        pending: true,
        itsTurn: false,
      },
    ],
    customer_review: [
      {
        name: 'John Johnson',
        timeStamp: '5h',
        review:
          'Amazing service! The delivery was right on time, and the agent was super polite and professional.',
        rating: 5,
      },
      {
        name: 'Emeka Nnaemeka',
        timeStamp: '10h',
        review:
          'Quick and reliable! My package arrived in perfect condition. Highly recommended!',
        rating: 4,
      },
      {
        name: 'Yemi Adeyemi',
        timeStamp: '15h',
        review:
          "Excellent communication and punctuality. Couldn't have asked for a better delivery experience.",
        rating: 4,
      },
      {
        name: 'Chibuzor Ekene',
        timeStamp: '20h',
        review: 'Great work',
        rating: 2,
      },
      {
        name: 'John Daniel',
        timeStamp: '1 day',
        review: 'Keep it up',
        rating: 3,
      },
      {
        name: 'Dinma Gabriel',
        timeStamp: '3 days',
        review: 'Excellent',
        rating: 1,
      },
    ],
  },
  {
    id: '#MGJHG387HK',
    order_type: [
      {item: '12kg gas refill', price: 18000},
      {item: 'Gas  burner head', price: 6000},
    ],
    amount: 19500,
    date: '12th Feb, 2022',
    time: '2:30pm',
    vendor: {
      name: 'Gass Station',
      status: 'Offline',
      pic: VendorPic,
      phone_number: '+234 817 464 8379',
    },
    rider: {
      name: 'John Doe',
      status: 'Arrived',
      phone_number: '+234 817 464 8379',
      pic: ProfilePic,
    },
    status: 'Awaiting  confirmation ',
    delivery: {
      code: '4546',
      fee: 3500,
    },
    delivery_timeline: [
      {
        status: 'Order received',
        des: 'Waiting for vendor to accept your order',
        pending: false,
        itsTurn: true,
      },
      {
        status: 'Order accepted ',
        des: 'Delivery rep on his way to pick your cylinder',
        pending: false,
        itsTurn: true,
      },
      {
        status: 'In transit',
        des: 'Your order is  on the way and will arrive soon.',
        pending: true,
        itsTurn: true,
      },
      {
        status: 'Order completed',
        des: 'Your  cylinder is being refilled',
        pending: true,
        itsTurn: false,
      },
    ],
    customer_review: [
      {
        name: 'John Johnson',
        timeStamp: '5h',
        review:
          'Amazing service! The delivery was right on time, and the agent was super polite and professional.',
        rating: 5,
      },
      {
        name: 'Emeka Nnaemeka',
        timeStamp: '10h',
        review:
          'Quick and reliable! My package arrived in perfect condition. Highly recommended!',
        rating: 4,
      },
      {
        name: 'Yemi Adeyemi',
        timeStamp: '15h',
        review:
          "Excellent communication and punctuality. Couldn't have asked for a better delivery experience.",
        rating: 4,
      },
      {
        name: 'Chibuzor Ekene',
        timeStamp: '20h',
        review: 'Great work',
        rating: 2,
      },
      {
        name: 'John Daniel',
        timeStamp: '1 day',
        review: 'Keep it up',
        rating: 3,
      },
      {
        name: 'Dinma Gabriel',
        timeStamp: '3 days',
        review: 'Excellent',
        rating: 1,
      },
    ],
  },
  {
    id: '#SHG324HJF',
    order_type: [{item: '12kg gas refill', price: 18000}],
    amount: 19500,
    date: '12th Feb, 2022',
    time: '2:30pm',
    vendor: {
      name: 'Gas Refiller',
      status: 'Online',
      pic: VendorPic,
      phone_number: '+234 817 464 8379',
    },
    rider: {
      name: 'John Doe',
      status: 'In-transit',
      phone_number: '+234 817 464 8379',
      pic: ProfilePic,
    },
    status: 'Arrived',
    delivery: {
      code: '2353',
      fee: 5000,
    },
    delivery_timeline: [
      {
        status: 'Order received',
        des: 'Waiting for vendor to accept your order',
        pending: false,
        itsTurn: true,
      },
      {
        status: 'Order accepted ',
        des: 'Delivery rep on his way to pick your cylinder',
        pending: false,
        itsTurn: true,
      },
      {
        status: 'In transit',
        des: 'Your order is  on the way and will arrive soon.',
        pending: true,
        itsTurn: true,
      },
      {
        status: 'Order completed',
        des: 'Your  cylinder is being refilled',
        pending: true,
        itsTurn: false,
      },
    ],
    customer_review: [
      {
        name: 'John Johnson',
        timeStamp: '5h',
        review:
          'Amazing service! The delivery was right on time, and the agent was super polite and professional.',
        rating: 5,
      },
      {
        name: 'Emeka Nnaemeka',
        timeStamp: '10h',
        review:
          'Quick and reliable! My package arrived in perfect condition. Highly recommended!',
        rating: 4,
      },
      {
        name: 'Yemi Adeyemi',
        timeStamp: '15h',
        review:
          "Excellent communication and punctuality. Couldn't have asked for a better delivery experience.",
        rating: 4,
      },
      {
        name: 'Chibuzor Ekene',
        timeStamp: '20h',
        review: 'Great work',
        rating: 2,
      },
      {
        name: 'John Daniel',
        timeStamp: '1 day',
        review: 'Keep it up',
        rating: 3,
      },
      {
        name: 'Dinma Gabriel',
        timeStamp: '3 days',
        review: 'Excellent',
        rating: 1,
      },
    ],
  },
  {
    id: '#MGJHG387HK',
    order_type: [
      {item: '12kg gas refill', price: 18000},
      {item: 'Gas  burner head', price: 6000},
    ],
    amount: 19500,
    date: '12th Feb, 2022',
    time: '2:30pm',
    vendor: {
      name: 'Gas Hub',
      status: 'Offline',
      pic: VendorPic,
      phone_number: '+234 817 464 8379',
    },
    rider: {
      name: 'John Doe',
      status: 'In-transit',
      phone_number: '+234 817 464 8379',
      pic: ProfilePic,
    },
    status: 'Cancelled',
    delivery: {
      code: '1585',
      fee: 4500,
    },
    delivery_timeline: [
      {
        status: 'Order received',
        des: 'Waiting for vendor to accept your order',
        pending: false,
        itsTurn: true,
      },
      {
        status: 'Order accepted ',
        des: 'Delivery rep on his way to pick your cylinder',
        pending: false,
        itsTurn: true,
      },
      {
        status: 'In transit',
        des: 'Your order is  on the way and will arrive soon.',
        pending: true,
        itsTurn: true,
      },
      {
        status: 'Order completed',
        des: 'Your  cylinder is being refilled',
        pending: true,
        itsTurn: false,
      },
    ],
    customer_review: [
      {
        name: 'John Johnson',
        timeStamp: '5h',
        review:
          'Amazing service! The delivery was right on time, and the agent was super polite and professional.',
        rating: 5,
      },
      {
        name: 'Emeka Nnaemeka',
        timeStamp: '10h',
        review:
          'Quick and reliable! My package arrived in perfect condition. Highly recommended!',
        rating: 4,
      },
      {
        name: 'Yemi Adeyemi',
        timeStamp: '15h',
        review:
          "Excellent communication and punctuality. Couldn't have asked for a better delivery experience.",
        rating: 4,
      },
      {
        name: 'Chibuzor Ekene',
        timeStamp: '20h',
        review: 'Great work',
        rating: 2,
      },
      {
        name: 'John Daniel',
        timeStamp: '1 day',
        review: 'Keep it up',
        rating: 3,
      },
      {
        name: 'Dinma Gabriel',
        timeStamp: '3 days',
        review: 'Excellent',
        rating: 1,
      },
    ],
  },
];

interface OrdersNavProps {
  nav: string;
}

export const orders_nav: OrdersNavProps[] = [
  {
    nav: 'Ongoing',
  },
  {
    nav: 'Completed',
  },
];

interface CustomerReviewProps {
  name: string;
  timeStamp: string;
  review: string;
  rating: number;
}

export const customer_review: CustomerReviewProps[] = [
  {
    name: 'John Johnson',
    timeStamp: '5h',
    review:
      'Amazing service! The delivery was right on time, and the agent was super polite and professional.',
    rating: 5,
  },
  {
    name: 'Emeka Nnaemeka',
    timeStamp: '10h',
    review:
      'Quick and reliable! My package arrived in perfect condition. Highly recommended!',
    rating: 4,
  },
  {
    name: 'Yemi Adeyemi',
    timeStamp: '15h',
    review:
      "Excellent communication and punctuality. Couldn't have asked for a better delivery experience.",
    rating: 4,
  },
  {
    name: 'Chibuzor Ekene',
    timeStamp: '20h',
    review: 'Great work',
    rating: 2,
  },
  {
    name: 'John Daniel',
    timeStamp: '1 day',
    review: 'Keep it up',
    rating: 3,
  },
  {
    name: 'Dinma Gabriel',
    timeStamp: '3 days',
    review: 'Excellent',
    rating: 1,
  },
];

interface AchievementsProps {
  img: any;
  reward: string;
}

export const achievements_data: AchievementsProps[] = [
  {
    img: AchievementIcon,
    reward: '1000 5-Star\nReviews ',
  },
  {
    img: AchievementIcon,
    reward: '4 Years with\nQuikrefil',
  },
  {
    img: AchievementIcon,
    reward: 'Outstanding\nVendor',
  },
  {
    img: AchievementIcon,
    reward: 'Outstanding\nVendor',
  },
];

interface ReportProps {
  reason: string;
}

export const report_data: ReportProps[] = [
  {
    reason: 'Rude behavior',
  },
  {
    reason: 'Mishandling package',
  },
  {
    reason: 'Late delivery',
  },
  {
    reason: 'Unsafe driving',
  },
  {
    reason: 'Other',
  },
];
