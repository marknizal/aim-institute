import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/home-page";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/aim-institute/" element={<Homepage />} />
    </Routes>
  );
};

export default AppRoutes;
