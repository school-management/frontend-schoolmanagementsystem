import styled from 'styled-components'
import theme from '../../theme/theme'



const HomeCard = styled.div`
    width:${theme.size.cardswidth};
    height:${theme.size.cardshight};
    background:${theme.colors.cardsbackground};
    box-shadow:${theme.size.cardsboxshadow};
    border-radius: ${theme.size.cardsRadius};
`

export default HomeCard;