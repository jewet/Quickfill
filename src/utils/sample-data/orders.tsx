export interface OrdersProps{
    id: string;
    order_type: any;
    amount: number;
    date: string;
    time: string;
    status: string;
}

export const order_data: OrdersProps[] = [
    {
        id: '#SHG324HJF',
        order_type: ['12kg gas refill'],
        amount: 19500,
        date: '12th Feb, 2022',
        time: '2:30pm',
        status: 'Completed'
    },
    {
        id: '#MGJHG387HK',
        order_type: ['12kg gas refill', 'Gas  burner head'],
        amount: 19500,
        date: '12th Feb, 2022',
        time: '2:30pm',
        status: 'Cancelled'
    },
    {
        id: '#MGJHG387HK',
        order_type: ['12kg gas refill', 'Gas  burner head'],
        amount: 19500,
        date: '12th Feb, 2022',
        time: '2:30pm',
        status: 'Awaiting  confirmation '
    },
    {
        id: '#SHG324HJF',
        order_type: ['12kg gas refill'],
        amount: 19500,
        date: '12th Feb, 2022',
        time: '2:30pm',
        status: 'In transit'
    },
    {
        id: '#MGJHG387HK',
        order_type: ['12kg gas refill', 'Gas  burner head'],
        amount: 19500,
        date: '12th Feb, 2022',
        time: '2:30pm',
        status: 'Cancelled'
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