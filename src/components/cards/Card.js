import styled from 'styled-components'
import theme from "../../theme/theme"

const Card = styled.div`
    
    background: ${theme.colors.white};
<<<<<<< HEAD
    width:auto;
    height:auto;
=======
    width:${theme.size.cardswidth};
    height:${theme.size.cardshight};
>>>>>>> 00f01b61f5839babd5e31ad900ef6d0cc83a7115
    box-shadow:${theme.size.cardsboxshadow};
    /* margin:${theme.size.cardsMargin}; */
    padding: 1.5em;
   
    border-radius: ${theme.size.normalCardRadius};
    outline: ${theme.size.btnOutline};
    
    box-shadow: ${theme.size.btnBoxShadow1};

    z-index: 500;





&:hover {
    transform: translateY(-1px);
    outline: ${theme.size.btnOutline};
    transition: 0.2s ease-in;
    z-index: 800;
}
    



`

export default Card;