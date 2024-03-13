import { Marker, useMap } from 'react-leaflet';
import { useEffect, useContext } from 'react';
import { getBounds } from 'geolib';

import { getMarkerIcon } from './index';
import { DataContext } from '../../services/DataContextProvider';

export default function SearchToiletMarker({selectedData, setSelectedData, openState}){
    const { data } = useContext(DataContext);
    const { isOpen, setIsOpen } = openState;
    const map = useMap();

    useEffect(() => {
        if(selectedData){
            map.flyTo([selectedData.latitude, selectedData.longitude], 18);
        }
    },[selectedData])

    useEffect(() => {
        if(data && data.length !== 0){
            const b = getBounds(data);
            map.flyToBounds([[b.minLat, b.minLng], [b.maxLat, b.maxLng]]);
        }
    }, [data])

    return (
        <>
            {
                data && 
                data.map(item => (
                    <Marker key={item.number} 
                            position={[item.latitude, item.longitude]} 
                            icon={getMarkerIcon(item.type)}
                            eventHandlers={{
                                click: () => {
                                    setSelectedData(item);
                                    if(!isOpen) { setIsOpen(true) }
                                }
                            }} />
                ))
            }
        </>
    ) ;
}