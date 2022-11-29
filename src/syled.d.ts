import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			main: string,
			primary: string,
			secondary: string,
			accent: string,
			text: string
		},
		sizes: {
			s: string,
			m: string,
			l: string,
			xl: string
		}
	}
}