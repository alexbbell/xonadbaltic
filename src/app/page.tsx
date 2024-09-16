import Grid from "@mui/material/Grid2";
import Link from "next/link";

export default function Home() {
  return (
    <Grid container spacing={1} p={{ xs:0, sm: 1, md: 2}}
    paddingRight={0}
     py={3} flexGrow={5} my={3}>
      <Grid size={{ xs: 12, sm: 7 }} alignItems={'stretch'} flexGrow={0} flexBasis={0}>

        <div className='container' >
          <h1>We are Xonad Baltic</h1>
          <p>
            Xonad Baltic develops and produce high quality vitamin and mineral premixes
            to fortify for dairy food. Our company develops customer-specific solutions
            for dairy food, beverages and especially baby food. Our team will develop
            the right compound for your product.
          </p>
          <p>
            Go to <Link href='/vitamins'><strong>Vitamins</strong></Link> page
          </p>
          <p>
            Xonad Baltic has several productions site so it can fulfill any order in a short time. You can order any volume of premixes, from 1 kg to dozens of tons. Our production sites are certified.

          </p></div>
      </Grid>
      <Grid display={{ xs: 'none', sm: 'flex' }} flexDirection={'column'}
        flexGrow={2}

        size={{ xs: 12, sm: 5 }}
        justifyContent={{ xs: 'baseline', md: 'flex-start' }}
        alignSelf={{ xs: 'baseline', md: 'flex-start' }}
        marginTop={5} >
        <Link href='/vitamins'><div className='gates'></div></Link>
      </Grid>
      <Grid>

      </Grid>
    </Grid>

  );
}
