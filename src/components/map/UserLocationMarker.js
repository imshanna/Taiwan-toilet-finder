import { useEffect, useState } from 'react';
import { Marker, useMap, useMapEvents } from 'react-leaflet';
import { divIcon } from 'leaflet';

const markerIcon = divIcon({
    className: 'position-marker',
    iconSize: [50, 50],
    html: `<div></div>`
});

export default function UserLocationMarker(){
    const [position, setPosition] = useState(null);
    const map = useMap();

    useEffect(() => {
        map.locate({
            watch: true
        });
    },[])

    useMapEvents({
        locationfound: (e) => { setPosition(e.latlng) },
        locationerror: () => { setPosition(null) }
    })


    return position === null ? null : (
        <Marker position={position} icon={markerIcon}></Marker>
    );
}