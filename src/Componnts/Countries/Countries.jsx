import { useEffect, useState } from "react";
import Country from "../Country/Country";
import '../Countries/countries.css'

export default function Countries (){
    const [countries, setCountries] = useState([])
    console.log(countries);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        

        <div className="box">
            <h3>Countries:{countries.length}</h3>
            {
                countries.map(country => <Country key={countries.ccad} country = {country}></Country>)
            }
        </div>
       
    );
};
