import React from "react";
import "./Blogs.css";
const Blogs = () => {
  return (
    <div className="font-mono text-white blogs">
      <h1> Difference between authorization and authentication?</h1>
      <p>
        <span>authorization:</span> The authorization is actually verifyin the
        user and give him access to use a specific service, the user usually
        can't chnage anything, autorization proccess is just about just knwing
        who the user is. <br />
        <span>Authentication:</span> Authentication is actually some a specific
        features or data user acces to change,
      </p>
      <h1>
        Why are you using firebase? What other options do you have to implement
        authentication?
      </h1>
      <p>
        firebase is a very auhentication system to use, it's has multiple
        features, it's provides backend services, hosting, anlytics, many types
        of authentications like email/password and google, github, facebook and
        much more. So, it's a better option to use. Some alternative of
        firebase. Back4App, Oauth, flutter, AWS Amplify. Kuzzle.
      </p>
      <h1>
        What other services does firebase provide other than authentication
      </h1>
      <p>
        {" "}
        Firebase base provides other that authentication, like, storage,
        realtime database, hosting, machine learning, anlytics, firebse
        database, firebase can be used for multiple system like, Web, Ios
        development, android development, unity game development and many more.
      </p>
    </div>
  );
};

export default Blogs;
