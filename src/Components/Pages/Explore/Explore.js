import React, { useEffect, useState } from 'react';
import { CardGroup, Card } from 'react-bootstrap';
import Navigation from '../Home/Shared/Navigation/Navigation';

const Explore = () => {
    const [displays, setDisplays] = useState([]);

    useEffect(() => {
        fetch('https://protected-mesa-72956.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => setDisplays(data));
    }, [])

    // const showData=displays.slice(0,6)
    // console.log(showData)

    return (
        <div id="services">
            <Navigation></Navigation>
            <div className="row container">
                {displays?.map((display) => (
                    <div className="col-md-6 col-lg-4">
                        <div className="p-3 m-2">
                            <CardGroup>
                                <Card style={{ height: "500px" }}>
                                    <Card.Img style={{ height: "300px" }} variant="top" src={display.image} />
                                    <Card.Body>
                                        <Card.Title>{display.name}</Card.Title>
                                        <Card.Text>
                                            {display.description.slice(0, 60)}
                                        </Card.Text>
                                        <Card.Text>
                                            Price: {display.price}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </CardGroup>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Explore;