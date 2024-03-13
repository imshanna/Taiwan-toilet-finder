import { useContext, useState } from 'react';
import styled from 'styled-components';

import Map from '../components/map/index';
import SearchToiletMarker from '../components/map/SearchToiletMarker';
import SearchForm from '../components/layout/SearchForm';
import DataList from '../components/layout/DataList';
import StatusBar from '../components/UI/StatusBar';

import { FilterContext } from '../App';
import DataContextProvider from '../services/DataContextProvider';
import useGetData from '../services/useGetData';


const Main = styled.main`
    display: flex;
    height: 100%;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`

const Panel = styled.section`
    position: relative;
    z-index: 998;
    width: min(40%, 400px);
    flex-shrink: 0;
    background: #fff;
    box-shadow: 5px 0px 10px #00000026;

    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`

export default function Search(){
    const { city, dist, type } = useContext(FilterContext);
    const [selectedData, setSelectedData] = useState(null);
    const [ isOpen, setIsOpen ] = useState(false); 
    const res = useGetData();

    return(
        <>
            <StatusBar>
                {city ? city + '／' + dist + '／' + type.join('、') : '尚未查詢'}
            </StatusBar>

            <DataContextProvider value={{data:res}}>
                <Main>
                    <Panel>
                        <SearchForm openState={{isOpen:isOpen, setIsOpen:setIsOpen}}
                                    setSelectedData={setSelectedData} />
                        <DataList selectedData={selectedData} 
                                  setSelectedData={setSelectedData}
                                  openState={{isOpen:isOpen, setIsOpen:setIsOpen}} />
                    </Panel>

                    <Map>
                        <SearchToiletMarker openState={{isOpen:isOpen, setIsOpen:setIsOpen}}
                                            selectedData={selectedData}
                                            setSelectedData={setSelectedData} />   
                    </Map>
                </Main>
            </DataContextProvider>
        </>
    )
}