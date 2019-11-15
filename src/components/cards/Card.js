import styled, { css } from 'styled-components'
import theme from "../../theme/theme"

const Card = styled.div`
    margin:0.5em;
    background: ${theme.colors.white};
    width: auto;
    height:auto;
    box-shadow:${theme.size.cardsboxshadow};
    /* margin:${theme.size.cardsMargin}; */
    padding: 1.5em;
   
    border-radius: ${theme.size.normalCardRadius};
    outline: ${theme.size.btnOutline};
    
    box-shadow: ${theme.size.btnBoxShadow1};
    position: static;
    z-index: 1000;

&:hover {
    transform: translateY(-1px);
    outline: ${theme.size.btnOutline};
    transition: 0.2s ease-in;
    z-index: 1200;
};

${props => props.admission && css`
    background: ${theme.colors.base};
`}

`
export default Card;