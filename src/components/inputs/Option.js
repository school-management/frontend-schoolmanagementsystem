import styled from 'styled-components';
import theme from '../../theme/theme';

const Option = styled.option`
 
    font-family: ${theme.font.fontFamily};
    font-size: ${theme.size.fontDefault};
    padding: 1em;
    outline: none;
    border: ${theme.size.selectBorder};
    border-radius: 0.4em;

  
`

export default Option;