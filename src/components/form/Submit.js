import styled from 'styled-components';

const SubmitBotton = styled.input`
    background: #355F8B;
    color: #fff;
    width: 100%;
    font-family: inherit;
    font-size: 15px;
    padding: 8px 0px;
    border: none;
    border-radius: 10px 10px 0 0;
    letter-spacing: .2em;
    cursor: pointer;

    &:hover {
        background: #3b6795;
    }

`

export default function Submit(){
    return(
        <SubmitBotton className='fw-500' type="submit" value="查詢" />
    )
}