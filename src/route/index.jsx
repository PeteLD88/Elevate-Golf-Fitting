import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../components/HomePage';
import RegisterPage from '../components/RegisterPage';
import LoginPage from '../components/LoginPage';
import AboutUsPage from '../components/AboutUsPage';
import ProfilePage from '../components/ProfilePage';
import FittingPage from '../components/FittingPage';
import FitLogPage from '../components/FitLogPage';
import QuizPage from '../components/QuizPage';
import ResultPage from '../components/ResultPage';
import AdminPage from '../components/AdminPage';

const router = createBrowserRouter([
    {path: '/', element: <HomePage/>},
    {path: '/login', element: <LoginPage/>},
    {path: '/register', element: <RegisterPage/>},
    {path: '/aboutus', element: <AboutUsPage/>},
    {path: '/profile', element: <ProfilePage/>},
    {path: '/fitting', element: <FittingPage/>},
    {path: '/fitting/log', element: <FitLogPage/>},
    {path: '/quiz', element: <QuizPage/>},
    {path: '/result', element: <ResultPage/>},
    {path: '/admin', element: <AdminPage/>}

]);

export default function Router(){
    return <RouterProvider router={router} />;
}