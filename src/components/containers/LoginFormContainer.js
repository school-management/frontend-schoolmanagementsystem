import styled from 'styled-components';
import theme from '../../theme/theme';

const LoginFormContainer = styled.div`
    /* width: 700px;
    padding: 4em;
    margin:3em auto;
    text-align: center;
    position: relative; */
    /* box-shadow: ${theme.size.LoginBoxShadow}; */
    
    width:100%;
    background: #f2f2f2;

    @media only screen and (max-width: 700px) {
        width: 500px;
    }

`

export default LoginFormContainer;