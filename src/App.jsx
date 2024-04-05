import { BrowserRouter, Route, Routes } from "react-router-dom";

import PATHS from "./const/paths";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import PrivateRoute from "./components/PrivateRoute";
import CourseOrderPage from "./pages/CourseOrderPage";
import ProfilePage from "./pages/ProfilePage";
import MyInfo from "./pages/ProfilePage/MyInfo";
import MyCourse from "./pages/ProfilePage/MyCourse";
import MyPayment from "./pages/ProfilePage/MyPayment";
import CoursesPage from "./pages/CoursesPage";
import CourseDetailPage from "./pages/CourseDetailPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import PaymentPage from "./pages/PaymentPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import PrivacyPage from "./pages/PrivacyPage";
import NotfoundPage from "./pages/NotfoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.HOME} element={<MainLayout />}>
          <Route index element={<HomePage />} />

          <Route element={<PrivateRoute redirectPath={PATHS.HOME} />}>
            <Route path={PATHS.COURSE.ORDER} element={<CourseOrderPage />} />
            <Route path={PATHS.PROFILE.INDEX} element={<ProfilePage />}>
              <Route index element={<MyInfo />} />
              <Route path={PATHS.PROFILE.MY_COURSE} element={<MyCourse />} />
              <Route path={PATHS.PROFILE.MY_PAYMENT} element={<MyPayment />} />
            </Route>
          </Route>

          <Route path={PATHS.COURSE.INDEX} element={<CoursesPage />} />
          <Route path={PATHS.COURSE.DETAIL} element={<CourseDetailPage />} />

          <Route path={PATHS.BLOG.INDEX} element={<BlogPage />} />
          <Route path={PATHS.BLOG.DETAIL} element={<BlogDetailPage />} />

          <Route path={PATHS.PAYMENT} element={<PaymentPage />} />
          <Route path={PATHS.CONTACT} element={<ContactPage />} />
          <Route path={PATHS.ABOUT} element={<AboutPage />} />
          <Route path={PATHS.PRIVACY} element={<PrivacyPage />} />

          <Route path="*" element={<NotfoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
