import React from 'react';
import styled from 'styled-components';

const Prices = () => (
  <Form>
    <h3>COTIZACIÓN</h3>
  </Form>
);

const Form = styled.div`
  margin-top: 17px;
  align-self: start;
  border: 2px solid ${(props) => props.theme.color.red.light};
  border-radius: 5px;
  border-style: outset;
  ${'' /* background-color: white; */}

  > h3 {
    color: ${(props) => props.theme.color.red.dark};
  }

  @media (max-width: ${(props) => props.theme.screen.md}) {
    justify-self: start;
  }
`;

// const Grid = styled.div`
//   display: grid;
//   padding-top: 0.2rem;
//   grid-template-columns: 1fr 1fr;
//   place-items: center;
//   grid-gap: 87px;
//   ${'' /* background-color: green; */}

//   @media (max-width: ${(props) => props.theme.screen.md}) {
//     grid-template-columns: 1fr;
//     grid-gap: 37px;
//   }
// `;

export default Prices;
