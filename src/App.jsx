import React from "react";
import { useState, useEffect } from "react";
import { Header, Footer } from "./components";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import {Outlet} from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      // .finally(() => setLoading(true));
  }, []);
  return !loading ? (
    <>
      <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
        <div className="w-full">
          <Header />
          <main>
            <Outlet></Outlet>
          </main>
          <Footer />
        </div>
      </div>
    </>
  ) : null;
}

export default App;
