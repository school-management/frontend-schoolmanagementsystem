import styled from 'styled-components'
import theme from "../../theme/theme"

const Card = styled.div`
    
    background: ${theme.colors.white};
    width:auto;
    height:auto;
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