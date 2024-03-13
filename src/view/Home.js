import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import homeBg from '../assets/home-bg.jpg';
import arrowRight from '../assets/icon/arrow-right.svg';
import toiletType from '../assets/toilet_type.json';
import { FilterContext } from '../App';
import CityButton from '../components/UI/CityButton';

const Banner = styled.div`
    background-image: url(${homeBg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    min-height: 484px;
    height: 100%;

    div {
        padding: 5% 0 0 10%;
        writing-mode: vertical-rl;
        color: #fff;

        & :nth-child(1){
            text-indent: 1.5em;
        }
    }

    h1 {
        letter-spacing: .5em;
    }

    h5 {
        letter-spacing: .2em;
    }

    @media only screen and (max-width: 576px) {
        min-height: 280px;
    }
`

const Section = styled.section`
    padding: 16px 24px 24px 24px;
    background: #F5F6F6;

    .title {
        display: flex;
        align-items: center;
        margin-bottom: 16px;
    }
`

const ButtonList = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 24px;

    @media only screen and (max-width: 1366px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media only screen and (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(190px, auto));
    }
`

const cityList = [
    {name:'臺北市', dist:'信義區', en:'Taipei, Xinyi', color:'#3591C5'},
    {name:'新北市', dist:'淡水區', en:'New Taipei, Tamsui', color:'#D08181'},
    {name:'桃園市', dist:'中壢區', en:'Taoyuan, Zhongli', color:'#7FC0C5'},
    {name:'臺中市', dist:'西屯區', en:'Taichung, Xitun', color:'#5E9BAE'},
    {name:'高雄市', dist:'新興區', en:'Kaohsiung, Xinxing', color:'#52797C'},
];

const typeList = Object.keys(toiletType);

export default function Home(){
    const navigate = useNavigate();
    const {setCity, setDist, setType} = useContext(FilterContext);

    return(
        <>
            <Banner>
                <div>
                    <h1>線上查詢系統</h1>
                    <h1 className='fw-400'>台灣公共廁所</h1>
                    <h5 className='fw-300'>TAIWAN TOILET+</h5>
                </div>
            </Banner>
            
            <Section>
                <div className='title'>
                    <img src={arrowRight} alt='arrow'></img>
                    <span>快速查詢</span>
                </div>

                <ButtonList>
                    <CityButton en='Nearby'
                                color='#283C43' 
                                onClick={() => navigate('/nearby')}>
                        查看附近
                    </CityButton>

                    {cityList.map((city, i)=>
                    <CityButton key={i}
                                en={city.en} 
                                color={city.color} 
                                onClick={() => {
                                    navigate('/search');
                                    setCity(city.name);
                                    setDist(city.dist);
                                    setType(typeList);
                                }}>
                        {city.name} / {city.dist}
                    </CityButton>
                    )}
                </ButtonList>
            </Section>
        </>
    )
}