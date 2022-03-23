import React, {useEffect} from "react"
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getThing } from "../redux/things/things";
import NavBar from './nav-bar';
import Things from './things';
import '../styles/index.css'

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getThing());
  }, [dispatch]);

  return (
  <Router>
    <NavBar />
    <Routes>
      <Route
        exact
        path="/"
        element={(
          <h2
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '80vh',
              margin: 0,
            }}
          >
            Welcome to Greeting App!
          </h2>
        )}
      />
      <Route path="/api/things" element={<Things />} />
    </Routes>
  </Router>
  )
}

export default App;
