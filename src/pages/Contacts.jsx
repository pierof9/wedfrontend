import React from "react";

const Contacts = () => {
    return (
        <div className="">
            <div className="max-w-5xl mx-auto px-6 md:flex-row items-center joinus pt-6">
                <h1 className="corinthia-bold text-7xl md:text-7xl font-serif text-rose-600 newRose mb-4">
                    Non esitare a contattarci per qualsiasi info!
                </h1>
            </div>

            <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Piero's Column */}
                <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                <img
                    src="/piero.png"
                    alt="Piero"
                    className="w-32 h-32 mx-auto rounded-full mb-4"
                />
                <h2 className="corinthia-bold text-4xl font-serif text-rose-600 newRose mb-4">Piero</h2>
                <p className="text-gray-700 mb-4">Se riuscite a farvi rispondere</p>
                <div>
                    <p className="text-gray-600">
                    📧 Email: <a href="mailto:piero@example.com" className="text-blue-500">piero.farina092@gmail.com</a>
                    </p>
                    <p className="text-gray-600">📞 Cell: +39 371 7856 482</p>
                    <p className="text-gray-600">📞 Whatsapp Only: +32 468 59 82 77</p>
                </div>
                </div>

                {/* Claudia's Column */}
                <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                <img
                    src="/claudia.png"
                    alt="Claudia"
                    className="w-32 h-32 mx-auto rounded-full mb-4"
                />
                <h2 className="corinthia-bold text-4xl font-serif text-rose-600 newRose mb-4">Claudia</h2>
                <p className="text-gray-700 mb-4">Non vede l'ora di rispondervi!</p>
                <div>
                    <p className="text-gray-600">
                    📧 Email: <a href="mailto:claudia@example.com" className="text-blue-500">claudiadilecce03@gmail.com</a>
                    </p>
                    <p className="text-gray-600">📞 Cell: +39 320 9059 014</p>
                </div>
                </div>
            </div>

            {/* Church and Info Section */}
            <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                {/* Church Column */}
                <div className="rounded-lg p-6">
                <h2 className="corinthia-bold text-4xl font-serif text-rose-600 newRose mb-4">Chiesa dei Santi Pietro e Paolo</h2>
                <img
                    src="/chiesa.jpg"
                    alt="Small picture of the church"
                    className="w-full rounded-lg mb-4"
                />
                {/* Embedded Google Maps */}
                <div className="w-full h-64">
                    <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.4317916747627!2d16.612406699999998!3d40.66445410000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13477f0d97abb65f%3A0x1ab1e1853c9332f9!2sChiesa%20di%20San%20Pietro%20Caveoso!5e0!3m2!1sen!2sit!4v1736188960373!5m2!1sen!2sit"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                </div>

                {/* Info Column */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="corinthia-bold text-4xl font-serif text-rose-600 newRose mb-4">Appuntamento</h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li className="mb-4 simonetta-black text-2xl">📜 <strong>Lunedì 1 Settembre 2025:</strong> ore 10:30</li>
                    <li className="mb-4 simonetta-black text-2xl">💒 <strong>Reception:</strong> Chiesa dei Santi Pietro e Paolo (S. Pietro Caveoso).</li>
                    <li className="mb-4 simonetta-black text-2xl">🚗 <strong>Parcheggio:</strong> Dalle ore 10:00 sarà attivo un servizio navette con partenza dal parcheggio auto di Via G. Saragat - Matera. 
                    Le navette vi accompagneranno al piazzale della Chiesa, con frequenza regolare.</li>
                </ul>
                </div>
            </div>

            {/* Church and Info Section */}
            <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                {/* Church Column */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="corinthia-bold text-4xl font-serif text-rose-600 newRose mb-4">Appuntamento</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        <li className="mb-4 simonetta-black text-2xl">📜 <strong>Lunedì 1 Settembre 2025:</strong> ore 13:00</li>
                        <li className="mb-4 simonetta-black text-2xl">💒 <strong>Reception:</strong> Tenuta Visconti (Pisticci, MT).</li>
                        <li className="mb-4 simonetta-black text-2xl">🚗 <strong>Parcheggio:</strong> Autobus GT saranno a disposizione degli invitati dal parcheggio auto di Via G. Saragat, Matera.
                        Gli stessi, provvederanno a riaccompagnare gli ospiti a Matera, dalla Tenuta, al termine della serata.</li>
                    </ul>
                </div>

                {/* Info Column */}
                <div className="rounded-lg p-6">
                    <h2 className="corinthia-bold text-4xl font-serif text-rose-600 newRose mb-4">Tenuta Visconti</h2>
                    <img
                        src="/tenutavisconti.jpg"
                        alt="Small picture of the tenutavisconti"
                        className="w-full rounded-lg mb-4"
                    />
                    {/* Embedded Google Maps */}
                    <div className="w-full h-64">
                        <iframe
                        className="w-full h-full rounded-lg"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3040.753731553966!2d16.728303876052788!3d40.34780877145069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134742ce92c6be03%3A0x390b4381b14660eb!2sTenuta%20Visconti%20Dimora%20Storica!5e0!3m2!1sen!2sit!4v1736189048898!5m2!1sen!2sit"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Contacts;