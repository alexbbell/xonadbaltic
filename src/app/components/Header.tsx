'use client'
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import React from "react"
import MenuIcon from '@mui/icons-material/Menu';
import Menu from "@mui/material/Menu"
import Container from "@mui/material/Container"
import MenuItem from "@mui/material/MenuItem/MenuItem"
import { XBLogo } from "./logo"
import Link from "next/link"
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export interface SiteLink {
  key?: string
  label: string
  url: string
}

const pages: SiteLink[] = [
  {
    label: 'Main', url: '/'
  },
  {
    label: 'Products', url: 'products'
  },
  {
    label: 'Contact us', url: 'contacts'
  }
];
export const Header = (): JSX.Element => {
  const router = useRouter()

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
          <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', alignItems: 'normal', alignSelf: 'center'}}>
           <Link href='/'>
            <Image src='/images/xblogo_full.svg' alt="Xonad Baltic" width={350} height={50} style={{ flexGrow: 3}} className='logos'
                          /></Link>
            {/* <div><XBLogo style={{ flexGrow: 2, minWidth: '50px'}}  /></div>
            <div>
              <Image src='/images/xb_logo_hor.svg' width={300} height={25} style={{ maxHeight: '25px'}} alt="Xonad Baltic"/></div> */}
          </div>


          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
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
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.label}
                  onClick={ () => {
                    handleCloseNavMenu()
                    router.push(page.url)

                  }}
                  >

                  <Typography sx={{ textAlign: 'center', color: '#000' }}>{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map((page) => (
              <Link
              style={{ margin: '10px'}}
                key={page.label}
                href={page.url}>{page.label}</Link>
              // <Button
              //   key={page.label}
              //   onClick={handleCloseNavMenu}
              //   sx={{ my: 2, color: '#000', display: 'block', whiteSpace: 'nowrap' }}>{page.label}</Button>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
    </Box>
        </div>

    )
}