import axios from 'axios'
import { CryptoCurrenciesResponseSchema } from '../schema/crypto-schema'

export async function getCryptos() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const {data: {Data}} = await axios(url)
    const resul = CryptoCurrenciesResponseSchema.safeParse(Data)
    if (resul.success){
        return resul.data
    }
    
}