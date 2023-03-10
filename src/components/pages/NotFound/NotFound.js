import React from 'react';
import classes from "./NotFound.module.css";
import {Link} from "react-router-dom";
import Header from "../../Header/Header";

const NotFound = () => {
    return (
        <>
        <Header/>

    <div className={classes.container}>
            <h2 className={classes.found}>NotFound</h2>
           <h1  className={classes.name}>
               404
           </h1>
               <Link  to="/">  <button className={classes.button} > Back</button></Link>

        </div>
        </>
    );
};

export default NotFound;