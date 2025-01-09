import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";

const RSVP = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    isComing: "yes",
    address: "",
    bringingSomeone: "no",
    plusOneName: "",
    needCar: "no",
    hasNotes: "no",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/submit", formData);
      // const response = await axios.post("https://wedbackend-production.up.railway.app/submit", formData);
      navigate("/it", { state: { successMessage: "Grazie per la risposta! Riceverai presto una mail di conferma." } });
    } catch (error) {
      console.error("Failed to submit form:", error);
      alert("Failed to submit the form.");
    }
  };

  return (
    <div className="">
      <div className="max-w-5xl mx-auto px-6 md:flex-row items-center joinus pt-6">
        <h1 className="corinthia-bold text-7xl md:text-7xl font-serif text-rose-600 newRose mb-4">
          Sarai dei nostri?
        </h1>
        <p className="poiret-one-regular text-2xl md:text-2xl text-gray-600 newBrown mb-6">
        Per confermare la vostra presenza alle nozze, vi invitiamo gentilmente a compilare il form sottostante. 
        Anche se non potrete essere presenti, 
        vi preghiamo di segnalarcelo tramite il form: ci aiuterà moltissimo nell’organizzazione.
        </p>
        <h2 className="corinthia-bold text-5xl md:text-5xl font-serif text-rose-600 newRose mb-4">
          La festa.. siete voi!
        </h2>
        <p className="poiret-one-regular text-2xl md:text-2xl text-gray-600 newBrown mb-6">
        Una festa senza di voi non sarebbe la stessa! 
        Per questo vorremmo conoscere meglio le vostre esigenze o necessità. 
        Fatecelo sapere!
        </p>

        <div className="flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-4 formCustom"
          >
            {/* Name Input */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Nome
              </label>
              <input
                type="text"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Inserisci il tuo nome"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Surname Input */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Cognome
              </label>
              <input
                type="text"
                name="surname"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Inserisci il tuo cognome"
                value={formData.surname}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Inserisci la tua email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Coming? */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Sarai dei nostri?
              </label>
              <select
                name="isComing"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                value={formData.isComing}
                onChange={handleChange}
                required
              >
                <option value="yes">Si</option>
                <option value="no">No</option>
              </select>
            </div>

            {/* Address? */}
            {formData.isComing === "yes" && (
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Indirizzo (Ci serve per mandarvi l'invito)
                </label>
                <input
                  type="text"
                  name="address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="es: Via Tal dei tali, n.58"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
            )}

            {/* Bringing Someone? */}
            {formData.isComing === "yes" && (
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Vieni con qualcuno/a?
                </label>
                <select
                  name="bringingSomeone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  value={formData.bringingSomeone}
                  onChange={handleChange}
                >
                  <option value="no">No</option>
                  <option value="yes">Si</option>
                </select>
              </div>
            )}

            {formData.bringingSomeone === "yes" && (
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Con chi verrai?
                </label>
                <textarea
                  name="plusOneName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Indicaci con chi verrai"
                  value={formData.plusOneName}
                  onChange={handleChange}
                />
              </div>
            )}

            {/* Notes Section */}
            {formData.isComing === "yes" && (
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Vuoi comunicarci allergie, intolleranze o altre note?
                </label>
                <select
                  name="hasNotes"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  value={formData.hasNotes}
                  onChange={handleChange}
                >
                  <option value="no">No</option>
                  <option value="yes">Si</option>
                </select>
              </div>
            )}

            {formData.hasNotes === "yes" && (
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Inserisci le tue note
                </label>
                <textarea
                  name="notes"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Scrivi qui le informazioni aggiuntive"
                  value={formData.notes}
                  onChange={handleChange}
                />
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              {formData.isComing === "yes" ? (
                <span>Ci sarò!</span>
              ) : (<span>Temo di non poter partecipare :/</span>)
              }
            </button>
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center mt-12">
        <div className="flex-1 text-center">
          <h1 className="corinthia-bold text-7xl md:text-7xl font-serif text-rose-600 newRose mb-4">
            La vostra presenza sarà per noi un bellissimo regalo
          </h1>
          <p className="poiret-one-regular text-2xl text-gray-600 mb-6">
            Se poi vi vien voglia di strafare, un aiuto è assai gradito per le
            spese ripagare.
          </p>
          <h1 className="corinthia-bold text-5xl md:text-5xl font-serif text-rose-600 newRose mb-4">
            Grazie mille
          </h1>
          <p className="poiret-one-regular text-2xl text-gray-600 mb-6">
            IBAN: 0000 0000 0000 0000
          </p>
        </div>
      </div>
    </div>
  );
};

export default RSVP;