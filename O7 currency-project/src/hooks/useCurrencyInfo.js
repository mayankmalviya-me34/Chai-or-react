import { useEffect, useState } from 'react';

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
            .catch((error) => console.error('Error fetching currency info:', error));
    }, [currency]);

    // Logging data inside useEffect to ensure it reflects the correct state
    useEffect(() => {
        console.log(data);
    }, [data]);

    return data;
}

export default useCurrencyInfo;
