import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  
  align-items: center;
  flex-direction: row;
  justify-content: center;
  
  flex-wrap: wrap;
  margin: 16px;
`;

const StyledCard = styled.div`
  padding: 8px;
  height: 80px;
  width: 250px;
`;

function Home() {
  return (
    <StyledContainer>
      <StyledCard><Link to="/pour-over">Pour Over</Link></StyledCard>
      <StyledCard><Link to="/espresso">Espresso</Link></StyledCard>
    </StyledContainer>
  );
}

export default Home;
