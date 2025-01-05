import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

const Home = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleRSVPClick = () => {
        navigate("/RSVP"); // Redirect to the /RSVP page
    };

    return (
<div className="">
    <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center saveDate">
      {/* Left Section: Text */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="corinthia-bold text-6xl md:text-6xl font-serif text-rose-600 newRose mb-4">
          Save the Date
        </h2>
        <h1 className="simonetta-black text-5xl md:text-6xl font-bold text-gray-800 newBrown mb-4 leading-tight">
          Claudia & Piero
        </h1>
        <p className="poiret-one-regular text-2xl md:text-2xl text-gray-600 newBrown mb-6">
          1 Settembre 2025 - Matera
        </p>
        <button 
            onClick={handleRSVPClick}
            className="poiret-one-regular px-6 py-3 border border-gray-500 text-gray-800 newBrown hover:bg-gray-100 rounded-lg transition-all duration-200">
          CONFERMA LA TUA PRESENZA
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
    <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="flex-1 text-center md:text-center">
            <h1 className="corinthia-bold text-7xl md:text-7xl font-serif text-rose-600 newRose mb-4">
                Appuntamento
            </h1>
            <p className="poiret-one-regular text-2xl md:text-2xl text-gray-600 newBrown mb-6">
                Chiesa dei Santi Pietro e Paolo
            </p>
            <p className="poiret-one-regular text-2xl md:text-2xl text-gray-600 newBrown mb-6">
                <a href="https://www.google.com/maps/place/Chiesa+di+San+Pietro+Caveoso/@40.6644541,16.6098318,17z/data=!3m1!4b1!4m6!3m5!1s0x13477f0d97abb65f:0x1ab1e1853c9332f9!8m2!3d40.6644541!4d16.6124067!16s%2Fg%2F120j3mh3?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
                Piazza S. Pietro Caveoso - Matera
                </a>
            </p>
            <p className="poiret-one-regular text-2xl md:text-2xl text-gray-600 newBrown mb-6">
                Ore 10:30
            </p>
            <p>-----------</p>
            <p className="poiret-one-regular text-2xl md:text-2xl text-gray-600 newBrown mb-6">
                Dalle ore 10:00 sarà attivo un servizio navette con partenza dal parcheggio auto di Via G. Saragat - Matera.
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
    <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="flex-1 text-center md:text-center">
            <h1 className="corinthia-bold text-7xl md:text-7xl font-serif text-rose-600 newRose mb-4">
                Gli Sposi
            </h1>
            <p className="poiret-one-regular text-2xl md:text-2xl text-gray-600 newBrown mb-6">
                dopo la cerimonia saranno felici di festeggiare con Voi presso
                la Tenuta Visconti, 
                <a href="https://www.google.com/maps/place/Tenuta+Visconti+Dimora+Storica/@40.3452478,16.7303349,17z/data=!4m6!3m5!1s0x134742ce92c6be03:0x390b4381b14660eb!8m2!3d40.3478088!4d16.7308788!16s%2Fg%2F1tj2f4y4?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
                Contrada S. Teodoro, 75015 Pisticci MT
                </a>
            </p>
            <p className="poiret-one-regular text-2xl md:text-2xl text-gray-600 newBrown mb-6">
                Autobus GT saranno a disposizione degli invitati dal parcheggio auto di Via G. Saragat, Matera.
                Gli stessi, provvederanno a riaccompagnare gli ospiti a Matera, dalla Tenuta, al termine della serata.
            </p>
            <p className="poiret-one-regular text-2xl md:text-2xl text-gray-600 newBrown mb-6">
                E' gradita gentile conferma
            </p>
            <p className="poiret-one-regular text-2xl md:text-2xl text-gray-600 newBrown mb-6">
                Tel. (+39) 3717856482 - (+32) 468598277 (Whatsapp Only)
            </p>

            <button
                onClick={handleRSVPClick} 
                className="poiret-one-regular px-6 py-3 border border-gray-500 text-gray-800 newBrown hover:bg-gray-100 rounded-lg transition-all duration-200">
            CONFERMA LA TUA PRESENZA
            </button>
        </div>
    </div>

    
  </div>

    );
};
export default Home;