<<<<<<< HEAD
import { useState } from "react";
import MainLayout from "./layout/MainLayout";
import Homepage from "./pages/Homepage";
import Notfoundpage from "./pages/Notfoundpage";
import BlogDetailpage from "./pages/BlogDetailpage";
import ChangePassword from "./pages/ChangePassword";
import Aboutpage from "./pages/Aboutpage";
import Blogpage from "./pages/Blogpage";
import ContactPage from "./pages/ContactPage";
import CourseDetailPage from "./pages/CourseDetailPage";
import CourseOrderPage from "./pages/CourseOrderPage";
import CoursesPage from "./pages/CoursesPage";
import PaymentPage from "./pages/PaymentPage";
import PrivacyPage from "./pages/PrivacyPage";
import ProfilePage from "./pages/ProfilePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyInfo from "./pages/ProfilePage/MyInfo";
import MyCourse from "./pages/ProfilePage/MyCourse";
import MyPayment from "./pages/ProfilePage/MyPayment";
=======
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import BlogDetailPage from "./pages/BlogDetailPage";
import BlogPage from "./pages/BlogPage";
import CourseDetailPage from "./pages/CourseDetailPage";
import CourseOrderPage from "./pages/CourseOrderPage";
import CoursesPage from "./pages/CoursePage";
import HomePage from "./pages/HomePage";
import PATHS from "./const/paths";
import ProfilePage from "./pages/ProfilePage";
import MyInfo from "./pages/ProfilePage/MyInfo";
import MyCourse from "./pages/ProfilePage/MyCourse";
import MyPayment from "./pages/ProfilePage/MyPayment";
import PaymentPage from "./pages/PaymentPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import PrivacyPage from "./pages/PrivacyPage";
import NotfoundPage from "./pages/NotfoundPage";
import PrivateRoute from "./components/PrivateRoute";
>>>>>>> 5597a8e (update)

function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homepage />} />

          <Route path="/course" element={<CoursesPage />} />
          <Route path="/course/:courseId" element={<CourseDetailPage />} />
          <Route path="/course-order" element={<CourseOrderPage />} />

          <Route path="/blog" element={<Blogpage />} />
          <Route path="/blog/:blogId" element={<BlogDetailpage />} />

          <Route path="/profile" element={<ProfilePage />}>
            <Route index element={<MyInfo />} />
            <Route path="/profile/my-course" element={<MyCourse />} />
            <Route path="/profile/my-payment" element={<MyPayment />} />
          </Route>

          <Route path="/payment-method" element={<PaymentPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/privacy" element={<PrivacyPage />} />

          <Route path="*" element={<Notfoundpage />} />
=======
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
>>>>>>> 5597a8e (update)
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
