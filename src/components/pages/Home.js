import React, { useState, useEffect } from "react";
import { connect, useDispatch } from 'react-redux';
import { checkHealth } from "../../actions/healthCheckAction";

const Home = (healthcheck) => {

    const dispatch = useDispatch();
    const checkHealthFnc = () => {
        dispatch(checkHealth());
        console.log(healthcheck);
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }}
        >
            <h1>This is the home page</h1>
            <button onClick={checkHealthFnc}>Check Api</button>
        </div>
    );
};

const mapStateProps = (state) => ({
    healthcheck: state.healthcheck
})

export default connect(mapStateProps)(Home);
