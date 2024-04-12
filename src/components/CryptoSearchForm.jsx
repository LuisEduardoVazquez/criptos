import { useCryptoStore } from "../store"
import {currencies } from "../data"

function CryptoSearchForm() {

    const cryptocurrencies = useCryptoStore ((state) => state.cryptocurrencies)
    return (
      <>
        <form 
        className="form"
        
        >
            <div className="field">
                <label htmlFor="currency">Moneda:</label>
                <select 
                    name="currency" 
                    id="currency"
                >
                    <option value="">--- Seleccione ---</option>
                    |{currencies.map( currency => (
                        <option kay = {currency.code} value = {currency.code} > {currency.name} </option>
                    ))}
                </select>
            </div>

            <div className="field">
                <label htmlFor="cryptoCurrency">Cryptomoneda:</label>
                <select 
                    name="cryptoCurrency" 
                    id="cryptoCurrency"
                >
                    <option value="">--- Seleccione ---</option>
                    {cryptocurrencies.map( crypto => (
                        <option
                            key={crypto.CoinInfo.FullName}
                            value={crypto.CoinInfo.Name}
                        >{crypto.CoinInfo.FullName}</option>
                    ))}
                </select>
            </div>
            <input type="submit" value= 'Cotizar' />
        </form>
      </>
    )
  }
  
  export default CryptoSearchForm