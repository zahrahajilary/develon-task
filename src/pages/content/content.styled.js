import styled from "styled-components";

export const PageContentContainer = styled.div`
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  justify-content: center;
  margin: 16px;
  flex: 3;
  margin-left: ${({ open }) => (open ? "350px" : "60px")};
`;

export const BtnContainer = styled.div`
    align-self:center
`
