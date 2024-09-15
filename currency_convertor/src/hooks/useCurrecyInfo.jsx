import React, { useCallback, useEffect, useState } from 'react'

function useCurrecyInfo(
  currency
) {
  let [data , setData] = useState({})
  
  let getCurrencyInfo = useCallback(()=>{
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    .then((res)=>res.json())
    .then((res)=> setData(res[currency]))
    console.log(data);    
  } , [currency])

  useEffect(()=>{ 
    getCurrencyInfo();
  }, [currency])

  return data
}

export default useCurrecyInfo
