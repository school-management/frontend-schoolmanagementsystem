import styled, { css } from 'styled-components';
import theme from '../../theme/theme';
import Paragraph from '../typography/Paragraph';

export const FooterFlexContentDiv = styled.div`
  flex-basis: 20em;


`


export const FooterContent = styled.div`
    background: ${theme.colors.white};
    width: 98%;
    height: 9%;
    margin-top: 1.2em;
    color: ${theme.colors.gray};
    font-size: ${theme.size.fontDefault};
    font-weight: 400;
    font-family: ${theme.font.fontFamily};
    box-shadow: ${theme.size.topBarBoxShadow};
    border-top-right-radius: 0.8em;
    border-top-left-radius: 0.8em;
    border-bottom: 4px;
    box-shadow: ${theme.size.inputBoxShadowWhenHover1};
    display: flex;
    flex-direction: row;

    /* ${props => props.layout && css`
        width: 82%; 
        display: flex;
        flex-direction: column;
    `}
     */

    /* for medium laptops */
    @media only screen and (max-width: 1440px) {
        ${FooterFlexContentDiv} {
            flex-basis: 51em;   
        }
       
    }

    /* for smaller laptops */
    @media only screen and (max-width: 1024px) {
        ${FooterFlexContentDiv} {
            flex-basis: 41em;   
        }
       
    }

    /* for tablets */
    @media only screen and (max-width: 768px) {
        ${FooterFlexContentDiv} {
            flex-basis: 11.5em;   
        }
       
    }

    /* for bigger mobiles */
    @media only screen and (max-width: 425px) {
        ${FooterFlexContentDiv} {
            flex-basis: 4em;   
        }
        ${Paragraph} {
            font-size: 10px;
        }
       
    }

      /* for medium mobiles */
      @media only screen and (max-width: 375px) {
        ${FooterFlexContentDiv} {
            flex-basis: 3em;   
        }
        ${Paragraph} {
            font-size: 9px;
        }
       
    }

     /* for medium mobiles */
     @media only screen and (max-width: 320px) {
        ${FooterFlexContentDiv} {
            flex-basis: 1.7em;   
        }
        ${Paragraph} {
            font-size: 8px;
        }
       
    }
    
 


   

`

