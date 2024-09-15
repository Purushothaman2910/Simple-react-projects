import React, { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrecyInfo'
import { InputBoxes } from './components/index'

const CurrencyConvertor = () => {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('usd');
  const [toCurrency, setToCurrency] = useState('inr');
  const [convertedAmount, setCOnvertedAmount] = useState(0)

  let currencyInfo = useCurrencyInfo(fromCurrency)
  const options = Object.keys(currencyInfo)
  function swap() {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
    setCOnvertedAmount(amount)
    setAmount(convertedAmount)
  }
  function convert() {
    setCOnvertedAmount(amount * currencyInfo[toCurrency])
    console.log(convertedAmount)
  }
  return (
    <>
      <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(https://images.pexels.com/photos/47344/dollar-currency-money-us-dollar-47344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)` }}>
        <div className='w-full'>
          <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
            <form onSubmit={(e) => {
              e.preventDefault()
              convert()
            }}>
              <div className='w-full mb-1'>
                <InputBoxes
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFromCurrency(currency)}
                  onAmountChange={(amount) => setAmount(amount)}
                  selectedCurrency={fromCurrency}
                />
              </div>
              <div className='relative w-full h-0.5'>
                <button
                  className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                  onClick={swap}
                >Swap</button>
              </div>
              <div className='w-full mb-1'>
                <InputBoxes
                  label="to"
                  amount={convertedAmount}
                  amountDisable = {true}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setToCurrency(currency)}
                  onAmountChange={(amount) => setAmount(amount)}
                  selectedCurrency={toCurrency}
                />
              </div>
              <button
            type='submit'
            className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
            >Convert</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default CurrencyConvertor