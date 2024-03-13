import styled from 'styled-components';
import { useState } from 'react';

import taiwanCity from '../../assets/taiwan_city.json';
import Selector from '../form/Selector';

const AreaSelWrap = styled.div`
    background: #EEEEEE;
    border-radius: 10px;
    margin-bottom: 8px;
    display: flex;
`

const cityList = Object.keys(taiwanCity);

export default function AreaSelector(){
    const [distList, setDistList] = useState([]);
    const [cityOpen, setCityOpen] = useState(false);
    const [distOpen, setDistOpen] = useState(false);

    function handleCityChange(city){
        setDistList(taiwanCity[city]);
    }

    return(
        <AreaSelWrap>
            <Selector id='city-selector'
                      options={cityList}
                      onChange={handleCityChange}
                      isOpen={cityOpen}
                      setIsOpen={setCityOpen}
                      multiSelHandler={() => {setCityOpen(!cityOpen);
                                              setDistOpen(false)}}
            />

            <div style={{height:'16px', width: '2px', background: '#bdc4ca', marginTop: '10px'}}></div>
            
            <Selector id='dist-selector'
                      options={distList}
                      isOpen={distOpen}
                      setIsOpen={setDistOpen}
                      multiSelHandler={() => {setDistOpen(!distOpen);
                                              setCityOpen(false)}}
            />
        </AreaSelWrap>
    )
}