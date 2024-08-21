import React from "react";
import styled, { css } from 'styled-components';
import { Button, ButtonStyle2, ButtonStyle3 } from "./components/Buttons";
import StyledPropsBtn from "./components/StyledPropsBtn";

const One = css`
  color: red;
`;

const Two = css`
  border: 1px solid black;
`;

const Three = styled.div`
  ${One}
  ${Two}
`

const App = () => {
  return (
    <>
      <StyledPropsBtn />
      <Button>btn1</Button>
      <ButtonStyle2>btn2</ButtonStyle2>
      <ButtonStyle3>btn3</ButtonStyle3>
      <Three>Lorem ipsum dolor</Three>
    </>
  );
};

export default App;