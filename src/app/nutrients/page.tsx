import Grid from "@mui/material/Grid2"
import { minerals, prebiotics, vitamins } from "./data"
import type { Metadata } from 'next'



  export async function generateMetadata(
  ): Promise<Metadata> {
    // optionally access and extend (rather than replace) parent metadata
    return {
      title: 'Nutrients',
    }
  }

export default function Page({
    //children,
  }: {
    children: React.ReactNode
  }) {



    return (

<Grid container spacing={1} p={{ xs:0, sm: 1, md: 2}} py={3} flexGrow={5} my={3}  >
      <div className='container' >
      <h1>Nutrients</h1>
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
