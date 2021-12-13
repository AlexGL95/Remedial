import { Routes, Route } from 'react-router-dom';

import { Navbar } from '../components/ui/Navbar';

import { ModelScreen } from '../components/models/ModelScreen';
import { Model } from '../components/model/Model';
import { HomeScreen } from '../components/home/HomeScreen';
import { Footer } from '../components/ui/Footer';


export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
                <Routes>
                    <Route path="/home"element={<HomeScreen />} />
                    <Route path="model" element={<ModelScreen />} />
                    <Route path="model/:modelId" element={<Model />} />
                    <Route path="/" element={<ModelScreen />} />
                </Routes>
            <Footer />
        </>
    )
}
