import styled from "@emotion/styled";

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  &:after {
  content: '';
  flex-grow: 99999999;
  }
`;

export const ImageWrapper = styled.div`
  margin: 2px;
  //background-color: white;
  position: relative;
  cursor: pointer ;
`

export const Block = styled.i`
  display: block;
`

export const Image = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  vertical-align: bottom;
`
