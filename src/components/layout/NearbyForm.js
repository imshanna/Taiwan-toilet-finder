import styled from 'styled-components';
import { useEffect, useContext } from 'react';

import Submit from '../form/Submit';
import Switch from '../form/Switch';
import RangeSelector from './RangeSelector';
import TypeCheckbox from './TypeCheckbox';
import { DeviceContext } from '../../services/DeviceContextProvider';
import toiletType from '../../assets/toilet_type.json';

const FormContainer = styled.div`
    padding: 16px 16px 12px 16px;
`

const ButtonWrap = styled.div`
    display: flex;
`

export default function NearbyForm({setFilter, setSelectedData, openState}){
    const device = useContext(DeviceContext);
    const { isOpen, setIsOpen } = openState;

    useEffect(() => {
        setFilter({range:300, type:Object.keys(toiletType)});
    },[])

    function handleSubmit(e){
        e.preventDefault();

        const typeCheckbox = document.getElementsByName('type');
        const type = [];

        typeCheckbox.forEach(option => {
            if(option.checked){
                type.push(option.value);
            }
        })

        if(!type[0]){
            alert('請選擇至少一種廁所類型！');
        }else{
            const range = document.getElementById('range-selector').innerHTML;
            setFilter({range:range, type:type});
            setSelectedData(null);
            if(!isOpen) { setIsOpen(true) }
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <FormContainer>
                <RangeSelector />
                <TypeCheckbox />
            </FormContainer>
        
            <ButtonWrap>
                { device === 'PC' ? null : <Switch  openState={openState}/> }
                <Submit />
            </ButtonWrap>
        </form>
    )
}