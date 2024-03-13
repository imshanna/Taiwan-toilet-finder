import styled from 'styled-components';
import { useContext } from 'react';

import TypeCheckbox from './TypeCheckbox';
import AreaSelector from './AreaSelector';
import Submit from '../form/Submit';
import Switch from '../form/Switch';
import { FilterContext } from '../../App';
import { DeviceContext } from '../../services/DeviceContextProvider';

const FormContainer = styled.div`
    padding: 16px 16px 12px 16px;
`

const ButtonWrap = styled.div`
    display: flex;
`

export default function SearchForm({setSelectedData, openState}){
    const { setCity, setDist, setType } = useContext(FilterContext);
    const device = useContext(DeviceContext);
    const { isOpen, setIsOpen } = openState;

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
            setCity(document.getElementById('city-selector').innerHTML);
            setDist(document.getElementById('dist-selector').innerHTML);
            setType(type);
            setSelectedData(null);
            if(!isOpen) { setIsOpen(true) }
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <FormContainer>
                <AreaSelector />
                <TypeCheckbox />
            </FormContainer>

            <ButtonWrap>
                { device === 'PC' ? null : <Switch  openState={openState}/> }
                <Submit />
            </ButtonWrap>
        </form>
    )
}