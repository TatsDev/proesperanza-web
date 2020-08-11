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
