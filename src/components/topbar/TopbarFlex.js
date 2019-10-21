import styled, { css } from 'styled-components';
import theme from '../../theme/theme';



const TopbarFlex = styled.div`
    background: ${theme.colors.white};
    width: 98%;
    height: 22%;
    margin-left: 0.8em;
    margin-bottom: -0.49em;
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
    box-shadow: ${theme.size.topBarBoxShadow};
    display: flex;
    flex-direction: row;
   
   ${props => props.home && css} {
       box-shadow: "1px 2px 3px 5px rgba(0,0,0,0.20)";
       background: ${theme.colors.white};
      
   }



   

`
export default TopbarFlex;