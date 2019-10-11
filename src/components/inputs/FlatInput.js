import styled from 'styled-components';
import theme from '../../theme/theme';

const FlatInput = styled.input`

    color: ${theme.colors.gray};
    outline: ${theme.size.inputOutline};
    padding: ${theme.size.inputPadding};
    border: ${theme.size.inputBorder}; 
    box-shadow: ${theme.size.inputBoxShadow};
    border-color: ${theme.colors.inputPurple};
    width: ${theme.size.inputWidth};
   
    font-family: ${theme.font.fontFamily};
    border-top-color: ${theme.colors.white};
    border-right-color: ${theme.colors.white};
    border-left-color: ${theme.colors.white};
    border-top-left-radius: 0.2em;
    border-top-right-radius: 0.2em;

    &:focus {
        border-color: ${theme.colors.inputPurpleWhenFocus};
        width: ${theme.size.inputWidthWhenFocus};
        box-shadow: ${theme.size.inputBoxShadowWhenFocus};
        padding: ${theme.size.inputPaddingWhenFocus};
        outline: ${theme.size.inputOutline};
        border-radius: 0.3em;
        /* transform: translateX(0.3em); */
        transition: 50ms;


    };

    &:hover {
        box-shadow: ${theme.size.inputBoxShadowWhenHover1};
    }

    /* temporary use */ 
    margin: 2em;


`

export default FlatInput;