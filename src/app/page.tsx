import Grid from "@mui/material/Grid2";
import { Gates, Letters } from "./components/logo";


export default function Home() {
  return (
    <Grid container spacing={1} >
      <Grid size={{ xs: 12, md: 6 }} >

          <h1>We are Xonad Baltic!</h1>
            <p>
              Xonad Baltic develops and produce high quality vitamin and mineral premixes to fortify for dairy food. Our company develops customer-specific solutions for dairy food, beverages and especially baby food. Our team will develop the right compound for your product.

            </p>
            <p>
              Xonad Baltic has several productions site so it can fulfill any order in a short time. You can order any volume of premixes, from 1 kg to dozens of tons. Our production sites are certified.

            </p>
        </Grid>
        <Grid>
        <div style={{ position: 'relative', border: '#999 1px solid'}}>
          <div style={{position: 'absolute', top: 0, left: '0', width: '300px', height: '500px', zIndex: 100 }}>
<img src='/images/gates.svg' />

          </div>


        </div>
        </Grid>
<Grid>

</Grid>


    </Grid>
  );
}
