import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  ${'' /* background: pink; */}

  @media (min-width: ${(props) => props.theme.screen.xs}) {
    max-width: 540px;
  }

  @media (min-width: ${(props) => props.theme.screen.sm}) {
    max-width: 720px;
  }

  @media (min-width: ${(props) => props.theme.screen.md}) {
    max-width: 960px;
  }

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    max-width: 1200px;
  }

  ${(props) =>
    props.fluid &&
    `
    max-width: 1200px !important;
  `};
`;

export const Section = styled.section`
  padding: 4.7rem 0;
  overflow: hidden;
  ${'' /* background-color: yellow; */}

  @media (max-width: ${(props) => props.theme.screen.md}) {
    padding: 27px 0;
  }

  ${(props) =>
    props.accent &&
    `background-color: ${
      props.accent === 'secondary'
        ? props.theme.color.white.dark
        : props.theme.color.primary
    }`};
`;

export const Button = styled.button`
  display: inline-block;
  text-align: center;
  text-transform: uppercase;
  font-size: 20px;
  letter-spacing: 3px;
  padding: 1rem;
  width: 10rem;
  margin: 0.5rem 1rem;
  transition-duration: 0.4s;
  overflow: hidden;
  box-shadow: 0 5px 15px #193047;
  border-radius: 4px;
  border: none;
  background: ${(props) =>
    props.primary
      ? props.theme.color.green.dark
      : props.theme.color.red.regular};
  color: ${(props) =>
    props.primary
      ? props.theme.color.white.regular
      : props.theme.color.red.dark};

  :hover {
    background: #fff;
    box-shadow: 0px 2px 10px 5px #1abc9c;
    color: #000;
  }

  :after {
    content: '';
    background: #1abc9c;
    display: block;
    position: absolute;
    padding-top: 5.7%;
    padding-left: 15.7%;
    margin-left: -20px !important;
    margin-top: -4%;
    opacity: 0;
    transition: all 0.8s;
  }

  :active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s;
  }

  :focus {
    outline: 0;
  }
`;

// export const Dropdown
