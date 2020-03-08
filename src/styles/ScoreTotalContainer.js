import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';

export const ScoreTotalContainer = withStyles({
    root: {
      background: '#3C91E6',
      border: 0,
      color: 'white',
      padding: '20px',
      fontSize: 24
    }
})(Container);