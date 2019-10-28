import styled from 'styled-components';
import theme from '../../../theme/theme';


// const rotate = keyframes`
//   0% {
//     transform: rotate(0deg);
//   }
//   10% {
//     transform: rotate(10deg);
//   }
//   20% {
//     transform: rotate(-10deg);
//   }
//   30% {
//       transform: rotate(0deg);
//   }
//   40% {
//       transform: translateZ(10px);
//   }
//   50% {
//       padding: 2em;
//       margin-left: 1.2em;    
//       transition: 1ms;
//   }
//   60% {

//   }



// `;

const HomeIcons = styled.img`
    height: 5em;
    width: 5em;
    fill-opacity: 0.8;
    padding: 1.8em;
    margin-left : 1.5em;  
    margin-top:0.3em;  
    margin-bottom: -1em;
    background: ${theme.colors.white};
    background-blend-mode:screen;
    border-radius:${theme.size.cardsRadius};

    &:hover {
        background: ${theme.colors.white};
        color: ${theme.colors.base};
        border-radius: ${theme.size.cardsRadius};


  
    }
`
export default HomeIcons;