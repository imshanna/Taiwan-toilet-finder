import styled from 'styled-components';
import toiletType from '../../assets/toilet_type.json';
import Checkbox from '../form/Checkbox';

const CheckboxGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 4px;
    row-gap: 8px;

    div {
        flex-grow: 1;
    }
`

const toiletOptions = Object.keys(toiletType);

export default function TypeCheckbox(){
    return(
        <CheckboxGroup>
            {toiletOptions.map((toilet)=>
                <Checkbox key={toilet}>{toilet}</Checkbox>
            )}
        </CheckboxGroup>
    )
}