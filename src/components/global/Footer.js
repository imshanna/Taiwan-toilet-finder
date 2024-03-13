import styled from 'styled-components';

const StyledFooter = styled.footer`
  padding: 16px;
  color: #FFFFFF;
  background: #444444;
  text-align: center;
  font-size: 12px;

  @media only screen and (max-width: 768px) {
    padding: 12px;
  }
`

export default function Footer() {
    return (
        <StyledFooter>
            Copyright © 2024 台灣公廁 e 點通 All rights reserved.
        </StyledFooter>
    );
  }