import React from 'react';
import styled from 'styled-components';
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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

function handleClick() {
  console.log('The link was clicked.');
}
export default Prices;
