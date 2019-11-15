import styled from 'styled-components';
import theme from '../../theme/theme';



export const Option = styled.option`

    font-family: ${theme.font.fontFamily};
    font-size: 14.5px;
    font-weight: 540;
    line-height: 10px;
    height: 50em;
    background-size: 4em;
    outline: none;
    border: ${theme.size.selectBorder};
    border-radius: 1em;
    padding: 10px;
    overflow: hidden;
    -webkit-appearance: button;
`

export const Dropdown = styled.select`
    padding: 0.7em;
    outline: none;
    color: ${theme.colors.gray};
    width: 13em;
    font-family: ${ theme.font.fontFamily};
    border: ${ theme.size.selectBorder};
    box-shadow: ${ theme.size.btnBoxShadow1};
    border-radius: 0.4em;
    line-height: 10px;
    overflow: hidden;
    border-color: ${theme.colors.sidebar};
    
    &:focus {
        ${Option} {
            height: 2em;
            border-radius: 0.4em;
            border: none;
            stroke-opacity: 0.3;
            overflow: hidden;
            background: ${theme.colors.base};
            padding: 0px 2px 1px;
            font-size: 16px;
        }
    }

`