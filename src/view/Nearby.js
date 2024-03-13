import styled from 'styled-components';
import { useState } from 'react';

import StatusBar from '../components/UI/StatusBar';
import Map from '../components/map/index';
import NearbyToiletMarker from '../components/map/NearbyToiletMarker';
import NearbyForm from '../components/layout/NearbyForm';
import DataList from '../components/layout/DataList';
import DataContextProvider from '../services/DataContextProvider';

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

export default function Nearby(){
    const [filter, setFilter] = useState({range:null, type:null});
    const [data, setData] = useState(null);
    const [selectedData, setSelectedData] = useState(null);
    const [ isOpen, setIsOpen ] = useState(false); 

    return(
        <>
            <StatusBar>
                {!data ? `查無資料` : `方圓 ${filter.range} 公尺內／${filter.type.join('、')}`}
            </StatusBar>

            <DataContextProvider value={{data, setData}}>
                <Main>
                    <Panel>
                        <NearbyForm setFilter={setFilter}
                                    setSelectedData={setSelectedData}
                                    openState={{isOpen:isOpen, setIsOpen:setIsOpen}} />
                        <DataList selectedData={selectedData}
                                  setSelectedData={setSelectedData}
                                  openState={{isOpen:isOpen, setIsOpen:setIsOpen}}
                                  nullMsg={['無法取得您的定位！', '請允許存取位置資訊或者重新整理']} />
                    </Panel>

                    <Map>
                        <NearbyToiletMarker filter={filter}
                                            openState={{isOpen:isOpen, setIsOpen:setIsOpen}}
                                            selectedData={selectedData}
                                            setSelectedData={setSelectedData} />
                    </Map>
                </Main>
            </DataContextProvider>
        </>
    )
}