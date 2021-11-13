import { Container, Typography, Box, Grid, Button } from '@mui/material';
import React from 'react';
import subscribe from "../../../../../Images/subscription.png"

const Subscribe = () => {
    return (
        <>

            <Container sx={{ marginTop: "100px" }}>
                <Typography variant="h4" sx={{ mt: 5, fontWeight: "800" }}>
                    SubsCribe to GoPro
                </Typography><br />
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6">
                                Automatically upload footage from your GoPro to the cloud
                            </Typography> <br />
                            <Typography variant="h6">
                                Unlimited cloud backup at 100% quality1
                            </Typography> <br />
                            <Typography variant="h6">
                                Unlimited use of the Quik app
                            </Typography> <br />
                            <Typography variant="h6">
                                Up to 50% off at GoPro.com2
                            </Typography> <br />
                            <Typography variant="h6">
                                Guaranteed camera replacement3
                            </Typography> <br /> <br />
                            <Button variant="contained" style={{ backgroundColor: 'black' }}>Subscribe Now</Button>
                        </Grid>
                        <Grid item xs={6} md={6} >
                            <img style={{ width: "100%", borderRadius: "15px" }} src={subscribe} alt="/" />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    );
};

export default Subscribe;