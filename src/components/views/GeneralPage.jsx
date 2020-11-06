import React, { useState, useEffect } from 'react'
import Papa from 'papaparse';

const ProductPage = (props) => {
    const [data, setData] = useState([])
    useEffect(async () => {
        const getCsvData = async () => {
            let csvData = await fetchCsv()

            Papa.parse(csvData, {
                complete: () => setData(csvData)
            });
        }

        await getCsvData()
    })

    const fetchCsv = async () => {
        return fetch('data/water_foorprint_water_user_in_farms.csv').then(function (response) {
            let reader = response.body.getReader();
            let decoder = new TextDecoder('utf-8');

            return reader.read().then(function (result) {
                return decoder.decode(result.value);
            });
        });
    }


    return (
        <div>
            <p>General info view</p>
            <img src='./sausage.png' />
            <p>{data}</p>
        </div>
    )
}

export default ProductPage