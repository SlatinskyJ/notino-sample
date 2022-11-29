import styled from 'styled-components';
import {H1} from '../atoms/Text';

const AppBarContainer = styled.div`
  width: 100%;
  height: 100px;
  background: ${props => props.theme.colors.accent};
  color: black;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
`;

export default function AppBar() {
	return <AppBarContainer>
		<H1>TodoApp</H1>
	</AppBarContainer>;
};