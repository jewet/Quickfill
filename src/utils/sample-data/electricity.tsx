export interface ElectricityProps {
  electricity: string;
}

export const electricity_data: ElectricityProps[] = [
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
];

interface MeterProps {
  name: string;
}

export const meter_data: MeterProps[] = [
  {
    name: 'Chidi Emeka',
  },
  {
    name: 'Idris Abdul',
  },
  {
    name: 'Edith Minard',
  },
  {
    name: 'Richard Paul',
  },
  {
    name: 'Nuella Pius',
  },
];

export interface ElectricityTransactionProps {
  token: string;
  customer_name: string;
  address: string;
  meter_no: string;
  date: string;
  time: string;
  provider: string;
  value: string;
  transaction_ref: string;
  receipt_no: string;
  payment_type: string;
  status: string;
  utility_cost: number;
  vat: number;
  service_charge: number;
}

export const electricity_transaction_history: ElectricityTransactionProps[] = [
  {
    token: '1293  4843  4834  4930  9489',
    customer_name: 'Edith G. Minard',
    address: '12 Admiralty Wy, Eti-Osa, Lagos 106104, Lagos',
    meter_no: '782398372',
    date: 'Wed, 12th Feb, 2022',
    time: '2:30pm',
    value: '45.5kwh',
    provider: 'Eko Electricity PrePaid',
    transaction_ref: 'FFF85D24EFF90C0749BA59CB5BFB2',
    receipt_no: '7041202403119051840',
    payment_type: 'Paid with transfer',
    utility_cost: 20000,
    vat: 332,
    service_charge: 100,
    status: 'Completed',
  },
  {
    token: '2345  4888  2222  9082  2859',
    customer_name: 'Abdul Ahmed',
    address: 'Abuja',
    meter_no: '782398372',
    date: 'Thurs, 12th Nov, 2024',
    time: '3:00pm',
    value: '100kwh',
    provider: 'Abuja Electricity PrePaid',
    transaction_ref: 'MDF85D24EFG40C0749BA59CB5BFB2',
    receipt_no: '348202403119053450',
    payment_type: 'Paid with card',
    utility_cost: 40000,
    vat: 500,
    service_charge: 200,
    status: 'Completed',
  },
  {
    token: '3434  4843  6523  7854  2233',
    customer_name: 'Lawal Paul',
    address: 'Lekki Phase 1, Lagos',
    meter_no: '782398372',
    date: 'Mon, 12th Mar, 2023',
    time: '11:15pm',
    value: '10.3kwh',
    provider: 'Eko Electricity PrePaid',
    transaction_ref: 'AEF85D24EFF90C0459BA59CB5BFRF',
    receipt_no: '7041202403119051840',
    payment_type: 'Paid with wallet',
    utility_cost: 10000,
    vat: 200,
    service_charge: 50,
    status: 'Completed',
  },
  {
    token: '3333  7822  4834  2067  2867',
    customer_name: 'Onyeka Ebere',
    address: 'Emene, Enugu',
    meter_no: '452398372',
    date: 'Tues, 2nd Oct, 2023',
    time: '2:30pm',
    value: '45.5kwh',
    provider: 'Enugu Electricity PrePaid',
    transaction_ref: 'ION85D24EJH90C0749BA59CB5BFB2',
    receipt_no: '7041202403119051840',
    payment_type: 'Paid with transfer',
    utility_cost: 7000,
    vat: 280,
    service_charge: 210,
    status: 'Completed',
  },
];
