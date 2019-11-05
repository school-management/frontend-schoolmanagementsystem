import styled, { css } from 'styled-components';
import theme from '../../theme/theme';

export const Table = styled.table`
    /* text-align: justify; */
    /* position: absolute; */
    /* background: ${theme.colors.white}; */
    /* border-radius: 0.6em; */
    /* padding: 1em; */
    /* display: inline-block; */

`

export const THead = styled.thead`
    background: white;
    border-radius: 0.3em;
   
`

export const TBody = styled.tbody`
    word-wrap: break-word 5;
`


export const TableRow = styled.tr`
    /* padding: 0.2em; */
    /* cursor: pointer; */
    opacity: 0.8;
    /* border: none; */
    border-radius: 0.3em;

    ${props => props.head && css`
    border-bottom: 0.3px solid red;
    `};
    
    &:hover {
        ${props => !props.heading && css`
            border: 2px solid gray;
            opacity: 0.9;
            transform: translateY(1px);
            transition: 0.3s linear;
            box-shadow: ${theme.size.tableBoxShadowWhenFocus};
        `};
       
    };
`

export const TableHeading = styled.th`
   
    padding-right: 1em;
    padding-top: 0.1em;
    padding-left: 1em;
    padding-bottom: 0.1em;
    /* border: none; */
    /* color: ${theme.colors.gray}; */

`
export const TableData = styled.td`
    padding-left: 1em;
    padding-top: 0.1em;
    padding-right: 2em;
    padding-bottom: 0.1em;
    /* border: none; */
  
    
`

export const TableBtn = styled.button`
    /* background: ${theme.colors.white}; */
    border:none;
    outline: none;
    /* cursor: pointer; */
`