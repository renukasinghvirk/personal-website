import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CvPage from "./pages/CvPage";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="cv" element={<CvPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}
