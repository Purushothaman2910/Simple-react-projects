import React , {useId} from 'react'

function InputBoxes({
    label ,
    amount ,
    onAmountChange ,
    onCurrencyChange ,
    currencyOptions = [] ,
    selectedCurrency = "usd" ,
    amountDisable  = false ,
    currencyDisable = false ,
    className = ""
}) {

    const id = useId()
  return (
    <div className = {`bg-white rounded-lg text-sm flex ${className}`}>
        <div className="w-1/2">
            <label 
            htmlFor={id}
            className = "text-black/40 mb-2 inline-block"
            >{label}</label>
            <input 
            type="number"
            className='outline-none w-full bg-transparent py-1.5' 
            placeholder='Amount'
            disabled = {amountDisable}
            value={amount}
            id={id}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
            />
        </div>
        <div 
        className='w-1/2 flex flex-wrap justify-end text-right'
        >
            <p className='w-full text-black/40 mb-2'>Currency type</p>
            <select 
            className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
            value={selectedCurrency}
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            disabled = {currencyDisable}
            >
                {
                    currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>{currency}</option>
                    ))
                }
            </select>
        </div>
    </div>
  )
}

export default InputBoxes