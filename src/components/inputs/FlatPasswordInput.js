import styled from 'styled-components';
import theme from '../../theme/theme';

const FlatPasswordInput = styled.input.attrs({
    type: props => props.show ? 'text' : 'password'
})`
    color: ${theme.colors.gray};
    outline: ${theme.size.inputOutline};
    padding: ${theme.size.inputPadding};
    border: ${theme.size.inputBorder}; 
    border-color: ${theme.colors.inputPurpleWhenFocus};
    width: ${theme.size.inputWidth};
    box-shadow: ${theme.size.inputBoxShadow};
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
        transform: translateX(0.3em);
        transition: 50ms;


    };

    &:hover {
        box-shadow: ${theme.size.inputBoxShadowWhenHover1};
    }

    /* temporary use */ 
    margin: 2em;
  }
`
export default FlatPasswordInput;