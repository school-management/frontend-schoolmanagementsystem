import styled, { css } from 'styled-components';
import theme from '../../theme/theme';

const Paragraph = styled.p`
    font-family:${theme.font.fontFamily};
    font-weight: ${theme.size.bold}
    /* color: ${theme.colors.gray}; */
    ${props => props.footer && css`
        text-align: "center";
        font-weight: 600;
        vertical-align: "center";
        margin-left: 2em; 
        font-size: 13px;
    `}
`

export default Paragraph;