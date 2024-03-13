import { createContext, useEffect, useState } from 'react';

export const DeviceContext = createContext('PC');

export default function DeviceContextProvider({children}) {
    const [device, setDevice] = useState('PC');

    function handleResize(){
        if(window.innerWidth >= 768){
            setDevice('PC');
        }
        else if(window.innerWidth >= 576){
            setDevice('TABLET');
        }else{
            setDevice('MOBILE');
        }
    }

    useEffect(()=>{
        window.addEventListener('resize', handleResize);
        handleResize();
        
        return(()=>{
            window.removeEventListener('resize', handleResize);
        })
    },[]);

    return (
        <DeviceContext.Provider value={device}>
            {children}
        </DeviceContext.Provider>
    )
}