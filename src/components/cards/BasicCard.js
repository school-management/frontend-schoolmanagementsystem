import styled, { keyframes } from 'styled-components';
import theme from "../../theme/theme";
import HomeIcons from '../icon/home/HomeIcons';
import Heading3 from '../typography/Heading3';
import { FlexedRow } from '../../screens/home/FlexedRow';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(2deg);
  }
  20% {
    transform: rotate(-2deg);
  }
  30% {
      transform: rotate(0deg);
  }
  40% {
      transform: translateZ(10px);
  }
  50% {
      padding: 2em;
      margin-left: 0.8em;    
      transition: 1ms;
  }
  100% {
    transform: rotate(0deg);
  }



`;

const BasicCard = styled.div`
    width:${theme.size.cardswidth};
    height:${theme.size.cardshight};
    box-shadow:${theme.size.cardsboxshadow};
    border-radius: ${theme.size.cardsRadius};
    background: ${theme.colors.white};
    cursor: pointer;
    font-weight: 600;


    &:hover{
        ${HomeIcons} {
        background: ${theme.colors.white};
        color: ${theme.colors.base};
        border-radius: ${theme.size.cardsRadius};
        animation: ${rotate} 0.5s linear infinite;
    }
    }

    
    /* mid level adjustments */
    @media only screen and (max-width: 600px) {
      margin-bottom: 1em;
      width: 8em;
      height: 8em;
     ${HomeIcons} {
       width: 2.5em;
       height: 2.5em;
     }
     ${Heading3} {
       font-size: 14px
     }
     /* background: rebeccapurple; */
    }

    /* for small laptop screens  */
    @media only screen and (max-width: 1024px) {
      margin-bottom: 1em;
      margin-right: 1em;
      width: 9em;
      height: 9em;
     ${HomeIcons} {
       width: 4em;
       height: 4em;
       padding: 1em;
     }
     ${Heading3} {
       font-size: 14px
     }
     /* background: rebeccapurple; */
    }

    /* for tablet screens */
    @media only screen and (max-width: 768px) {
      margin-bottom: 1em;
      margin-right: 1em;
      width: 11em;
      height: 11em;
     ${HomeIcons} {
       width: 5em;
       height: 5em;
       padding: 1.5em;
     }
     ${Heading3} {
       font-size: 14px
     }
     /* background: rebeccapurple; */
    }

    /* for bigger phone */
    @media only screen and (max-width: 425px) {
      margin-bottom: 1em;
      width: 8em;
      height: 8em;
     ${HomeIcons} {
       width: 3em;
       height: 3em;
        padding: 1em;       
     }
     ${Heading3} {
       font-size: 12px
     }
     /* background: red; */
    }


    /* for small mobile devices */
    @media only screen and (max-width: 320px) {
      margin-bottom: 1em;
      width: 7em;
      height: 7em;
     ${HomeIcons} {
       width: 2.8em;
       height: 2.8em;
       padding: 0.7em;
       
     }
     ${Heading3} {
       font-size: 11px
     }
     /* background: red; */
    }


    
`

export default BasicCard;