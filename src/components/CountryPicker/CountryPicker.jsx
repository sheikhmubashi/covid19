import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from '@material-ui/core'
import styles from './CountryPicker.module.css'
import { fetchCountries } from "../../api";


const CountryPicker = ({ handleCountryChange }) => {
    const [fatchedCountries, setFatchedCountries] = useState([]);
    useEffect(() => {
        const fatchAPI = async () => {
            setFatchedCountries(await fetchCountries());
        }
        fatchAPI()
    }, [setFatchedCountries])
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue='' onChange={(e)=>{return handleCountryChange(e.target.value)}}>
                <option value="">Global</option>
                {fatchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;