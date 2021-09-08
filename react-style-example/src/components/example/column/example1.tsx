import styled from "@emotion/styled";
import React from "react";
import DummbyBox from "../../dummy-box";

function Example1() {
  <Wrapper>
    <DummbyBox />
    <DummbyBox />
  </Wrapper>;
}
// Frame 315
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
