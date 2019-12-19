import React from 'react';
import './body.css';

export function Body(props) {
    return <div className="container-fluid vh-100 im">
        <div className="row">
            <div className="col-xl-12 ett">
                <div className="tett text-center text-white">iMarc is a Social Community Website for IOS Developers .<br></br>
                <p className="mmr">Enjoy</p>
                
                    </div>
            </div>
        <div className="col-xl-4 ">
            <div className="card cdd p-3 my-5 ch mx-5">
                <div className=" text-center card-title font-weight-bolder h2 bt btn  btn-primary">Login</div>
                <div className="card-body p-3">
                    <div className="font-weight-bold text-align-center tet">Login to Your Account and Communicate with ur fellow Developers wherever You're !</div>
                </div>
            </div>
        </div>
        <div className="col-xl-4 ">
            <div className="card cdd p-3 mx-5 my-5 ch ">
                <div className=" text-center card-title font-weight-bolder h2 bt btn  btn-danger">About</div>
                <div className="card-body p-3">
                    <div className="font-weight-bold text-align-center tet">Know About iMarc Community Website.
                    About Getting Help from Professional developers,communications,linkedIn profiles,Downloads,Documentation</div>
                </div>
            </div>
        </div>
        <div className="col-xl-4 ">
            <div className="card cdd p-3 my-5 ch mx-5">
                <div className=" text-center card-title font-weight-bolder h2 bt btn  btn-warning">Register</div>
                <div className="card-body p-3">
                    <div className="font-weight-bold text-align-center tet">SignUp Today and Get into the World Of IOS Development !</div>
                </div>
            </div>
        </div>
        
        
        
    </div>
    </div>
}
