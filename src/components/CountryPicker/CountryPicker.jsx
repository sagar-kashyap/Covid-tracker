import React,{useState,useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';

const CountryPicker=()=>{
return(
        <FormControl>
            <NativeSelect className={styles.formControl}>
                <option value="global">Global</option>
            </NativeSelect>
        </FormControl>
        
    )
}

export default CountryPicker;