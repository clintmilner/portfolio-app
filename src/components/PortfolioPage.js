import React from 'react';
import {Link} from 'react-router-dom';

const PortfolioPage = (props) => {

    const renderView = (props) => {
        if(props.match.params.id){
            return(
                    <h4>Project {props.match.params.id}</h4>
                )
        }
        else {
            return (
                <div>
                    <p>Use the links below to view various projects</p>
                    <Link to='/portfolio/311'>Project 311</Link>
                    <Link to='/portfolio/816'>Project 816</Link>
                </div>
                )
        }
    };

    return (
        <div>
            <h1>Projects</h1>
            {renderView(props)}
        </div>
    );
};

export default PortfolioPage;