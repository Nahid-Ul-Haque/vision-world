import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Box from '@mui/material/Box';
import "./Dashboard.css";
import { Button } from '@mui/material';
import useAuth from "../../Hooks/useAuth";
import MyOrder from "../../User/MyOrder/MyOrder";
import Review from "../../User/Review/Review";
import AddProducts from "../addProducts/AddProducts";
import MakeAdmin from "../Makeadmin/MakeAdmin";
import ManageProducts from "../ManageProducts/ManageProducts";
import Footer from "../../Home/home/Footer/Footer";
import Navigation from "../../Home/Shared/Navigation/Navigation";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import ManageOrders from "../ManageOrders/ManageOrders";


const Dashbaord = () => {
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();

    return (
        <div>
            <Navigation></Navigation>
            <div className="dashboard-container ">
                <div className="row">
                    <div className="col-md-3 ">
                        <div className="dashboard text-center">
                            <h5>Dashboard</h5>
                            <Link to={`${url}`}>
                                <li className="dashboard-menu mt-5">Pay</li>
                            </Link>

                            <Link to={`${url}/review`}>
                                <li className="dashboard-menu mt-5">Review</li>
                            </Link>
                            <Link to={`${url}/myorder`}>
                                <li className="dashboard-menu mt-5">My Orders</li>
                            </Link> <br /> <br />
                            {admin && <Box>
                                <Link to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link> <br /> <br />
                                <Link to={`${url}/addproducts`}><Button color="inherit">Add Products</Button></Link> <br /> <br />
                                <Link to={`${url}/manageproducts`}><Button color="inherit">Manage Products</Button></Link> <br /> <br />
                                <Link to={`${url}/manageallorder`}><Button color="inherit">Manage All Orders</Button></Link> <br /> <br />
                            </Box>}
                        </div>
                    </div>
                    <div className="col-md-9">
                        <Switch>
                            <Route exact path={path}>
                                <MyOrder></MyOrder>
                            </Route>
                            <Route exact path={`${path}/review`}>
                                <Review></Review>
                            </Route>
                            <Route exact path={`${path}/myorder`}>
                                <MyOrder></MyOrder>
                            </Route>
                            <AdminRoute exact path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </AdminRoute>
                            <AdminRoute exact path={`${path}/addproducts`}>
                                <AddProducts></AddProducts>
                            </AdminRoute>
                            <AdminRoute exact path={`${path}/manageproducts`}>
                                <ManageProducts></ManageProducts>
                            </AdminRoute>
                            <AdminRoute exact path={`${path}/manageallorder`}>
                                <ManageOrders></ManageOrders>
                            </AdminRoute>
                        </Switch>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashbaord;
