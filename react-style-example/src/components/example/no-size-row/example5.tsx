import styled from "@emotion/styled";
import React from "react";
import DummbyBox from "../../dummy-box";

function Example5() {
  <Wrapper>
    <DummbyBox />
    <DummbyBox />
    <DummbyBox />
    <DummbyBox />
    <DummbyBox />
  </Wrapper>;
}
// Frame 339 ~ 341
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: flex-start;
  // align-self: center;
  // align-self: flex-end;
`;
