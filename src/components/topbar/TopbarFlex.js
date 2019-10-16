import styled from 'styled-components';
import theme from '../../theme/theme';



const TopbarFlex = styled.div`
    background: ${theme.colors.white};
    width: 98%;
    height: 20%;
    margin-left: 0.8em;
    text-align: left;
    align-content: center;    
    color: ${theme.colors.gray};
    font-size: ${theme.size.fontDefault};
    font-weight: 400;
    font-family: ${theme.font.fontFamily};
    /* box-shadow: ${theme.size.btnBoxShadow1}; */
    border-bottom-right-radius: 0.8em;
    border-bottom-left-radius: 0.8em;
    border-bottom: 4px;
    box-shadow: ${theme.size.inputBoxShadowWhenHover1};
    display: flex;
    flex-direction: row;
   



   

`
export default TopbarFlex;