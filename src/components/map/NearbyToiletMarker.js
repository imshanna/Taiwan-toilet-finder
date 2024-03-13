import { useEffect, useState, useContext } from 'react';
import { Marker, useMap, useMapEvents } from 'react-leaflet';
import { getBounds } from 'geolib';

import { DataContext } from '../../services/DataContextProvider';
import useGetNearbyData from '../../services/useGetNearbyData';
import { getMarkerIcon } from './index';

export default function NearbyToiletMarker({filter, selectedData, setSelectedData, openState}){
    const [position, setPosition] = useState(null);
    const { setData } = useContext(DataContext);
    const res = useGetNearbyData(filter.range, filter.type, position);
    const map = useMap();
    
    const { isOpen, setIsOpen } = openState;

    useEffect(() => {
        if(selectedData){
            map.flyTo([selectedData.latitude, selectedData.longitude], 18);
        }
    },[selectedData])

    useEffect(() => {
        if(res && res.length !== 0){
            const b = getBounds(res);
            map.flyToBounds([[b.minLat, b.minLng], [b.maxLat, b.maxLng]]);
        }
        setData(res); 
    }, [res]);

    useMapEvents({
        locationfound: (e) => { setPosition(e.latlng) },
        locationerror: (e) => { 
            setPosition(null);
            console.log('定位失敗 ' + e.message);
        }
    });

    return (
        <>
            {
                res && 
                res.map(item => (
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