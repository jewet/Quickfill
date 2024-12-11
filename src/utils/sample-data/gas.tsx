import FirstGas from '../../assets/images/gas/3kg.svg'
import SecondGas from '../../assets/images/gas/6kg.svg'
import ThirdGas from '../../assets/images/gas/12kg.svg'
import FourthGas from '../../assets/images/gas/25kg.svg'


export interface GasProps{
    img: any;
    kg: string;
    amount: number;
}

export const gas_data: GasProps[] = [
    {
        img: FirstGas,
        kg: '3',
        amount: 4500
    },
    {
        img: SecondGas,
        kg: '6',
        amount: 9000
    },
    {
        img: ThirdGas,
        kg: '12',
        amount: 18000
    },
    {
        img: FourthGas,
        kg: '25',
        amount: 36000
    },
]