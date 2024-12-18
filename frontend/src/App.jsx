import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Aboutus from './components/aboutus/Aboutus';
import Homepage from './components/homepage/Homepage';
import Gallery from './components/gallery/Gallery';

import Donate from './components/donate/Donate';
import Receipt from './components/donate/Receipt';


import Login from './components/admin/auth/Login';
import Contact from './components/contact/Contact';
import Work from './components/work-with-us/Work';
import Work2 from './components/work-with-us-2/Work2';
import Logout1 from './components/admin/auth/Logout1';
import Forget from './components/admin/auth/ForgetRequest'
import JournerySoFar from './components/journey-so-far/JourneySoFar';
import ReportAnIssue from './components/report-an-issue/ReportAnIssue';

import AdminDashboard from "./components/admin/dashboard/AdminDashboard";
import AdminReport from "./components/admin/report/AdminReport";
import AdminMantraOfTheMonth from "./components/admin/mantra-of-the-month/AdminMantraOfTheMonth";
import AdminGallery from "./components/admin/pages/gallery/AdminGallery";
import AdminEvents from "./components/admin/pages/events/AdminEvents";
import AdminContactus from "./components/admin/pages/contact-us/AdminContactus";
import AdminHome from "./components/admin/pages/home/AdminHome";
import AdminWorkWithUs from "./components/admin/pages/work-with-us/AdminWorkWithUs";
import AdminWorkWithUs1 from "./components/admin/pages/work-with-us-1/AdminWorkWithUs1";
import Shop from './components/shop/Shop';


import Events from './components/events/Events';
import InternationalYogaDay from './components/events/InternationalYogaDay';
import InternationalYogaDayBooking from './components/events/InternationalYogaDayBooking';
import InternationalYogaDaySuccess from './components/events/InternationalYogaDaySuccess';
import PDFFlipBook from './components/events/PDFFlipBook';


import AdminDonation from './components/admin/pages/donation/AdminDonation';
import AdminLogout from "./components/admin/logout/AdminLogout";




function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Homepage />,
    },
    {
      path: '/report-an-issue',
      element: <ReportAnIssue />,
    },
    {
      path: '/about-us',
      element: <Aboutus />,
    },
    {
      path: '/about/journey-so-far',
      element: <JournerySoFar />,
    },
    {
      path: '/events',
      element: <Events />,
    },
    {
      path: '/international-yoga-day',
      element: <InternationalYogaDay />,
    },
    {
      path: '/international-yoga-day-booking',
      element: <InternationalYogaDayBooking />,
    },
    {
      path: '/international-yoga-day-success',
      element: <InternationalYogaDaySuccess />,
    },
    {
      path: '/pdf-flip-book', // Add this new route
      element: <PDFFlipBook />,
    },
    {
      path: '/gallery',
      element: <Gallery />,
    },

    {
      path: '/shop',
      element: <Shop />,
    },
    {
      path: '/contactus',
      element: <Contact />,
    },
    {
      path: '/workwithus',
      element: <Work />,
    },
    {
      path: '/workwithus2',
      element: <Work2 />,
    },
    {
      path: '/journey-so-far',
      element: <JournerySoFar />,
    },
    {
      path: '/donate',
      element: <Donate />,
    },
    {
      path: '/receipt',
      element: <Receipt />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/forget',
      element: <Forget />,
    },
    {
      path: '/logout/*',
      element: <AdminLogout />,
    }, {
      path: "/admin",
      element: <AdminDashboard />
    },
    {
      path: "/dashboard",
      element: <AdminDashboard />
    },
    {
      path: "/mantra-of-the-month",
      element: <AdminMantraOfTheMonth />
    },
    {
      path: "/report",
      element: <AdminReport />
    }, {
      path: "/admin-pages-home",
      element: <AdminHome />
    },
    {
      path: "/admin-gallery",
      element: <AdminGallery />
    }, {
      path: "/admin-events/*",
      element: <AdminEvents />
    }, {
      path: "/admin-contact-us",
      element: <AdminContactus />
    }, {
      path: "/admin-donation/*",
      element: <AdminDonation />
    },
    {
      path: "/admin-work-with-us",
      element: <AdminWorkWithUs />
    }, {
      path: "/admin-our-governance",
      element: <AdminWorkWithUs1 />
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
