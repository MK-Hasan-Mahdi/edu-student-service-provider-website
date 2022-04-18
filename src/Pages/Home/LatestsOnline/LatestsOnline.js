import React from 'react';
import latest1 from '../../../images/latests-online/latest1.jpg';
import latest2 from '../../../images/latests-online/latest2.jpg';
import latest3 from '../../../images/latests-online/latest3.jpg';
import latest4 from '../../../images/latests-online/latest4.jpg';
import LatestOnline from '../LatestOnline/LatestOnline';

const LatestsOnline = () => {
    const latestsOnline = [
        { id: 1, name: 'React Router', img: latest1 },
        { id: 2, name: 'React Router', img: latest2 },
        { id: 3, name: 'React Router', img: latest3 },
        { id: 4, name: 'React Router', img: latest4 }
    ]
    return (
        <div className='container'>
            <h2 className='text-primary text-center mt-5'>My Latest Article</h2>
            <div className='row mb-5'>
                {
                    latestsOnline.map(latest => <LatestOnline
                        key={latest.id}
                        latest={latest}
                    ></LatestOnline>)
                }
            </div>
        </div>
    );
};

export default LatestsOnline;