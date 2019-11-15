import styled, { css } from 'styled-components';
import theme from '../../theme/theme';
import Heading4 from '../typography/Heading4';
import BellIcon from '../icon/topbar/BellIcon';
import { Link } from 'react-router-dom';

export const IconLinkContent = styled(Link)`

    margin-left: -1.5em;
    width: 85px;
 
`

export const FlexBasedDivContent = styled.div`
   



    @media only screen and (max-width: 1440px) {
        width: 75em;
    }

    @media only screen and (max-width: 1024px) {
        width: 49em;
    }

    @media only screen and (max-width: 768px) {
        width: 31em;
    }
    
    
    @media only screen and (max-width: 425px) {
        width: 5em;
    }

    
    @media only screen and (max-width: 320px) {
        width: 3em;
    }
    
   
`

export const TopbarFlexContent = styled.div`
    display: flex;
    flex-direction: row;

    background: ${theme.colors.black};
    width: 100%;
    height: 22%;
  
    margin-bottom: 0em;
    text-align: left;
    align-content: center;    
    color: ${theme.colors.gray};
    font-size: ${theme.size.fontDefault};
    font-weight: 400;
    font-family: ${theme.font.fontFamily};
    /* box-shadow: ${theme.size.btnBoxShadow1}; */
    /* border-bottom-right-radius: 0.8em;
    border-bottom-left-radius: 0.8em; */
    border-bottom: 4px;
    /* box-shadow: ${theme.size.topBarBoxShadow}; */
  
   
   ${props => props.home && css} {
       box-shadow: "1px 2px 3px 5px rgba(0,0,0,0.20)";
       background: ${theme.colors.white};
   
   }

        /* for tablet screens */
        @media only screen and (max-width: 768px) {
        ${Heading4} {
            font-size: 11px;
            margin-top: 1.6em;
        }
        ${BellIcon} {
            height: 14px;
        }
    }

    
        /* for big mobile screens */
        @media only screen and (max-width: 425px) {
        ${Heading4} {
            font-size: 11px;
            margin-top: 1.6em;
        }
        ${BellIcon} {
            margin-top: 1.6em;
            font-size: 12px;    
            height: 17px;
        }
      
    }

       /* for medium mobile screens */
       @media only screen and (max-width: 375px) {
        ${Heading4} {
            font-size: 10px;
            margin-top: 1.8em;
            margin-right: -4em;
        }
        ${BellIcon} {
            margin-top: 1.6em;
            font-size: 12px;    
            height: 17px;
        }
      
    }

       /* for medium mobile screens */
       @media only screen and (max-width: 320px) {
        ${Heading4} {
            font-size: 8.5px;
            margin-top: 2.6em;
         
        }
        ${BellIcon} {
            margin-top: 1.6em;
            font-size: 12px;    
            height: 12px;
        }
      
    }
       





   

`