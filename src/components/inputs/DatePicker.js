import styled from 'styled-components';
import theme from '../../theme/theme';

const DatePick = styled.input.attrs({
    type: props => props.type ? 'time' : 'date'
})`
     color: ${theme.colors.gray};
    outline: ${theme.size.inputOutline};
    padding: ${theme.size.inputPadding};
    border: ${theme.size.inputBorder}; 
    box-shadow: ${theme.size.inputBoxShadow};
    border-color: ${theme.colors.sidebar};
    width: ${theme.size.inputWidth};
    height: ${theme.size.inputHeight};
    font-size: ${theme.size.fontDefault};
    font-weight: ${theme.size.bold};
    /* margin-left:2em; */
    font-family: ${theme.font.fontFamily};
    border-top-color: ${theme.colors.white};
    border-right-color: ${theme.colors.white};
    border-left-color: ${theme.colors.white};
    border-top-left-radius: 0.2em;
    border-top-right-radius: 0.2em;

    &:focus {
     /*   border-color: ${theme.colors.inputPurpleWhenFocus};
        /* width: ${theme.size.inputWidthWhenFocus}; */
        box-shadow: ${theme.size.inputBoxShadowWhenFocus};
        padding: ${theme.size.inputPaddingWhenFocus};
        /*outline: ${theme.size.inputOutline};
        border-radius: 0.3em;
        /* transform: translateX(0.3em); */
        transition: 50ms;


    };

`

export default DatePick;