import styled from 'styled-components';

const Button = styled.div`
    padding: 48px 0;
    cursor: pointer;
    color: ${({color}) => color};
    background: #fff;
    border-radius: 10px;
    box-shadow: 0px 5px 10px 2px #0000000D;
    text-align: center;

    h3 {
        margin-top: 4px;
    }
`

export default function CityButton({children, en, color, onClick}){
    return(
        <Button onClick={onClick} color={color}>
            <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" height="50" width="50">
                <rect fill="none" height="256" width="256" />
                <path d="M64,112V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8v72" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                <line fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" x1="96" x2="112" y1="64" y2="64" />
                <path d="M216,112a88,88,0,0,1-176,0Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                <path d="M93.6,193l-4.3,29.9a8,8,0,0,0,7.9,9.1h61.6a8,8,0,0,0,7.9-9.1L162.4,193" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
            </svg>

            <h3>{children}</h3>
            <h6 className='fw-400'>{en}</h6>
        </Button>
    )
}