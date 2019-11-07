import styled from 'styled-components';
import theme from '../../theme/theme';

export const FormRow = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: stretch;
    /* padding-bottom:2em; */
    padding-top:0;
    justify-content:space-between;
`

export const FormColumn = styled.div`
    flex-direction: column;
    justify-content:space-between;
    flex-basis: ${props => props.viewprofile ? "70em" : props.admissionForm ? "50em" : ""}
    
`

export const FormWrapper = styled.section`
    padding: 0.2em;
    background: ${theme.colors.white};

`

