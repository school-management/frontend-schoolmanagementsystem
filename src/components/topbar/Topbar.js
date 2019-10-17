import styled from 'styled-components';
import theme from '../../theme/theme';



const Topbar = styled.div`
    background: ${theme.colors.white};
    width: 65em;
    height: 4em;
    margin-left: 5em;
    text-align: left;
    align-items: center;    
    color: ${theme.colors.gray};
    font-size: ${theme.size.fontDefault};
    font-weight: 400;
    font-family: ${theme.font.fontFamily};
    /* box-shadow: ${theme.size.btnBoxShadow1}; */
    border-bottom-right-radius: 0.8em;
    border-bottom-left-radius: 0.8em;
    border-bottom: 4px;
    box-shadow: ${theme.size.inputBoxShadowWhenHover1};
    /* display: flex; */
    /* flex-direction: row; */



   

`
export default Topbar;