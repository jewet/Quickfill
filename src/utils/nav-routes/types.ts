import {ElectricityProps} from '../sample-data/electricity';
import {GasProps} from '../sample-data/gas';
import {DetailsProps, QuickActionProps} from '../sample-data/home';
import {OrdersProps} from '../sample-data/orders';
import {ProfileProps} from '../sample-data/profile';

export type RootStackParamList = {
  splash: undefined;
  'first-onboarding': undefined;
  'second-onboarding': undefined;
  'third-onboarding': undefined;
  'fourth-onboarding': undefined;
  'fifth-onboarding': undefined;
  'sixth-onboarding': undefined;
  'forgot-password': undefined;
  'reset-password': undefined;
  'email-verification': undefined;
  'otp-verification': undefined;
  'electricity-provider': undefined;
  'order-details': {orderDetails: OrdersProps};
  'deliver-details': any;
  'gas-order-details': {
    orderDetails?: any;
    selectedCylinder: any;
    directory?: string;
    dieselPrice?: number;
    litres?: number;
  };
  'items-page': any;
  'item-details': any;
  login: undefined;
  'auth-login': undefined;
  signup: undefined;
  home: undefined;
  accessories: undefined;
  orders: undefined;
  profile: undefined;
  gas: any;
  petroleum: any;
  diesel: any;
  cart: undefined;
  complaints: undefined;
  referral: any;
  delivery: {orderDetails: OrdersProps};
  'user-wallet': any;
  'wallet-history': any;
  checkout: any;
  'user-details': any;
  favourite: any;
  'user-address': any;
  'user-payment': any;
  'item-suggestion': any;
  'gas-checkout': {
    orderDetails: any;
    selectedCylinder?: GasProps;
    directory?: string;
    dieselPrice?: number;
    litres?: number;
  };
  help: any;
  contact: any;
  'diesel-details': {diesielDetails: DetailsProps};
  'gas-details': {orderDetails: any};
  'change-address': any;
  'delivery-instructions': any;
  'electricity-purchase-summary': {
    selectedProvider: any;
    amount: string;
    meterNumber: string;
    meterName: string;
    address: string;
  };
  ordersDetails?: OrdersProps;
  'default-card': {
    result: 'successful' | 'unsuccessful';
    ordersDetails?: OrdersProps;
  };
  'report-result': {
    orderDetails: OrdersProps;
    result: 'successful' | 'unsuccessful';
    target: 'Delivery Rep' | 'vendor';
  };
  chat: {orderDetails: OrdersProps; target: 'Delivery Rep' | 'vendor'};
  'profile-details': {orderDetails: any; target: 'Delivery Rep' | 'vendor'};
  report: {orderDetails: OrdersProps; target: 'Delivery Rep' | 'vendor'};
  'update-form': {
    profileDetails: ProfileProps;
    target: 'name' | 'username' | 'birthday' | 'email' | 'phone number';
  };
  'help-options': {
    profileDetails: ProfileProps;
    target: 'faq' | 'user-policy' | 'rating' | 'share';
  };
  'payment-result': {
    result: 'successful' | 'unsuccessful';
    directory?: string;
    orderDetails?: any;
    selectedCylinder?: any;
    dieselPrice?: number;
    litres?: number;
    ordersDetails?: OrdersProps;
  };
  transfer: {
    amount: number;
    directory?: string;
    orderDetails?: DetailsProps;
    selectedCylinder?: GasProps;
    dieselPrice?: number;
    litres?: number;
    ordersDetails?: OrdersProps;
  };
  card: {amount: number; directory?: string};
  electricity: any;
  'acct-deleted': undefined;
  'electricity-history': undefined;
  'electricity-history-details': any;
  Main: undefined;
  settings: undefined;
};
