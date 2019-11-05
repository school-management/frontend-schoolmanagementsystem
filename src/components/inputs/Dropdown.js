import styled from 'styled-components';
import theme from '../../theme/theme';



export const Option = styled.option`

    font-family: ${theme.font.fontFamily};
    font-size: 15.5px;
    font-weight: 540;
    line-height: 10px;
    height: 50em;
    background-size: 4em;
    outline: none;
    border: ${theme.size.selectBorder};
    border-radius: 1em;
`

export const Dropdown = styled.select`
    padding: 0.7em;
    outline: none;
    color: ${theme.colors.gray};
    width: 15em;
    font-family: ${ theme.font.fontFamily};
    border: ${ theme.size.selectBorder};
    box-shadow: ${ theme.size.btnBoxShadow1};
    border-radius: 0.4em;
    line-height: 10px;

`