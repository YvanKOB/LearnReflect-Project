import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountDown from "./PreRelease/CountDown";
import HomePage from "./LearnReflect Discipline/HomePage";
import LoginPage from "./User/LoginPage";
import RegisterPage from './User/RegisterPage'
import AboutPage from './LearnReflect Discipline/AboutPage.js'
import Futures from "./User/FuturesPage";
import AuthProvider from "./Components/Authanciation/AuthProvider";
import Dashboard from './User/Dashboard.js'
import PrivateRoute from 'src/Components/Authanciation/PrivateRoute.js'
import PrivateRouteFuture from 'src/Components/Authanciation/PrivateRouteFuture.js'
import FutureZero from './LearnReflect Discipline/FutureZero.js'
import LandingPage from 'src/MainSite/LandingPage.js'
import ShopPage from "./Pages/Shop/Shop";
import ProductCard from "./Pages/Shop/ProductCard";
import Contact from "./Pages/Contact/Contact";
import Payment from "./Pages/Shop/PaymentStripe/Payment";
import Completion from './Shop/PaymentStripe/Completion.js'
import AIUpscalePage from './LearnReflectAI/AIUpscalePage.js'
import AdminRoute from './AdminPanel/AdminRoute.js'
import Admin from './AdminPanel/Admin.js'
import Timer from "./PreRelease/TimerComponent";
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <AuthProvider>
          <Routes>
            <Route path="/LR" element={<LandingPage />} />
            <Route path="/Timer" element={<Timer />} />
            <Route path="/CountDown" element={<CountDown />} />
            <Route path="/Homepage" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/Register" element={<RegisterPage />} />
            <Route path="/AboutPage" element={<AboutPage />} />
            <Route path="/FutureZero" element={<FutureZero />} />
            <Route path="/AIUpscalePage" element={<AIUpscalePage />} />
            <Route path="/Futures" element={<PrivateRouteFuture><Futures /></PrivateRouteFuture>}/>
            <Route path="/ShopPage" element={<ShopPage />} />
            <Route path="/ProductCard" element={<ProductCard />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Payment" element={<Payment />} />
            <Route path="/Completion" element={<Completion />} />
            <Route path="/Dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}/>
            <Route path="/Admin" element={<AdminRoute><Admin /></AdminRoute>}/>
          </Routes>
        </AuthProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
