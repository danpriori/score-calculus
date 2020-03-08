import Box from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';

export const HeaderBox = withStyles({
    root: {
        zIndex: 99, 
        width: '50%',
        margin: '0px',
        padding: '0px',
        position: 'fixed'
    }
})(Box);
