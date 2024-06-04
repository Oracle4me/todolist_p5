import React from "react";
import "../App.css";
import ListToDo from "../components/ListToDo";
import ShowList from "../components/ShowList";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="landing-wrap-page">
      <div className="landing-page">
        <ListToDo />
        <ShowList />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
