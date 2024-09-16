import Grid from "@mui/material/Grid2"

export default function RootLayout({
    //children,
  }: {
    children: React.ReactNode
  }) {



    return (
<div>
        <Grid container spacing={1} p={{ xs:0, sm: 1, md: 2}}
            paddingRight={0} py={0} flexGrow={5}
            my={3} direction={'row'}>
           <div className='container' style={{ paddingRight: '20px', width: '100%' }} >


            <Grid size={12}>
              <div style={{ width: '100%', position: 'relative' }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2032.9342523216915!2d24.64445263577148!3d59.367436209750615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469295785b6d33e9%3A0xa151ceb1bd39440e!2sR%C3%A4nnaku%20puiestee%2012%2C%2010917%20Tallinn%2C%20Estonia!5e0!3m2!1sen!2sde!4v1726299793024!5m2!1sen!2sde"
                  width="100%" height="450" style={{ border: 0 }} allowFullScreen={false} loading='lazy' referrerPolicy='no-referrer-when-downgrade'></iframe>
                <div className="contacts">
                  <div className='header'>CONTACTS</div>
                  <div>
                    <label style={{ color: '#45703E' }}>WhatsApp:</label><br />
                    <a className="top-nav-item" href="https://wa.me/37368981123"><i className="fas fa-phone fa-1x"></i>+373 689 81 123</a>
                  </div>
                  <div>
                    <label style={{ color: '#45703E' }}>Email:</label>

                    <br />
                    <a className="top-nav-item" href="mailto:contact@xonad-baltic.com"><i className="fas fa-phone fa-1x"></i>contact@xonad-baltic.com</a>
                    <br />
                    <a className="top-nav-item" href="mailto:xonadbaltic@gmail.com"><i className="fas fa-phone fa-1x"></i>xonadbaltic@gmail.com</a>
                  </div>
                </div>
              </div>
            </Grid>
          </div>

        </Grid>
        <Grid container spacing={0} p={2} paddingRight={0} py={3} my={0} flexWrap={'wrap'} wrap="wrap"
          sx={{ background: '#89B680', border: 'none' }} alignItems={'center'} >

          <Grid size={{ xs: 12, sm: 6, md: 5 }} >
            <div className="addressHdr">Address</div>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 7 }}>
            <div className='address'>
              Harju maakond, Tallinn,<br />
              Nomme Linnaosa, Rannaku pst 12,<br />
              10917, Estonia</div>

          </Grid>

        </Grid>
    </div>
    )
  }
