import styled from 'styled-components';
import theme from '../../theme/theme';

const Select = styled.select`
    padding: 0.7em;
    outline: none;
    font-family: ${theme.font.fontFamily};
    border: ${theme.size.selectBorder};  
    box-shadow: ${theme.size.btnBoxShadow1};
    border-radius: 0.4em;
    

`

export default Select;