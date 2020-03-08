import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';

export const ContentContainer = withStyles({
    root: {
      border: 0,
      color: 'white',
      padding: '100px 30px'
    }
  })(Container);