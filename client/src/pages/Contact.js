import React from "react";
import Layout from "./../componants/layout/Layout";
// import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="https://www.girnarcare.com/wp-content/uploads/2021/06/back-office-support-for-business-880x450.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            Any query and info about prodduct feel free to call anytime we 24X7
            Avaiable
          </p>
          <p className="mt-3">
            <h3>email</h3>  : www.help@clocksy-app.com
          </p>
          <p className="mt-3">
          <h3>phone</h3>  : +91 8849129947
          </p>
          <p className="mt-3">
          <h3>Toll Free</h3>  : 1800-0000-0000 
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;