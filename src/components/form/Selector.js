import { useEffect, useState } from 'react';
import styled from 'styled-components';

import arrowDown from '../../assets/icon/arrow-down.svg';

const Dropdown = styled.div`
    position: relative;
    width: 100%;
    cursor: pointer;
`
const Button = styled.div`
    padding: 8px 16px;
    position: relative;

    &::after {
        content: '';
        background-image: url(${arrowDown});
        position: absolute;
        top: 40%;
        right: 16px;
        height: 6px;
        width: 9px;
        transition: .3s;
        transform: ${({$isOpen})=> $isOpen ? 'rotate(180deg)' : 'rotate(0)'};
    }
`
const DropdownMenu = styled.ul`
    position: absolute;
    z-index: 1;
    top: calc(100% + 2px);
    width: 100%;
    max-height: 350px;
    overflow-y: auto;
    background: #fff;
    border: 1px solid #DEE2E6;
    border-radius: 8px;
    padding: 4px 0px;

    li {
        padding: 4px 16px;
    }

    li:hover {
        background: #F8F9FA;
    }
`

export default function Selector({id, options, onChange, isOpen, setIsOpen, multiSelHandler}){
    const [selected, setSelected] = useState(options[0]);

    useEffect(()=>{
        document.addEventListener("click", docClick);

        return ()=>{
            document.removeEventListener("click", docClick)
        }
    },[])

    useEffect(() => {
        if(onChange){
            onChange(selected);
        }
    }, [selected])

    useEffect(() => {
        setSelected(options[0])
    }, [options])

    function docClick(){
        setIsOpen(false);
    }

    function dropdownClick(e){
        e.stopPropagation();
        multiSelHandler ? multiSelHandler() : setIsOpen(!isOpen);
    }

    function menuClick(e){
        if(e.target.tagName.toLowerCase() === "li"){
            setSelected(e.target.innerText);
        }
    }

    return(
        <Dropdown onClick={dropdownClick}>
            <Button id={id} $isOpen={isOpen}>{selected}</Button>

            {isOpen && 
            <DropdownMenu onClick={menuClick}>
                {options.map((value)=>(
                    <li key={value}>{value}</li>
                ))}
            </DropdownMenu>}
        </Dropdown>
    )
}