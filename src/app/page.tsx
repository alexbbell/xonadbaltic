'use client'
import Grid from "@mui/material/Grid2";
import Link from "next/link";
import { useEffect, useState } from "react";
//import { useReducer } from "react";

export default function Home() {

  const [fptext, setFptext] = useState('')
  // const [multiplication, dispatch] = useReducer((state, action) => {
  //   return state * action;
  // }, 50);

  useEffect( () => {
    fetch('/data/content.json').then(res => {
      return res.json()
    }).then(r => {
      setFptext(r.fpcontent)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <Grid container spacing={1} p={{ xs:0, sm: 1, md: 2}} paddingRight={0} py={3} flexGrow={5} my={3}>
      <Grid size={{ xs: 12, sm: 7 }} alignItems={'stretch'} flexGrow={1} flexBasis={0}>

        <div className='container' dangerouslySetInnerHTML={{__html: fptext }}>

          </div>
      </Grid>
      <Grid display={{ xs: 'none', sm: 'flex' }} flexDirection={'column'}
        flexGrow={2}

        size={{ xs: 12, sm: 5 }}
        justifyContent={{ xs: 'baseline', md: 'flex-start' }}
        alignSelf={{ xs: 'baseline', md: 'flex-start' }}
        marginTop={5} >
        <Link href='/nutrients'><div className='gates'></div></Link>
      </Grid>
      <Grid>

      </Grid>
    </Grid>

  );
}
