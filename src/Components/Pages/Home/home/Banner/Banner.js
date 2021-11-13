import Grid from '@mui/material/Grid';
import { Typography, Button, Container } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import sj8 from '../../../../../Images/sj8-pro.png'




const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}

const Banner = () => {

    return (
        <section>
            <Container sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                        <Box>
                            <Typography variant="h3" sx={{ fontWeight: "700", fontStyle: "italic" }}>
                                Your Vision Camera <br />
                                Starts Here
                            </Typography>
                            <Typography variant="h6" sx={{ my: 3, fontSize: 13, fontWeight: 300, color: 'gray' }}>
                                HERO10 BLACK + Free Dual Battery
                                Charger + Spare Battery
                                Includes 1-year GoPro Subscription¹
                            </Typography>
                            <Button variant="contained" style={{ backgroundColor: '#5D956E' }}>Shop Now</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} style={verticalCenter} >
                        <img style={{ width: '350px' }} src={sj8} alt="" />
                    </Grid>
                </Grid>
            </Container>
            <Container style={{ marginTop: "-42px" }}>
                <Box sx={{ marginRight: "65px", marginLeft: "65px" }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid item xs={4} sm={4} md={4}>
                            <Typography sx={{ background: "#000000", padding: '40px 5px', fontWeight: 700, textAlign: "center", color: "white" }}>
                                Opening Hours
                            </Typography>
                        </Grid>
                        <Grid item xs={4} sm={4} md={4}>
                            <Typography sx={{ background: "#000000", padding: '40px 5px', fontWeight: 700, textAlign: "center", color: "white" }}>
                                Visit Our Location
                            </Typography>
                        </Grid>
                        <Grid item xs={4} sm={4} md={4}>
                            <Typography sx={{ background: "#000000", padding: '40px 5px', fontWeight: 700, textAlign: "center", color: "white" }}>
                                Contact Us
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </section>
    );
};

export default Banner;