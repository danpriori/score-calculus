import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';

export const SummaryContainer = withStyles({
    root: {
      border: 0,
      padding: '0px',
      width: '50%',
      position: 'fixed',
      right: '0px',
      bottom: '0px',
      fontSize: 24,
      boxShadow: '0px -7px 10px -1px rgba(0,0,0,0.16)'
    }
  })(Container);