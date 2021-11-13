import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://protected-mesa-72956.herokuapp.com/allProducts")
            .then(res => res.json())
            .then((data) => setProducts(data));
    }, []);
    const showData = products.slice(0, 6)
    return (

        <Container>
            <h1 style={{ textAlign: "center", marginTop: "50px", fontWeight: "800" }}>Products</h1>
            <div >
                <div className="row container">
                    {showData?.map((pd) => (
                        <div className="col-md-6 col-lg-4">
                            <div className="p-3 m-2">
                                <CardGroup>
                                    <Card style={{ height: "500px" }}>
                                        <Card.Img style={{ height: "300px" }} variant="top" src={pd.image} />
                                        <Card.Body>
                                            <Card.Title>{pd.name}</Card.Title>
                                            <Card.Text>
                                                {pd.description.slice(0, 60)}
                                            </Card.Text>
                                            <Card.Text>
                                                Price: {pd.price}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </CardGroup> <br />
                                <Link to={`/details/${pd._id}`}>
                                    {" "}
                                    <button className="btn btn-success">Order Now</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>


    );
}


export default Products;