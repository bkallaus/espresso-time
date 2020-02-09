import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './coffee-blur.png';

const StyledContainer = styled.div`
  display: flex;
  
  align-items: center;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

const StyledCard = styled.div`
  padding: 8px;
  height: 32px;
  margin: auto
  width: 80px;
`;

const StyledBanner = styled.div`
  width: 100%;
  background-image: url(${props => props.img});
`;

function Home() {
  return (
    <>
      <StyledBanner img={logo} />
      <StyledContainer>
        <StyledCard><Link to="/pour-over">Pour Over</Link></StyledCard>
        <StyledCard><Link to="/espresso">Espresso</Link></StyledCard>
      </StyledContainer>
    </>
  );
}

export default Home;
