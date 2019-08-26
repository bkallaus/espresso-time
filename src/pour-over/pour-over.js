import React, { useState } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  align-items: center;
  display: flex;

  flex-wrap: wrap;
  flex-direction: row; 

  margin: 40px 16px;
  width: 100%;
`;

const StyledLabel = styled.label`
  width: 300px;
  height: 100px;
  margin: auto;
`;

function PourOver() {
  const [mililitersOfWater, setMiliLitersOfWater] = useState(1000);
  const [gramsOfGrounds, setGramsOfGrounds] = useState(60);

  const setWaterThenGrams = (e) => {
    const miliLiters = e.target.value;

    setMiliLitersOfWater(miliLiters);
    setGramsOfGrounds(0.06 * miliLiters);
  };

  const setGramsthenWater = (e) => {
    const grams = e.target.value;

    setGramsOfGrounds(grams);
    setMiliLitersOfWater(grams / 0.06);
  };

  return (
    <StyledForm>
      <StyledLabel htmlFor="ouncesOfwater">
        Water (mL)
        <input id="ouncesOfwater" value={mililitersOfWater} type="number" onInput={setWaterThenGrams} />
      </StyledLabel>
      <StyledLabel htmlFor="gramsOfGrounds">
        Grounds (g)
        <input id="gramsOfGrounds" value={gramsOfGrounds} type="number" onInput={setGramsthenWater} />
      </StyledLabel>
    </StyledForm>
  );
}

export default PourOver;
