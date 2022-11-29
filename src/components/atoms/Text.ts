import styled from 'styled-components';

export const Span = styled.span``;

export const H1 = styled(Span)`
  font-size: 48px;
  margin: ${props => props.theme.sizes.l};
  height: auto;
  line-height: 50px;
  font-weight: bold;
`;

export const H3 = styled(Span)`
  font-size: 24px;
  margin: ${props => props.theme.sizes.m};
  height: auto;
  line-height: 25px;
`;