import { useState } from 'react';
import styled from 'styled-components';

import Selector from '../form/Selector';

const RangeSelWrap = styled.div`
    background: #EEEEEE;
    border-radius: 10px;
    flex-grow: 1;
    margin: 0 8px;
`

const Container = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
`

const rangeList = [300, 500, 1000 ,1500, 2000];

export default function RangeSelector(){
    const [isOpen, setIsOpen] = useState(false);

    return(
        <Container>
            距離：
            <RangeSelWrap>
                <Selector id='range-selector'
                        options={rangeList}
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}/>
            </RangeSelWrap>
            公尺內
        </Container>
    )
}