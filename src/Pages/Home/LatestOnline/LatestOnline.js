import React from 'react';

const LatestOnline = ({ latest }) => {
    const { name, img } = latest;
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-3'>
            <div className="card" style={{ width: "18rem" }}>
                <img style={{ height: "170px" }} src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Build powerful, fast, user-friendly and reactive web apps
                        JavaScript with ease Learn all about React Hooks and React Components</p>
                    <a href="#" className="btn btn-dark">Read More...</a>
                </div>
            </div>
        </div>
    );
};

export default LatestOnline;