import styled, { keyframes } from 'styled-components';
import theme from "../../theme/theme";
import HomeIcons from '../icon/home/HomeIcons';

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

    
`

export default BasicCard;