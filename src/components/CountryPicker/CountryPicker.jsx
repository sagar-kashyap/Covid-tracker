import React,{useState,useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {fetchCountries} from '../../api/api.index'


const CountryPicker=({handleCountryChange})=>{
    const [fetchedCountries, setFetchedCountries]=useState([]);
    useEffect(()=>{
        const fetchAPI=async()=>{
            setFetchedCountries(await fetchCountries());
            
        }
        fetchAPI();
    },[setFetchedCountries]);
    console.log(fetchedCountries)
return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.targer.value)}>
                <option value="global">Global</option>
                {fetchedCountries.map((country,i)=><option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
        
    )
}

export default CountryPicker;