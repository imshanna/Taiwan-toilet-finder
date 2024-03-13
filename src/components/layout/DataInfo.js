import styled from 'styled-components';
import arrowLeft from '../../assets/icon/arrow-left.svg';

const ReturnButton = styled.div`
    display: flex;
    gap: 1em;
    cursor: pointer;
    margin: 12px 0;
    font-size: 12px;
`

const InfoTable = styled.table`
    width: 100%;

    td, th {
        padding: 1em 0;
        border-bottom: 1px solid #DEE2E6;
    }

    th {
        width: 25%;
        text-align: start;
        white-space: nowrap;
    }
`

export default function DataInfo({selectedData,setSelectedData}){
    return(
        <>  
            <ReturnButton onClick={() => setSelectedData(null)}>
                <img src={arrowLeft} alt='return button'></img>
                <p>返回清單</p>
            </ReturnButton>

            <InfoTable>
                <tbody>
                    <tr>
                        <th>類型</th>
                        <td>{selectedData.type}</td>
                    </tr>
                    <tr>
                        <th>名稱</th>
                        <td>{selectedData.name}</td>
                    </tr>
                    <tr>
                        <th>地址</th>
                        <td>{selectedData.address}</td>
                    </tr>
                    <tr>
                        <th>類別</th>
                        <td>{selectedData.type2}</td>
                    </tr>
                    <tr>
                        <th>主管機關</th>
                        <td>{selectedData.administration}</td>
                    </tr>
                    <tr>
                        <th>等級</th>
                        <td>{selectedData.grade}</td>
                    </tr>
                </tbody>
            </InfoTable>
        </>
    )
}