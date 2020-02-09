import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
    
  flex-direction: row;
  
  flex-wrap: wrap;
  margin: 16px;
`;

const StyledCard = styled.div`
  padding: 16px;
  height: 32px;
  width: 80px;
`;

function PageLayout({children}) {
  return (
    <>
      <StyledContainer>
        <StyledCard><Link to="/">Home</Link></StyledCard>
        <StyledCard><Link to="/pour-over">Pour Over</Link></StyledCard>
        <StyledCard><Link to="/espresso">Espresso</Link></StyledCard>
      </StyledContainer>
      {children}
    </>
  );
}

export default PageLayout;
