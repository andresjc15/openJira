import { AppBar, Toolbar, IconButton } from '@mui/material'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import React from 'react'
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import { UIContext } from '../../context/ui';

export const Navbar = () => {

  const { openSideMenu } = useContext( UIContext );

  return (
    <AppBar position='sticky'>
        <Toolbar>
            <IconButton
                size='large'
                edge='start'
                onClick={ openSideMenu }
            >
                <MenuOutlinedIcon />
            </IconButton>
            <Typography variant='h6'>OpenJira</Typography>
        </Toolbar>

    </AppBar>
  )
}
