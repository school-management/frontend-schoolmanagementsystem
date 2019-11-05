import styled, { css } from 'styled-components';
import theme from '../../theme/theme';

export const Table = styled.table`

    background:${theme.colors.white};
    border-radius:${theme.size.tableRadius};
    /* box-shadow: ${theme.size.btnBoxShadow1WhenHover};  */
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    
    
`
export const TableHeading = styled.thead`
    border:2px solid;
    border-radius: ${theme.size.tableRadius};
    text-align:center;
    
`
export const TableBody = styled.tbody`
    border:1px solid;
    
`

export const TableRow = styled.tr`
  /* box-shadow: ${theme.size.btnBoxShadow1WhenHover};  */
  padding:1em;
  display:flex;
    flex-direction:row;
  justify-content:space-around;
    color:${theme.colors.gray}
   
    
    
    &:hover{
        box-shadow: ${theme.size.tableBoxShadowWhenFocus}; 
        background:white;
        color: ${theme.colors.gray};
        border-radius: ${theme.size.tableRadius};
        animation:  0.5s linear infinite;
    }
    
   ${props => props.primary && css`
   background:${theme.colors.base};
    color: ${theme.colors.inputPurple};
  `}
  ${props => props.heading && css`
   border-bottom:0.1px solid;
   text-transform:0.1px;
  `}
`

export const TableHead = styled.th`
     border-radius: 0.3em; 
    /* background:${theme.colors.base}; */
    /* box-shadow: ${theme.size.btnBoxShadow1WhenHover};  */
    
    
    &:hover{
        
        color: ${theme.colors.inputPurple};
        border-radius: ${theme.size.tableRadius};
        animation:  0.5s linear infinite;
    } 
    
`
export const Tablebody = styled.td`
    
    &:focus {
        
        width: ${theme.size.inputWidthWhenFocus}; 
         box-shadow: ${theme.size.inputBoxShadowWhenFocus}; 
         padding: ${theme.size.inputPaddingWhenFocus}; 
         outline: ${theme.size.inputOutline}; 
        border-radius: 0.3em; 
        transform: translateX(0.3em); 
         transition: 50ms;
     };

    &:hover{
        
        color:black;
        border-radius: ${theme.size.cardsRadius};
        animation:  0.5s linear infinite;
    } 
    `
