import styled, { css } from 'styled-components';
import theme from '../../theme/theme';

export const FlexContainer = styled.div`
    background: ${theme.colors.sidebar};
    padding: 0em;
    margin-bottom: 0.4em;
`

export const FlexContainingRow = styled.div`
    display: flex;
    flex-direction: row;
`

export const FlexContainingColumn = styled.div`
    flex-direction: column;

    ${props => props.container && css`
            width: auto;
    `}
`

export default FlexContainer;   