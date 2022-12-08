import React from 'react';
import styled from 'styled-components';

import { ChakraProvider } from '@chakra-ui/react';
import TimerButton from './component/timer-button';

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

const App = () => (
  <ChakraProvider>
    <div>
      <StyledItem>
        16g of grind
      </StyledItem>
      <StyledItem>
        25 seconds of pull time
      </StyledItem>
      <StyledItem>
        24g of espresso
      </StyledItem>
      <TimerButton />
    </div>
  </ChakraProvider>
);


export default App;
