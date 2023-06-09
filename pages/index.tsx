import Head from 'next/head'
import { Inter } from '@next/font/google'
import Typography from '@mui/material/Typography'
import { Layout } from '../components/layouts';
import { Card, CardContent, CardHeader, Grid } from '@mui/material';
import { EntryList, NewEntry } from '../components/ui';

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <>
      <Layout title='Home - OpenJira*'>
        <Grid container spacing={ 2 }>
          <Grid item xs={ 12 } sm={ 4 }>
            <Card sx={{ height: 'calc(100vh - 100px )' }}>
              <CardHeader title="Pendientes" />

              <CardContent>
                {  }
              <NewEntry />
              <EntryList status='pending' />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={ 12 } sm={ 4 }>
            <Card sx={{ height: 'calc(100vh - 100px )' }}>
              <CardHeader title="En progreso" />
              <EntryList status='in-progress' />
            </Card>
          </Grid>
          <Grid item xs={ 12 } sm={ 4 }>
            <Card sx={{ height: 'calc(100vh - 100px )' }}>
              <CardHeader title="Completadas" />
              <EntryList status='finished' />
            </Card>
          </Grid>
        </Grid>
      </Layout>
    </>
  )
}
