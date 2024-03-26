function CryptoSearchForm() {
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
                </select>
            </div>

            <div className="field">
                <label htmlFor="cryptoCurrency">Cryptomoneda:</label>
                <select 
                    name="cryptoCurrency" 
                    id="cryptoCurrency"
                >
                    <option value="">--- Seleccione ---</option>
                </select>
            </div>
            <input type="submit" value= 'Cotizar' />
        </form>
      </>
    )
  }
  
  export default CryptoSearchForm