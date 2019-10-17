import styled from 'styled-components';
import theme from '../../../theme/theme';



const Button = styled.button`

background: ${props => props.primary ? theme.colors.btnPurple : "palevioletred"};
color: ${props => props.primary ? theme.colors.white : "blacks"};

font-size: ${theme.size.btnFont};
font-weight: 800;
font-family: ${theme.font.fontFamily};

padding: ${theme.size.btnPadding};
border: 1px solid ${theme.colors.btnPurple};
border-radius: ${theme.size.btnRadius};
outline: ${theme.size.btnOutline};
/* box-shadow: ${theme.size.btnBoxShadow}; */
box-shadow: "0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12)";
cursor: pointer;

&:hover {
    box-shadow: ${theme.size.btnBoxShadowWhenHover};
    background: ${theme.colors.btnPurpleWhenHover};
    border-radius: ${theme.size.btnRadiusWhenHover};
    outline: ${theme.size.btnOutline};
    transition: 0.35s;
}

&:active {
    transform: translateY(2px);
    outline: ${theme.size.btnOutline};
}

/* temporary use */
margin: 2em;

`;

export default Button;