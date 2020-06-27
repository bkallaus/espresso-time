import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './coffee-blur.png';

const StyledPage = styled.div`
  height: 100vh;
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  height: 100%;
`;

const StyledBanner = styled.div`
  height: 100%;  
  background-repeat: no-repeat;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-image: url(${props => props.img});
`;

const StyledHeading = styled.h1`
  color: white;
  padding: 16px 32px;
`;

const StyledLink = styled(Link)`
  color: white;
  border: 1px solid white;
  padding: 8px 16px;
  border-radius: 4px; 
  margin: 8px;
`;

function Home() {
  return (
    <StyledPage>
      <StyledBanner img={logo}>
        <StyledContainer>
          <StyledHeading>Espresso Time</StyledHeading>
          <div>
            <StyledLink to="/pour-over">Pour Over</StyledLink>
            <StyledLink to="/espresso">Espresso</StyledLink>
          </div>
        </StyledContainer>
      </StyledBanner>
    </StyledPage>
  );
}

export default Home;
