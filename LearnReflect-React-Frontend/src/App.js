import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountDown from "./PreRelease/CountDown";
import HomePage from "./LearnReflect Discipline/HomePage";
import LoginPage from "./User/LoginPage";
import AboutPage from "./LearnReflect Discipline/AboutPage.js";
import Futures from "./User/FuturesPage";
import AuthProvider from "./Components/Authanciation/AuthProvider";
import Dashboard from "./User/Dashboard.js";
import PrivateRoute from "./Components/Authanciation/PrivateRoute.js";
import PrivateRouteFuture from "./Components/Authanciation/PrivateRouteFuture.js";
import FutureZero from "./LearnReflect Discipline/FutureZero.js";
import LandingPage from "./MainSite/LandingPage.js";
import ShopPage from "./Shop/Shop.js";
import ProductCard from "./Shop/ProductCard.js";
import Contact from "./Contact/Contact.js";
import Payment from "./Shop/PaymentStripe/Payment.js";
import Completion from "./Shop/PaymentStripe/Completion.js";
import AIUpscalePage from "./AI-LearnReflect/AIUpscalePage.js";
import Admin from "./AdminPanel/Admin.js";
import AdminRoute from "./Components/Authanciation/AdminRoute.js";
import Timer from "./Components/TimerComponent.js";
import Inspire from "./Inspire/Inspire.js";
import RegistrationForm from "./User/UserRegistration.js";
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <AuthProvider>
          <Routes>
             <Route path="/Contact" element={<Contact />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/Register" element={<RegistrationForm />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/Timer" element={<Timer />} />
            <Route path="/CountDown" element={<CountDown />} />
            <Route path="/Homepage" element={<HomePage />} />
            <Route path="/AboutPage" element={<AboutPage />} />
            <Route path="/AIUpscalePage" element={<AIUpscalePage />} />
            <Route path="/FutureZero" element={<FutureZero />} />
            <Route path="/Inspire" element={<Inspire />} />
            <Route
              path="/Futures"
              element={
                <PrivateRouteFuture>
                  <Futures />
                </PrivateRouteFuture>
              }
            />
            <Route path="/ShopPage" element={<ShopPage />} />
            <Route path="/ProductCard" element={<ProductCard />} />
            <Route path="/Payment" element={<Payment />} />
            <Route path="/Completion" element={<Completion />} />
            <Route
              path="/Dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/Admin"
              element={
                <AdminRoute>
                  <Admin />
                </AdminRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
