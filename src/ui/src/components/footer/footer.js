import React from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
  height: 100px;
  font-size: 25px;
  background-color: gray;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Footer extends React.Component {
  render() {
    return (
      <>
        <StyledH1>Footer</StyledH1>
      </>
    );
  }
}

export default Footer;
