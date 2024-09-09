'use client'
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import React from "react"
import MenuIcon from '@mui/icons-material/Menu';
import Menu from "@mui/material/Menu"
import Container from "@mui/material/Container"
import MenuItem from "@mui/material/MenuItem/MenuItem"
import { XBLogo } from "./logo"

const pages = ['Products', 'Pricing', 'Blog'];
export const Header = (): JSX.Element => {

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };


    return (
        <div>


            <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <XBLogo width={90}  />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: 'flex',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Xonad Baltic
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' }, justifyContent: 'flex-end' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', sm: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center', color: '#000' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#000', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
    </Box>
        </div>

    )
}