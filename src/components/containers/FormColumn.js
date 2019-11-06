import styled from 'styled-components';
import theme from '../../theme/theme';

export const FormRow = styled.div`
    display: flex;
    flex-direction:row;
<<<<<<< HEAD
    justify-content: space-between;2
=======
    justify-content: stretch;
>>>>>>> 87c2fb2bcacccc786ca3161dea694a817f0908c7
    padding-bottom:2em;
`

export const FormColumn = styled.div`
    flex-direction: column;
<<<<<<< HEAD

    flex-basis: ${props => props.viewprofile ? "54px" : ""}
=======
    flex-basis: ${props => props.admissionForm ? "50em" : ""};
    
>>>>>>> 87c2fb2bcacccc786ca3161dea694a817f0908c7
`

export const FormWrapper = styled.section`
    padding: 0.2em;
    background: ${theme.colors.white};

`

