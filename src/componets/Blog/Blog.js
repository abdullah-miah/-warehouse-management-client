import React from 'react';
import "../Blog/Blog.css"

const Blog = () => {
    return (
        <div className='w-75 mx-auto'>
            <h3 className='text-center my-4 text-primary'> Some Q & A</h3>
            <div className='blog'>
                <div>
                    <h2>Difference between authorization and authentication?</h2>
                    <p>authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to.</p>
                </div>
                <div>
                    <h2>Why are you using firebase?What other options do you have to implement authentication?</h2>
                    <p>Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick.
                    Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                    </p>
                </div>
                <div>
                    <h2>What other services does firebase provide other than authentication?</h2>
                    <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more..</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;