import styled, { css } from 'styled-components';
import theme from '../../theme/theme';



const Footer = styled.div`
    background: ${theme.colors.white};
    width: 98%;
    height: 9%;
    margin-left: 0.8em;
    margin-top: -0.8em;
    text-align: center;
    align-content: center;    
    color: ${theme.colors.gray};
    font-size: ${theme.size.fontDefault};
    font-weight: 400;
    font-family: ${theme.font.fontFamily};
    box-shadow: ${theme.size.topBarBoxShadow};
    border-top-right-radius: 0.8em;
    border-top-left-radius: 0.8em;
    border-bottom: 4px;
    box-shadow: ${theme.size.inputBoxShadowWhenHover1};
    display: flex;
    flex-direction: row;

    /* ${props => props.layout && css`
        width: 82%; 
        display: flex;
        flex-direction: column;
    `}
     */




   

`
export default Footer;