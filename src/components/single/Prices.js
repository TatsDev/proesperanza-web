import React from 'react';
import styled, { css } from 'styled-components';
import { Button } from '@components/global';

const Prices = () => (
  <Form>
    <h3>COTIZACIÓN</h3>
    <div></div>
    <Button primary onClick={handleClick}>
      Generar
    </Button>
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

const Selector = styled.div`
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-justify-content: space-around;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  -webkit-align-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
`;

// const Dropdown = styled.select`
//   padding: 5px 45px 5px 10px;
//   font-size: 1.2rem;
//   line-height: 1.4rem;
//   font-weight: 500;
//   color: black;
//   border: 2px solid black;
//   height: 36px;
//   border-radius: 0;
//   appearance: none;
//   background-image: url(${icon});
//   background-repeat: no-repeat;
//   background-position: right 8px center;

//   ${({ theme, type }) => {
//     switch (type) {
//       case 'light':
//         return css`
//           background-color: ${theme.colors.white};
//           color: ${theme.colors.darkGrey};
//         `;
//       case 'dark':
//         return css`
//           background-color: ${theme.colors.darkGrey};
//           color: ${theme.colors.white};
//         `;
//       case 'default':
//         return css`
//           background-color: transparent;
//           color: ${theme.colors.darkGrey};
//         `;
//     }
//   }}
// `;

function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }
}

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
