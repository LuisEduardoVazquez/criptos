import { useCryptoStore } from "../store"
import {currencies } from "../data"
import { useState } from "react"
import { ChangeEvent } from 'react'

 




function CryptoSearchForm() {

    const cryptocurrencies = useCryptoStore ((state) => state.cryptocurrencies)
    const [pair, setPair] = useState({
        currency: '',
        cryptocurrency: ''
    })
    const handleChange = (e) => {
        setPair({
            ...pair,
            [e.target.name] : e.target.value
        });
    }
    
    
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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