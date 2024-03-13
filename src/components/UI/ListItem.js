import styled from 'styled-components';
import toiletType from '../../assets/toilet_type.json';

const Item = styled.li`
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 12px 0;
    border-bottom: solid 1px #E7E7E7;
    cursor: pointer;

    div {
        background: ${({color}) => color};
        color: #fff;
        padding: 4px 12px;
        border-radius: 10px;
        flex: 0 0 90px;
        text-align-last: justify;
    }

    p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`

export default function ListItem({type, name, onClick}){
    const label = toiletType[type];
    return(
        <Item color={label.color} onClick={onClick}>
            <div>{label.text}</div>
            <p>{name}</p>
        </Item>
    )
}