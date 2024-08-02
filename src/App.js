import "./App.css";
import { Routes, Route } from "react-router-dom";
import SubscriptionIndex from "./containers/subscriptionContainer";
import NavBar from "./layouts/NavBar";
import PlanIndex from "./containers/plansContainer";
import PlanShow from "./containers/planContainer";
import paths from "./constants/Routes";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={paths.plans} element={<PlanIndex />} />
        <Route path={paths.subscription} element={<SubscriptionIndex />} />
        <Route path={paths.plan} element={<PlanShow />} />
      </Routes>
    </>
  );
}

export default App;
