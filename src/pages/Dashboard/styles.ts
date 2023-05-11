import styled from 'styled-components';

export const GridGroup = styled.div`
  display: grid;
  @media all and (min-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media all and (min-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
  }

  grid-gap: 20px;
  padding: 2%;
  width: 100%;
`;  

export const Container = styled.main`
  flex: 1;
`;

