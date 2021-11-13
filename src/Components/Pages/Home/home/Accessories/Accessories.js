import { Container, Grid, Box } from '@mui/material';
import React from 'react';
import accessories from '../../../../../Images/accesories.png'
import accessories1 from '../../../../../Images/accessories1.png'
import accessories2 from '../../../../../Images/accessories2.png'





const Accessories = () => {
    return (
        <>
            <Container sx={{ marginTop: "100px" }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6} className="access">
                            <img style={{ width: "100%", height: "400px", borderRadius: "15px" }} src={accessories} alt="/" />
                        </Grid>
                        <Grid item xs={6} md={3} className="access">
                            <img style={{ width: "100%", height: "200px", marginTop: "100px", borderRadius: "15px" }} src={accessories1} alt="/" />
                        </Grid>
                        <Grid item xs={6} md={3} className="access">
                            <img style={{ width: "100%", height: "400px", borderRadius: "15px" }} src={accessories2} alt="/" />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    );
};

export default Accessories;