import React from 'react';
import loading from "../Assets/Images/icons/loader.gif";

const Loader = () => {
    return (
        <div className='loader-bg'>
            <img src={loading} alt="loading" />
        </div>
    )
}

export default Loader;