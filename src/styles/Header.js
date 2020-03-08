import Box from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';

export const Header = withStyles({
    root: {
      height: '100%',
      padding: '20px',
      color: 'white',
      fontSize: 24,
      background: '#3C91E6',
      boxShadow: '0px 10px 15px -15px rgba(0,0,0,0.66)'
    }
})(Box);
