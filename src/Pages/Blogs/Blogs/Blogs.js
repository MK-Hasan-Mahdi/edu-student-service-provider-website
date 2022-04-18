import React from 'react';

const Blogs = () => {
    return (
        <div style={{ height: "100vh" }} className='container mt-2'>
            <h2 className='text-center text-success'>My Blogs</h2>
            <div className='mt-3'>
                <h6>1. Difference between authorization and authentication</h6>
                <p>Ans: <strong>Authorization:</strong> Authorization means special authority to create user or delete user. Those who have authorization they only can play role to give authentication. In authorization process users are verified to do something. Authorization or authorities all things are not visible to users. <br />
                    <strong>Authentication:</strong> Authentication means it has been given some power to do something by authority. After authentication user can play some role. Authentication can be modified. Valid user can process role. Required some privilege from authorization.
                </p>
                <h6>2. Why are you using firebase? What other options do you have to implement authentication?</h6>
                <p>Ans: Firebase is a authentication build system to implement some specail features to checking or giving various types. It can secure website from unauthorized users. Using firebase we can authentisize various users and generate in our website or system. There have live and smooth user's authentication features which helps to verify users. Users also have smooth feelings as they can use their other social logging accounts. <br />
                    There have some other authentication implementation provider, like - Okta, Auth0, OneLogin, JumpCloud, Microsoft Azure etc.
                </p>
                <h6>3. What other services does firebase provide other than authentication</h6>
                <p>Ans: Firebase authentication solution company have many features besides authentication. They are: <br />
                    - Firestore Database <br />
                    - Realtime Database <br />
                    - Storage system <br />
                    - Hosting Facilities <br />
                    - Google Analytics <br />
                    - Cloud Messaging
                </p>
            </div>
        </div>
    );
};

export default Blogs;