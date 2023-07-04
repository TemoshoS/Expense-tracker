import { useEffect, useState } from 'react'
const url = "https://api.exchangerate.host/latest"

const CurrencyConvert = () => {

    const [currencyOptions, setCurrencyOptions] = useState([])
    const [amount, setAmount] =useState(1)
    const [fromCurrency, setFromCurrency] = useState()
    const [toCurrency, setToCurrency] = useState()
    const [exchangeRate, setexhangeRate] = useState()
    const [showCurrency, setShowCurrency] = useState()

    console.log(currencyOptions)

    useEffect(() => {

        fetch(url).
        then(res => res.json())
        .then((data) => {
            //console.log(data)
            const firstCurrency = Object.keys(data.rates)[0];
            setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
            setFromCurrency(data.base);
            setToCurrency(firstCurrency)
            setexhangeRate(data.rates[firstCurrency])

        })

    }, [])

    useEffect(()=>{

        if(fromCurrency !=null && toCurrency !=null){

            fetch(`${url}?base${fromCurrency}&symbols=${toCurrency}`).then(res=>res.json()).then((data)=>{
                console.log(data)

                setexhangeRate(data.rates[toCurrency]);
            })


         }

        
    },[fromCurrency,toCurrency])

    let toAmount, fromAmount
   const currencyConversion=(()=>{
   fromAmount = amount;
   toAmount = amount * exchangeRate;

   setShowCurrency(toAmount)



   })

    return (
        <div className="App">
            <div>
                <h4>Currency Converter</h4>

                <div className="showCurrency">
                    <h3>{showCurrency}</h3>
                </div>
                <input type="number" placeholder="Enter amount"  onChange={(event)=>setAmount(event.target.value)}/> <br />

                <select className="selectCurrency" onChange={(event)=>setFromCurrency(event.target.value)}>

                    {currencyOptions.map((option)=>(
                        <option>{option}</option>
                        ))}
                    
                </select>

                <select className="selectCurrency" id="selectedfromcurrency" onChange={(event)=>setToCurrency(event.target.value)}>

                    {currencyOptions.map((option)=>(
                        <option>{option}</option>
                    ))}
                    
                </select>{" "}
                <br /> <br />
                <button onClick={currencyConversion}>Converter</button>
            </div>

        </div>
    )
}

export default CurrencyConvert