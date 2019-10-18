import styled from 'styled-components';
import theme from '../../theme/theme';

const Table = styled.table`
    border:1px solid;
    background:"navy";
    padding:20px;
    margin:30px;
    
    
`

const TableRow = styled.tr`
    border:1px solid;
    background:"navy";
    padding:20px;
    margin:30px;
       
`
const TableHead = styled.thead`
 border:1px solid;
`
const TableBody = styled.tbody`
    border:1px solid;
    background:"navy";
    padding:20px;
    margin:30px;
    `

export default (Table, TableHead, TableRow, TableBody);