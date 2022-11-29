import styled from 'styled-components';

export const Text = styled.span``;

export const H1 = styled(Text)`
  font-size: 48px;
  margin: ${props => props.theme.sizes.l};
  height: auto;
  line-height: 50px;
  font-weight: bold;
`;