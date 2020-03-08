import TableCell  from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

export const CustomTableCell = withStyles({
  head: {
    backgroundColor: '#3C91E6',
    color: 'white',
    fontSize: 20,
  },
  body: {
    fontSize: 16,
    backgroundColor: '#fff',
    color: '#555',
  },
})(TableCell);