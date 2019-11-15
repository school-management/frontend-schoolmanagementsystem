import styled from 'styled-components';
import theme from '../../theme/theme';

const Label = styled.label`
    font-family:${theme.font.fontFamily};
    font-size: 13px;
    font-weight:bold;
    color: ${theme.colors.sidebar};
    padding-bottom:-3em;
    margin-right: 1em;
    
    /* color: ${theme.colors.gray}; */
`

export default Label;