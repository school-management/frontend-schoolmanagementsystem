import styled from 'styled-components';
import theme from '../../theme/theme';

const Content = styled.div`
    background-color: ${theme.colors.base};
    display: flex;
    flex-direction: column;
    height: 50%;
    width: 82%;
    box-shadow: '1px 2px 4px 8px rgba(0, 0, 0, 0.21)';
    border-radius: 0.3em;
`

export default Content;