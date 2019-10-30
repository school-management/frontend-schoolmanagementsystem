import styled, { css } from 'styled-components';
import theme from '../../theme/theme';
import DoubleTickIconSecondary from '../icon/DoubleTickIconSecondary';



const TogglerButton = styled.button`

background: ${theme.colors.togglerBackground};
color: ${theme.colors.togglerColor};
font-size: ${theme.size.btnFont};
font-weight: 590;
font-family: ${theme.font.fontFamily};
letter-spacing: ${theme.size.btnFontSpacing};

padding: ${theme.size.btnPadding};
border: ${theme.size.togglerBorder};
border-radius: ${theme.size.btnRadius};
outline: ${theme.size.btnOutline};
/* box-shadow: ${theme.size.btnBoxShadow}; */
box-shadow: ${theme.size.togglerShadow};
cursor: pointer;

&:hover {
    box-shadow: ${theme.size.togglerShadowWhenHover};
    background: ${theme.colors.btnPurpleWhenHover};
    color: ${props => props.primary ? theme.colors.white : theme.colors.white};
    border-radius: ${theme.size.btnRadiusWhenHover};
    outline: ${theme.size.btnOutline};
    transition: 0.35s;

    
}



&:active {
    transform: translateY(2px);
    outline: ${theme.size.btnOutline};
}



`;

export default TogglerButton;