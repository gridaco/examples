import styled from "@emotion/styled";
import React from "react";
import DummbyBox from "../../dummy-box";

function Example3() {
  <Wrapper>
    <DummbyBox />
    <DummbyBox />
    <DummbyBox />
    <DummbyBox />
    <DummbyBox />
  </Wrapper>;
}
// Frame 344 ~ 346
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  // align-items: center;
  // align-items: flex-end;
`;
