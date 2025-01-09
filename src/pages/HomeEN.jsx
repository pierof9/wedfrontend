import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import the useNavigate hook
import TopBarEN from "../components/TopBarEN";

const Home = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleRSVPClick = () => {
        navigate("/en/RSVP"); // Redirect to the /RSVP page
    };

    // handle the pop-up after redirect
    const location = useLocation();
    const [showNotification, setShowNotification] = useState(false);

    useEffect(() => {
        if (location.state?.successMessage) {
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000); // Hide after 3 seconds
        }
    }, [location]);

    return (
<div className="">
    <TopBarEN/>
    {showNotification && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
          {location.state.successMessage}
        </div>
      )}
    <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center saveDate">
      {/* Left Section: Text */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="corinthia-bold text-8xl md:text-8xl font-serif text-rose-600 newRose mb-4">
          Save the Date
        </h2>
        <h1 className="simonetta-black text-5xl md:text-6xl font-bold text-gray-800 newBrown mb-4 leading-tight">
          Claudia & Piero
        </h1>
        <p className="poiret-one-regular text-2xl md:text-2xl text-gray-600 newBrown mb-6">
          September 1st, 2025 - Matera
        </p>
        <button 
            onClick={handleRSVPClick}
            className="mybtn poiret-one-regular px-6 py-3 border border-gray-500 text-gray-800 newBrown hover:bg-gray-100 rounded-lg transition-all duration-200">
          RSVP
        </button>
      </div>

      {/* Right Section: Image */}
      <div className="flex-1 mt-8 md:mt-0 md:ml-12 flex justify-center">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
          <img
            src="/noi.png"
            alt="Couple"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>

    {/* church picture section */}
    <div className="row">
        <div className="pic">
            <img
                src="/chiesa.jpg"
                alt="chiesa"
                className="w-full h-full object-cover"
            />
        </div>
    </div>

    {/* church event description */}
    <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center pt-3">
        <div className="flex-1 text-center md:text-center">
            <h1 className="corinthia-bold text-7xl md:text-7xl font-serif text-rose-600 newRose mb-4">
                The Celebration
            </h1>
            <p className="poiret-one-regular text-2xl md:text-2xl text-gray-600 newBrown mb-6">
                We warmly invite you to join us for the wedding at: <br />
                <span className="bg">Saints Pieter and Paul Church</span>
            </p>
            <p className="poiret-one-regular text-2xl md:text-2xl text-gray-600 newBrown mb-6">
                <a className="underline" href="https://www.google.com/maps/place/Chiesa+di+San+Pietro+Caveoso/@40.6644541,16.6098318,17z/data=!3m1!4b1!4m6!3m5!1s0x13477f0d97abb65f:0x1ab1e1853c9332f9!8m2!3d40.6644541!4d16.6124067!16s%2Fg%2F120j3mh3?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
                Piazza S. Pietro Caveoso - Matera
                </a>
            </p>
            <p className="poiret-one-regular text-2xl md:text-2xl text-gray-600 newBrown mb-6">
                The ceremony will commence at <span className="font-bold">10:30 a.m</span>
            </p>
            <p className="poiret-one-regular text-2xl md:text-2xl text-gray-600 newBrown mb-6">
            For your convenience, a shuttle service will operate from 10:00 a.m. onwards, departing from the parking area at Via G. Saragat, Matera.
            </p>
        </div>
    </div>

    {/* venue picture section */}
    <div className="row">
        <div className="pic">
            <img
                src="/tenutavisconti.jpg"
                alt="tenuta"
                className="w-full h-full object-cover"
            />
        </div>
    </div>

    {/* venue description section */}
    <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center pt-3 pb-6">
        <div className="flex-1 text-center md:text-center">
            <h1 className="corinthia-bold text-7xl md:text-7xl font-serif text-rose-600 newRose mb-4">
                The Reception
            </h1>
            <p className="poiret-one-regular text-2xl md:text-2xl text-gray-600 newBrown mb-6">
                Following the ceremony, we will be delighted to celebrate this joyous occasion with you at:<br />
                <a className="underline" href="https://www.google.com/maps/place/Tenuta+Visconti+Dimora+Storica/@40.3452478,16.7303349,17z/data=!4m6!3m5!1s0x134742ce92c6be03:0x390b4381b14660eb!8m2!3d40.3478088!4d16.7308788!16s%2Fg%2F1tj2f4y4?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
                Tenuta Visconti - Contrada S. Teodoro, 75015 Pisticci MT
                </a>
            </p>
            <p className="poiret-one-regular text-2xl md:text-2xl text-gray-600 newBrown mb-6">
                A shuttle service will be provided to transport guests from Via G. Saragat, Matera to the venue. After the festivities, the same shuttle will ensure everyone returns safely to Matera.
            </p>
            <p className="poiret-one-regular text-2xl md:text-2xl text-gray-600 newBrown mb-6">
                We kindly ask that you confirm your attendance at your earliest convenience.
            </p>

            <button
                onClick={handleRSVPClick} 
                className="mybtn poiret-one-regular px-6 py-3 border border-gray-500 text-gray-800 newBrown hover:bg-gray-100 rounded-lg transition-all duration-200">
            RSVP
            </button>
        </div>
    </div>

    
  </div>

    );
};
export default Home;