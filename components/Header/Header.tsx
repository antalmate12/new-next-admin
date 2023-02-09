import styles from './Header.module.scss'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Gravatar from 'react-gravatar'
import { User } from '@/hooks/useAuth'

// TODO: Meg kellene oldani, hogy ha már idáig eljutottunk,
//  akkor biztosan legyen user, és ne is kelljen várni arra,
//  hogy betöltsön "?."-ekkel, hanem addig ne jelenjen meg a MainLayout
const Header = ({ user }: { user: User }) => {
  return (
    <header className={styles.Header}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ boxShadow: 'none' }} position="sticky" color={'default'}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Next-Admin
            </Typography>

            <Gravatar
              email={user?.email}
              size={42}
              rating="pg"
              default="retro"
              className={styles.Gravatar}
            />
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  )
}

export default Header
