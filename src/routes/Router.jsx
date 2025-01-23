import { Routes, Route } from "react-router";
import Home from "../pages/home/Home";
import FetchArtist from "../pages/fetchArtist/FetchArtist";
import Contact from "../pages/contact/Contact";
import { AuthProvider } from "../auth/AuthProvider";
import PrivateRoute from "../auth/PrivateRoute";
import NotFound from "../pages/notFound/NotFound";

export default function Router() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>} />
                <Route path="/artists" element={
                    <PrivateRoute>
                        <FetchArtist />
                    </PrivateRoute>} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </AuthProvider>
    );
}