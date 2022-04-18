import React from 'react';

const LatestOnline = ({ latest }) => {
    const { name, img } = latest;
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-3'>
            <div className="card" style={{ width: "18rem" }}>
                <img style={{ height: "170px" }} src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-dark">Read More...</a>
                </div>
            </div>
        </div>
    );
};

export default LatestOnline;