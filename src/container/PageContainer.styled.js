import styled from "styled-components";
export const PageContentContainer = styled.div`
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 16px;
  flex: 3;
  margin-left: ${({ open }) => (open ? "350px" : "60px")};
   @media (max-width: 360px) {
    margin: 16px;
  }
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
