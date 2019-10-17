import styled, { css } from 'styled-components';
import theme from '../../theme/theme';
import DoubleTickIconSecondary from '../icon/DoubleTickIconSecondary';



const PrimaryButton = styled.button`

background: ${props => props.primary ? theme.colors.btnPurple : props.secondary ? theme.colors.white : theme.colors.white};
color: ${props => props.primary ? theme.colors.white : props.secondary ? theme.colors.btnPurple : theme.colors.btnPurple};

font-size: ${theme.size.btnFont};
font-weight: ${theme.size.btnFontWeight};
font-family: ${theme.font.fontFamily};
letter-spacing: ${theme.size.btnFontSpacing};

padding: ${theme.size.btnPadding};
border: 1px solid ${theme.colors.btnPurple};
border-radius: ${theme.size.btnRadius};
outline: ${theme.size.btnOutline};
/* box-shadow: ${theme.size.btnBoxShadow}; */
box-shadow: ${theme.size.btnBoxShadow1};
cursor: pointer;

&:hover {
    box-shadow: ${theme.size.btnBoxShadow1WhenHover};
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

${props => props.primary && css`
    &:hover {
        ${DoubleTickIconSecondary} {
            fill: "white";
            color: "white";
            background: "white";
        };
    }
`}

/* temporary use */
margin: 2em;

`;

export default PrimaryButton;