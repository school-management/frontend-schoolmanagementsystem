import theme from '../../theme/theme';
import styled from 'styled-components';
// import FloatingLabel from 'react-styled-floating-label';


const FloatingLabelInput = styled.input`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    box-sizing: border-box;
 
    border: none;
    border-bottom: 0.5px solid #bdbdbd;
 
    font-size: 1.25em;
    padding-left: 0.25em;
    padding-top: 0.25em;

 
    :focus {
        border-color: #5eaefe;
        outline: none;
    }
`

export default FloatingLabelInput;
