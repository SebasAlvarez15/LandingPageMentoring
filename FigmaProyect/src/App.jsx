import Navbar from './components/Navbar/Navbar';
import Clients from './components/Clients/Clients';
import HeroSection from './components/Hero/HeroSection';
import Community from './components/Community/Community';
import Unlock from './components/Unlock/Unlock';
import Achievements from './components/Achievements/Achievements';
import Calender from './components/Calender/Calender';
import Customers from './components/Customers/Customers';
import CommunityUpdate from './components/CommunityUpdate/CommunityUpdate';
import PreFooter from './components/PreFooter/PreFooter';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <>
            <Navbar />
            <Clients />
            <HeroSection />
            <Community />
            <Unlock />
            <Achievements />
            <Calender />
            <Customers />
            <CommunityUpdate />
            <PreFooter />
            <Footer />
        </>
    );
}

export default App;
