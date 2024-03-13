import styled from 'styled-components';
import { useContext } from 'react';

import ListItem from '../UI/ListItem';
import Message from '../UI/Message';
import DataInfo from './DataInfo';
import { DataContext } from '../../services/DataContextProvider';

const ListContainer = styled.ul`
    padding: 0px 16px;
    height: calc(100vh - 340px);
    overflow-y: auto;
    background: #fff;

    @media only screen and (max-width: 768px) {
        position: absolute;
        top: 100%;
        width: 100%;
        height: ${({$isOpen}) => $isOpen ? '200px' : '0px'};
        transition: 0.3s;
    }
`

export default function DataList({selectedData, setSelectedData, nullMsg, openState}){
    const { data } = useContext(DataContext);
    const { isOpen } = openState;

    if(!data){
        if(nullMsg){
            return(
                <ListContainer $isOpen={isOpen}>
                    <Message title={nullMsg[0]}
                             description={nullMsg[1]} />
                </ListContainer>
            )
        }

        return null;
    }else if(data.length === 0){
        return(
            <ListContainer $isOpen={isOpen}>
                <Message title='查無資料'
                         description='嘗試擴大查詢範圍並重新送出' />
            </ListContainer>
        )
    }else{
        return(
            <ListContainer $isOpen={isOpen}>
                {   
                    selectedData ? (
                        <DataInfo selectedData={selectedData}
                                  setSelectedData={setSelectedData}/>
                    ) : (
                        data.map(item => (
                            <ListItem key={item.number} 
                                    type={item.type} 
                                    name={item.name}
                                    onClick={() => setSelectedData(item)}/>
                        ))
                    )
                }
            </ListContainer>        
        )
    }
}