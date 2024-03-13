import styled from 'styled-components';
import crossMark from '../../assets/icon/cross-mark.svg';

const MessageBox = styled.div`
    text-align: center;

    div {
        margin: 64px auto 16px auto;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #D08181;
        height: 65px;
        width: 65px;
        border-radius: 50px;
    }

    p {
        margin-top: 4px;
    }

    @media only screen and (max-width: 768px) {
        div {
            margin: 32px auto 16px auto;
        }
    }
`

export default function Message({title, description}){
    return(
        <MessageBox>
            <div>
                <img src={crossMark} alt='cross mark'></img>
            </div>
            <p className='fw-700'>{title}</p>
            <p>{description}</p>
        </MessageBox>
    )
}