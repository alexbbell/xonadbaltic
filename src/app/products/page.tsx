import Grid from "@mui/material/Grid2"
import { minerals, prebiotics, vitamins } from "./data"

export default function RootLayout({
    //children,
  }: {
    children: React.ReactNode
  }) {



    return (

<Grid container spacing={1} p={2} paddingRight={0} py={3} flexGrow={5} my={3}>
      <div className='container' >
        <h1>Vitamins</h1>

      <div className='products'>
        {
        vitamins.map( (v) => {
          return (<div key={`product${v}`} className='vrow'>
          <div><label   dangerouslySetInnerHTML={{__html: v.title }}></label></div>
          <div><label   dangerouslySetInnerHTML={{__html: v.description}}></label></div>
        </div>)
        })
        }
      </div>
      <h1>Minerals</h1>
      <div className='products'>
        {
        minerals.map( (v) => {
          return (<div key={`product${v}`} className='vrow'>
          <div><label   dangerouslySetInnerHTML={{__html: v.title }}></label></div>
          <div><label   dangerouslySetInnerHTML={{__html: v.description}}></label></div>
        </div>)
        })
        }
      </div>

      <h1>Prebiotics</h1>
      <div className='products'>
        {
        prebiotics.map( (v) => {
          return (<div key={`product${v}`} className='vrow'>
          <div><label   dangerouslySetInnerHTML={{__html: v.title }}></label></div>
          <div><label   dangerouslySetInnerHTML={{__html: v.description}}></label></div>
        </div>)
        })
        }
      </div>
    </div>
    </Grid>
    )
  }
