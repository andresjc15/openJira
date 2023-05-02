import Box from '@mui/material/Box'
import Head from 'next/head'
import React, { FC } from 'react'
import { Navbar } from '../ui/Navbar';
import { Sidebar } from '../ui/Sidebar';
import { PropsWithChildren } from 'react';

interface Props {
    title?: string;
    children: React.ReactNode;
}

export const Layout:FC<Props> = ({ title= 'OpenJira', children }) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
        <Head>
            <title>{ title }</title>
        </Head>

        <Navbar />
        <Sidebar />

        <Box sx={{ padding: '10px 20px' }}>
            { children }
        </Box>

    </Box>
  )
}
