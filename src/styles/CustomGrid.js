import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

export const CustomGrid = withStyles({
    root: {
      minHeight: '100vh',
      background: 'linear-gradient(0deg, #EEE 30%, #CCC 90%)'
    }
})(Grid);
