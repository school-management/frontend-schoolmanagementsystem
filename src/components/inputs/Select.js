import styled, { css } from 'styled-components';
import theme from '../../theme/theme';
import Select from 'react-select';


const Selection = styled(Select)`
flex-direction: column;
text-align: "center";
    width: 14.5em;
    border: ${theme.size.selectBorder};
    outline: none;
    font-family: ${theme.font.fontFamily};
    font-size:${theme.size.fontDefault};
    border-radius: 0.5em;
    &:focus {
        outline: none;
        border: ${theme.size.selectBorder};
        border-radius: 0.4em;
    }
    &:active {
        outline: none;
        stroke-linecap: butt;
        border: ${theme.size.selectBorder};
        border-radius: 0.4em;
    }

    
    /* ${props => props.disabled} */


    
`
export default Selection;




