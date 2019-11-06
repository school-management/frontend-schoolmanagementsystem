import styled from 'styled-components';
import theme from '../../theme/theme';

export const FormRow = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: space-between;2
    padding-bottom:2em;
`

export const FormColumn = styled.div`
    flex-direction: column;

    flex-basis: ${props => props.viewprofile ? "54px" : ""}
`

export const FormWrapper = styled.section`
    padding: 0.2em;
    background: ${theme.colors.white};

`

