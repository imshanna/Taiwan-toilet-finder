import { useState, useEffect, useContext} from 'react';
import { FilterContext } from '../App';

// API 鄉鎮市區欄位若為 2 個字，中間會有一個全型空格
function formatDistName(distName) {
    if (distName.length === 2) {
        let rst = distName[0] + '　' + distName[1];
        return encodeURIComponent(rst);
    }
    return distName;
}

export default function useGetData(){
    const [response, setResponse] = useState(null);
    const { city, dist, type } = useContext(FilterContext);

    useEffect(() => {
        if(city){
            const abortController = new AbortController();
            const signal = abortController.signal;

            fetch('/api/toilet',{
                method:'POST',
                signal: signal,
                body: JSON.stringify({
                  src: 'search',
                  filter: { city:city, dist:formatDistName(dist), type:type.join() }
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
        }
    }, [city, dist, type]); 

    return response;
}