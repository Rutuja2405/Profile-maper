import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProfilesProvider } from "./context/ProfilesContext";

import ProfileList from "./components/ProfileList";
import MapView from "./components/MapView";
import ProfileDetails from "./components/ProfileDetails";
import AdminPanel from "./components/AdminPanel";
import SearchFilter from "./components/SearchFilter";

const App = () => {
  return (
    <ProfilesProvider>
      <Router>
        <div style={{ maxWidth: "1200px", margin: "auto", padding: "20px" }}>
          <h1>Profile Mapper</h1>
          <SearchFilter />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <ProfileList />
                  <MapView />
                </>
              }
            />
            <Route path="/profile/:id" element={<ProfileDetails />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </div>
      </Router>
    </ProfilesProvider>
  );
};

export default App;
