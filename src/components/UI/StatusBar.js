import styled from 'styled-components';

const Bar = styled.div`
    position: relative;
    z-index: 999;
    padding: 12px 4%;
    font-size: 12px;
    background: #F8F8F8;
`

export default function StatusBar({children}){
    return(
        <Bar>
            目前顯示範圍：{ children }
        </Bar>
    )
}