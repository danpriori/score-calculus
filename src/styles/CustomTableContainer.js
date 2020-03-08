import TableContainer  from '@material-ui/core/TableContainer';
import { withStyles } from '@material-ui/core/styles';

export const CustomTableContainer = withStyles({
    root: {
        maxHeight: 450,
        boxShadow: '0px 10px 10px -1px rgba(0,0,0,0.26)'
    }
})(TableContainer);