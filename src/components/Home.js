import React, { useState,useEffect } from "react";
import { Container, Button } from "reactstrap";

const Home = () => {

  useEffect(()=>{
    document.title="Home"
  },[]);
  return (
    <div className="text-center p-5 my-5 ">
      <Container>
        <h1>Explaining2you</h1>
        <p>
          This is developed by Mukul for learning purposes. The backend is on Spring Boot, and the frontend is on React JS.
        </p>
        <Button color="primary" outline>
          Start Using
        </Button>
      </Container>
    </div>
  );
};

export default Home;
