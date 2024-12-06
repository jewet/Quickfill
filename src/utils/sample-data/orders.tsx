import ProfilePic from '../../assets/images/orders/profile_pic.svg'
import AchievementIcon from '../../assets/images/orders/award.svg'
import VendorPic from '../../assets/images/electricity/mtn-icon.svg'

export interface OrdersProps{
    id: string;
    order_type: any;
    amount: number;
    date: string;
    time: string;
    status: string;
    vendor: any;
    rider: any;
    delivery: any;
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
            phone_number: '+234 817 464 8379'
        },
        rider: {
            name: 'John Doe',
            status: 'In-transit',
            phone_number: '+234 817 464 8379',
            pic: ProfilePic
        },
        status: 'Completed',
        delivery: {
            code: '1234',
            fee: 1500
        }
    },
    {
        id: '#MGJHG387HK',
        order_type: [{item: '12kg gas refill', price: 18000}, {item: 'Gas  burner head', price: 6000}],
        amount: 19500,
        date: '12th Feb, 2022',
        time: '2:30pm',
        vendor: {
            name: 'Home of Gas',
            status: 'Online',
            pic: VendorPic,
            phone_number: '+234 817 464 8379'
        },
        rider: {
            name: 'John Doe',
            status: 'In-transit',
            phone_number: '+234 817 464 8379',
            pic: ProfilePic
        },
        status: 'Cancelled',
        delivery: {
            code: '2323',
            fee: 1500
        }
    },
    {
        id: '#MGJHG387HK',
        order_type: [{item: '12kg gas refill', price: 18000}, {item: 'Gas  burner head', price: 6000}],
        amount: 19500,
        date: '12th Feb, 2022',
        time: '2:30pm',
        vendor: {
            name: 'Gass Station',
            status: 'Offline',
            pic: VendorPic,
            phone_number: '+234 817 464 8379'
        },
        rider: {
            name: 'John Doe',
            status: 'Arrived',
            phone_number: '+234 817 464 8379',
            pic: ProfilePic
        },
        status: 'Awaiting  confirmation ',
        delivery: {
            code: '4546',
            fee: 3500
        }
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
            phone_number: '+234 817 464 8379'
        },
        rider: {
            name: 'John Doe',
            status: 'In-transit',
            phone_number: '+234 817 464 8379',
            pic: ProfilePic
        },
        status: 'Arrived',
        delivery: {
            code: '2353',
            fee: 5000
        }
    },
    {
        id: '#MGJHG387HK',
        order_type: [{item: '12kg gas refill', price: 18000}, {item: 'Gas  burner head', price: 6000}],
        amount: 19500,
        date: '12th Feb, 2022',
        time: '2:30pm',
        vendor: {
            name: 'Gas Hub',
            status: 'Offline',
            pic: VendorPic,
            phone_number: '+234 817 464 8379'
        },
        rider: {
            name: 'John Doe',
            status: 'In-transit',
            phone_number: '+234 817 464 8379',
            pic: ProfilePic
        },
        status: 'Cancelled',
        delivery: {
            code: '1585',
            fee: 4500
        }
    },
]

interface OrdersNavProps{
    nav: string;
}

export const orders_nav: OrdersNavProps[] = [
    {
        nav: 'Ongoing'
    },
    {
        nav: 'Completed'
    },
]

interface AchievementsProps{
    img: any;
    reward: string;
}

export const achievements_data: AchievementsProps[] = [
    {
        img: AchievementIcon,
        reward: '1000 5-Star\nReviews '
    },
    {
        img: AchievementIcon,
        reward: '4 Years with\nQuikrefil'
    },
    {
        img: AchievementIcon,
        reward: 'Outstanding\nVendor'
    },
    {
        img: AchievementIcon,
        reward: 'Outstanding\nVendor'
    },
]