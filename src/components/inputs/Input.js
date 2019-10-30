import styled from 'styled-components';
import theme from '../../theme/theme';

const Input = styled.input`

    color: ${theme.colors.gray};
    outline: ${theme.size.inputOutline};
    padding: ${theme.size.inputPadding};
    border: ${theme.size.inputBorder}; 
    border-radius: 0.4em;
    border-color: ${theme.colors.main};
    width: ${theme.size.inputWidth};
    box-shadow: ${theme.size.inputBoxShadow};
    font-family: ${theme.font.fontFamily};

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
        box-shadow: ${theme.size.inputBoxShadowWhenHover};
    }

    


`

export default Input;