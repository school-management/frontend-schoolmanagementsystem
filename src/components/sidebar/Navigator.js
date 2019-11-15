import styled from 'styled-components';
import theme from '../../theme/theme';


const Navigator = styled.nav`
    background: ${theme.colors.sidebar};
    text-align: justify;
    color: ${theme.colors.white};
    font-family: ${theme.font.fontFamily};
    padding: 0.4em;
    /* margin-top: 2em; */
    border-top-right-radius: 1.5em;


`
export default Navigator;