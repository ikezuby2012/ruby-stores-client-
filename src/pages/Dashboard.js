import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from "react-router-dom";

import MainDash from '../components/DashboardComponents/MainDash';


const Dashboard = () => {
    const user = useSelector(state => state.user);
    // const dispatch = useDispatch();


    const { email, name } = user.user.user;

    if (!user.loggedIn) {
        return <Redirect to="/login" />
    }

    return (
        <MainDash username={name}>
            <main className="dashboard-main">
                hello {name}!
                <div className="loading-spinner" />
            </main>
        </MainDash>
    );
}

export default Dashboard;
