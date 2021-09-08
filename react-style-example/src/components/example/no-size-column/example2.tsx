import styled from "@emotion/styled";
import React from "react";
import DummbyBox from "../../dummy-box";

function Example2() {
  <Wrapper>
    <DummbyBox />
    <DummbyBox />
    <DummbyBox />
    <DummbyBox />
    <DummbyBox />
  </Wrapper>;
}
// Frame 343
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  align-items: center;
`;
