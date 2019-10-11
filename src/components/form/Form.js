import styled from 'styled-components';
import theme from '../../theme/theme';

const Form = styled.form`

    font-family: ${theme.font.fontFamily};
    /*temporary use*/
    top: 5em;
    padding: 3em;
    box-shadow: ${theme.size.inputBoxShadow};
    width: 80%;
    align-content: center;
    position: relative;
    text-align: center;
`

export default Form;