import styled from 'styled-components';
import { useContext } from 'react';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import { divIcon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import toiletType from '../../assets/toilet_type.json';
import UserLocationMarker from './UserLocationMarker';
import { DeviceContext } from '../../services/DeviceContextProvider';

const MapWrap = styled.div`
    height: 100%;
    width: 100%;

    .leaflet-container {
        height: 100%;
        font-family: inherit;
    }

    .position-marker {
        background: #1764F21C;
        border: 1px solid #1764F212;
        border-radius: 50px;

        div {
            height: 15px;
            width: 15px;
            background: #1764F2;
            position: relative;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
        }
    }

    .toilet-marker, .position-marker div {
        border: 2px solid #fff;
        border-radius: 50px;
    }

    ${
        Object.keys(toiletType).map(type => {
            return `
                .color-${toiletType[type].color.replace('#','')}{
                    background: ${toiletType[type].color};
                }
            
            `
        })
    }
`

export function getMarkerIcon(type){
    return divIcon({
        className: `color-${toiletType[type].color.replace('#','')} toilet-marker`,
        iconSize: [24, 24]
    });
} 

export default function Map({children}){
    const device = useContext(DeviceContext);

    return(
        <MapWrap>
            <MapContainer center={[23.58, 121]} zoom={8} scrollWheelZoom={true} zoomControl={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />

                {
                    device === 'PC' ? <ZoomControl position="topleft" /> : 
                                      <ZoomControl position="bottomleft" />
                }

                <UserLocationMarker />

                {children}

            </MapContainer>
        </MapWrap>
    )
}
