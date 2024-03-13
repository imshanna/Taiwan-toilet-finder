import styled from 'styled-components';
import arrowDown from '../../assets/icon/arrow-down.svg'

const SwitchButton = styled.div`
    width: 100%;
    padding: 8px 0px;
    color: #334155;
    background: #E0E0E0;
    font-size: 15px;
    text-align: center;
    border-radius: 10px 10px 0 0;
    letter-spacing: .2em;
    cursor: pointer;
    
    &:hover {
        background: #e5e5e5;
    }

    img {
        width: 1em;
        margin-left: 4px;
        transition: .3s;
        transform: ${({$isOpen})=> $isOpen ? 'translateY(-2px) rotate(180deg)' : 'rotate(0)'};
    }

`

export default function Switch({openState}){
    const { isOpen, setIsOpen } = openState;

    return(
        <SwitchButton className='fw-500' $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
            展開清單
            <img src={arrowDown} alt='open list'></img>
        </SwitchButton>
    )
}