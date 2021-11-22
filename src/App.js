import React from "react";
import NavBar from "./components/NavBar";
import AllMeetups from "./pages/AllMeetups";
import AddNewMeetups from "./pages/AddNewMeetups";
import Favorities from "./pages/Favorities";
import Layout from "./layout/Layout";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Layout>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<AllMeetups />} />
          <Route exact path="/add_meetups" element={<AddNewMeetups />} />
          <Route exact path="/favorities" element={<Favorities />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
