import styled, { css } from 'styled-components';
import theme from '../../theme/theme';
import Heading4 from '../typography/Heading4';
import BellIcon from '../icon/topbar/BellIcon';
import { Link } from 'react-router-dom';

export const IconLink = styled(Link)`

    margin-left: -1.5em;
    width: 85px;
 
`

export const FlexBasedDiv = styled.div`
    width: 70em;
    
    /* for smaller laptop screens */
    @media only screen and (max-width: 1024px) {
        width: 48.2em;
    }

     /* for tablet screens */
     @media only screen and (max-width: 768px) {
        width: 30.8em;
    }

    
     /* for bigger mobile screens */
     @media only screen and (max-width: 425px) {
        width: 5.2em;
        
    }
     /* for mediums mobile screens */
     @media only screen and (max-width: 375px) {
        width: 4.4em;
        
    }

     /* for mediums mobile screens */
     @media only screen and (max-width: 320px) {
        width: 2.85em;
        
    }
`

export const TopbarFlex = styled.div`
    background: ${theme.colors.white};
    width: 98%;
    height: 22%;
    margin-left: 0.8em;
    margin-bottom: 0em;
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