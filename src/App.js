import './App.css';
import { Routes, Route } from 'react-router-dom'
import SubscriptionIndex from './pages/SubscriptionIndex';
import NavBar from './layouts/NavBar';
import PlanIndex from './pages/PlanIndex';
import PlanShow from './pages/PlanShow';

function App() {
  return <>
  <NavBar/>
   <Routes>
     <Route path="/" element={<PlanIndex/>}/>
     <Route path="/subscriptions" element={<SubscriptionIndex/>}/>
     <Route path="/plans/:id" element={<PlanShow/>}/>
   </Routes>
  </>
}

export default App;
