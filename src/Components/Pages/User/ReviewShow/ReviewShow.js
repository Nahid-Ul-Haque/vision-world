import { Rating, Typography, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';

const ReviewShow = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch("https://protected-mesa-72956.herokuapp.com/allreview")
            .then(res => res.json())
            .then((data) => setReview(data));
    }, []);
    return (
        <Container>
            <h1 style={{ textAlign: "center", marginTop: "50px", fontWeight: "800" }}>Review</h1>
            <div >
                <div className="row container">
                    {review?.map((rvw) => (
                        <div className="col-md-6 col-lg-4">
                            <div className="p-3 m-2">
                                <CardGroup>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>{rvw.name}</Card.Title>
                                            <Card.Text>
                                                {rvw.email}
                                            </Card.Text>
                                            <Card.Text>
                                                {rvw.comments}
                                            </Card.Text>
                                        </Card.Body>
                                        <Typography sx={{ textAlign: "center" }} component="legend">Rating</Typography>
                                        <Stack spacing={1}>
                                            <Rating name="half-rating" defaultValue={2.5} precision={1} />
                                        </Stack>
                                    </Card>
                                </CardGroup>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default ReviewShow;