import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
        <div className="Container">
            <div className="mt-5">
          <ul className="nav nav-tabs">

            <li className="nav-item" role="presentation">
              <Link
                to="/home"
                className="nav-link active"
                id="home-tab"
                role="tab"
                aria-controls="home"
                aria-selected="false"
              >
                Expense tracker
              </Link>
            </li>
            <li className="nav-item" role="presentation">
              <Link
                to="/currencyconverter"
                className="nav-link"
                id="CurrencyConvert-tab"
                role="tab"
                aria-controls="CurrencyConvert"
                aria-selected="false"
              >
                Currency Converter
              </Link>
            </li>

          </ul>
        </div>

            <div>
                <h4 style={{paddingTop:'25px'}}>Currency Converter</h4>

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
                <button onClick={currencyConversion} className='addBtn'>Converter</button>
            </div>

        </div>
    )
}

export default CurrencyConvert