import TransferIcon from '../../assets/images/electricity/tabler_device-mobile.svg'
import CardIcon from '../../assets/images/electricity/tabler_credit-card.svg'
import WalletIcon from '../../assets/images/electricity/tabler_wallet.svg'
import FlutterwaveIcon from '../../assets/images/electricity/flutterwave.svg'
import MasterCard from '../../assets/images/gas/logos_mastercard.svg'
import Delivery from '../../assets/images/gas/tabler_truck-delivery.svg'
import Wallet from '../../assets/images/gas/tabler_wallet.svg'

interface PaymentProps{
    icon: any;
    type: string;
}

export const payment_type: PaymentProps[] = [
    {
        icon: TransferIcon,
        type: 'transfer'
    },
    {
        icon: CardIcon,
        type: 'card'
    },
    {
        icon: Wallet,
        type: 'wallet'
    },
    {
        icon: FlutterwaveIcon,
        type: 'flutterwave'
    },
]



export const payment_opt: PaymentProps[] = [
    {
        icon: MasterCard,
        type: '**** 4729'
    },
    {
        icon: TransferIcon,
        type: 'transfer'
    },
    {
        icon: Delivery,
        type: 'delivery'
    },
    {
        icon: Wallet,
        type: 'wallet'
    },
]