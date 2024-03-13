import { useState, useEffect } from 'react';
import { getBoundsOfDistance } from 'geolib';

export default function useGetData(range, type, position){
    const [response, setResponse] = useState(null);

    useEffect(() => {
        if(position){
            const bounds = getBoundsOfDistance(position, range);
            const abortController = new AbortController();
            const signal = abortController.signal;

            fetch('/api/toilet',{
                method:'POST',
                signal: signal,
                body: JSON.stringify({
                  src: 'nearby',
                  filter: { lat:[bounds[0].latitude, bounds[1].latitude], 
                            lng:[bounds[0].longitude, bounds[1].longitude], 
                            type:type.join() }
                })
              })
                .then((response) => response.json())
                .then((data) => {
                    setResponse(data);
                })
                .catch((err) => {
                    console.log(`Error: ${err}`)
                })
            
            return () => { abortController.abort() } 
        }else{
            setResponse(null);
        }
    }, [range, type]);

    return response;
}