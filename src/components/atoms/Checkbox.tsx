import {InputHTMLAttributes} from 'react';
import styled from 'styled-components';

type Props = {
	value: boolean;
	inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

export default function Checkbox({value, inputProps}: Props) {
	return <StyledInput type="checkbox" checked={value} {...inputProps}/>;
}

const StyledInput = styled.input`
  &[type='checkbox'] {
    width: ${props => props.theme.sizes.xl};
    height: ${props => props.theme.sizes.xl};
    margin-right: ${props => props.theme.sizes.m};
    pointer-events: none;

    &:checked {
      accent-color: ${props => props.theme.colors.accent};
    }
  }
`;