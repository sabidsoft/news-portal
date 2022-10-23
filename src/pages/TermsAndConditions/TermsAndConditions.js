import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h1>Terms and Conditions</h1>
            <Link to={'/register'}>Go back to register</Link>
        </div>
    );
};

export default TermsAndConditions;