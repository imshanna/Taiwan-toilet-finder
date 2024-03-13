import styled from 'styled-components';

const BoxWrap = styled.div`
    display: inline-block;
    white-space: nowrap;

    input {
        display: none;
    }

    label {
        position: relative;
        display: flex;
        align-items: center;
        gap: 4px;
        cursor: pointer;
        padding: 6px 10px;
        border: solid 1px #EEEEEE;
        border-radius: 10px;
    }

    .checkmark {
        height: 17px;
        width: 17px;
        background-color: #EEEEEE;
        border-radius: 5px;
    }

    .checkmark::after {
        content: "";
        position: absolute;
        left: 18px;
        top: 7px;
        width: 5px;
        height: 10px;
        border: solid #707070;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
        display: none;
    }

    &:hover .checkmark {
        background-color: #e0e0e0;
    }

    &:hover label {
        border: solid 1px #e0e0e0;
    }

    input:checked + label .checkmark::after {
        display: block;
    }

    input:checked ~ label {
        border: solid 1px #707070;
    }
`

export default function Checkbox({children}){
    return(
        <BoxWrap>
            <input type='checkbox' id={children} name='type' value={children} defaultChecked></input>
            <label htmlFor={children}>
                <span className='checkmark'></span>
                {children}
            </label>
        </BoxWrap>
    )
}