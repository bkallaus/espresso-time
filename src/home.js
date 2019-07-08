import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  
  align-items: center;
  flex-direction: row;
  justify-content: center;
  
  margin: 16px;
  height: 100vh;
  width: 100%;
`;

const StyledCard  = styled.div`
  padding: 12px;
  height: 100px;
  width: 80px;
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
