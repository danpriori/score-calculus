import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export const CustomItemThumb = withStyles({
    root: {
      borderRadius: 5,
      color: 'white',
      fontSize: 15,
      alignItems: 'center',
      padding: '5px',
      margin: '2px',
      minWidth: '40px',
      minHeight: '40px',
      boxShadow: '0px 5px 6px -1px rgba(0,0,0,0.66)'
    }
})(Button);