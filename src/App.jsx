import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import HomeEN from "./pages/HomeEN";
import RSVP from "./pages/RSVP";
import RSVPEN from "./pages/RSVPEN";
import Contacts from "./pages/Contacts";
import ContactsEN from "./pages/ContactsEN";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/it" element={<Home />} />
        <Route path="/en" element={<HomeEN />} />
        <Route path="/it/rsvp" element={<RSVP />} />
        <Route path="/en/rsvp" element={<RSVPEN />} />
        <Route path="/it/contacts" element={<Contacts />} />
        <Route path="/en/contacts" element={<ContactsEN />} />

        {/* Catch-all route for 404s */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;