import React from 'react';
import "../Blog/Blog.css"

const Blog = () => {
    return (
        <div className='container'>
            <h1 className='text-center text-primary mt-3'>Q and A </h1>
            <div className='row'>
                <div className='col-lg-6 col-sm-6 mt-5'>
                    <h3>Difference between javascript and nodejs?</h3>
                    <p>avaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.</p>

                </div>
                <div className='col-lg-6 col-sm-6 mt-5'>
                    <h3>When should you use nodejs and when should you use mongodb?</h3>
                    <p>MongoDB and NodeJS are two different technologies.
                         MonogDB is a database system which gives you a chance
                          to efficiently store documents in a database and to perform operations like data updates, or to search documents by some criterias..</p>

                </div>
                <div className='col-lg-6 col-sm-6 mt-5'>
                    <h3>Differences between sql and nosql databases.?</h3>
                    <p>SQL databases are vertically scalable, while NoSQL 
                        databases are horizontally scalable. SQL databases 
                        are table-based, while NoSQL databases are document,
                         key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>

                </div>
                <div className='col-lg-6 col-sm-6 mt-5'>
                    <h3>What is the purpose of jwt and how does it work?</h3>
                    <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p>

                </div>

            </div>
            
        </div>
    );
};

export default Blog;