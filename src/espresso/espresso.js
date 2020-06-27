import React from 'react';
import styled from 'styled-components';
import PageLayout from '../page-layout';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  height: 100%;
`;

const StyledItem = styled.div`
    margin: 40px 16px;
`;

function Espresso() {
  return (
    <PageLayout>
      <StyledContainer>
        <StyledItem>
          16g of grind
        </StyledItem>
        <StyledItem>
          25 seconds of pull time
        </StyledItem>
        <StyledItem>
          24g of espresso
        </StyledItem>
      </StyledContainer>
    </PageLayout>
  );
}

export default Espresso;
