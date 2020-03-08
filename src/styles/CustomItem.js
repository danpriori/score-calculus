import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export const CustomItem = withStyles({
    root: {
      borderRadius: 13,
      color: 'white',
      fontSize: 50,
      alignItems: 'center',
      padding: '20px',
      margin: '25px',
      minWidth: '120px',
      minHeight: '120px',
      boxShadow: '0px 10px 15px -1px rgba(0,0,0,0.66)'
    }
})(Button);