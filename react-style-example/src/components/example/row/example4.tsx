import styled from "@emotion/styled";
import React from "react";
import DummbyBox from "../../dummy-box";

function Example4() {
  <Wrapper>
    <DummbyBox />
    <DummbyBox />
    <DummbyBox />
    <DummbyBox />
    <DummbyBox />
  </Wrapper>;
}
// Frame 338
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  // align-items: center;
  // align-items: flex-end;
`;
