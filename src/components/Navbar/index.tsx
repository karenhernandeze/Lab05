import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import "./index.css"

/**
 * Navbar at top of the page
 * @returns a component of a Navigation Bar
*/
export default function NavigationBar() {

  return (
    <div className={"root"}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={"menuButton"} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Navigation Bar
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
