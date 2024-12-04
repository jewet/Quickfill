import TransferIcon from '../../assets/images/electricity/tabler_device-mobile.svg'
import CardIcon from '../../assets/images/electricity/tabler_credit-card.svg'
import WalletIcon from '../../assets/images/electricity/tabler_wallet.svg'
import FlutterwaveIcon from '../../assets/images/electricity/flutterwave.svg'

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
        icon: WalletIcon,
        type: 'wallet'
    },
    {
        icon: FlutterwaveIcon,
        type: 'flutterwave'
    },
]