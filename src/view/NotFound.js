import styled from 'styled-components';
import Message from '../components/UI/Message';

const Container = styled.div`
    height: 100%;
    position: relative;

    & > div {
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translateX(-50%);
    }
`

export default function NotFound(){
    return(
        <Container>
            <Message title='查無此頁'
                     description='請點擊上方連結重新導航'/>
        </Container>
    )
}