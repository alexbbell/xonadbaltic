import Grid from "@mui/material/Grid2"
import { minerals, prebiotics, vitamins } from "./data"

export default function RootLayout({
    //children,
  }: {
    children: React.ReactNode
  }) {



    return (

<Grid container spacing={1} p={2} paddingRight={0} py={1} flexGrow={5} my={1}>
      <div className='container' >

      <div className="btnlike" role="heading" aria-level={1} >Vitamins</div>
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

      <div className="btnlike" role="heading" aria-level={1} >Minerals</div>

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

      <div className="btnlike" role="heading" aria-level={1} >Prebiotics</div>
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
