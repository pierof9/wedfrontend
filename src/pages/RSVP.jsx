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
      const response = await axios.post("https://wedbackend-production.up.railway.app/submit", formData);
      navigate("/"); // Replace "/" with your main page route
    } catch (error) {
      console.error("Failed to submit form:", error);
      alert("Failed to submit the form.");
    }
  };

  return (
    <div className="">
      <div className="max-w-5xl mx-auto px-6 md:flex-row items-center joinus">
        <h1 className="corinthia-bold text-7xl md:text-7xl font-serif text-rose-600 newRose mb-4">
          Will you join us?
        </h1>
        <p className="poiret-one-regular text-2xl md:text-2xl text-gray-600 newBrown mb-6">
          Per confermare la vostra presenza alle nozze vi basterà compilare il
          form sottostante. Vi preghiamo di compilare il form anche qualora non
          possiate raggiungerci a questo evento. Questo ci aiuterebbe
          nell'organizzazione.
        </p>
        <h2 className="corinthia-bold text-5xl md:text-5xl font-serif text-rose-600 newRose mb-4">
          You are the party
        </h2>
        <p className="poiret-one-regular text-2xl md:text-2xl text-gray-600 newBrown mb-6">
          Un party senza di voi non sarebbe un gran successo.. per questo
          vorremmo provare a raccogliere le vostre esigenze/necessità. Fateci
          sapere!
        </p>

        <div className="flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-4 formCustom"
          >
            {/* Name Input */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your first name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Surname Input */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Surname
              </label>
              <input
                type="text"
                name="surname"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your surname"
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
                placeholder="Enter your email"
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
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

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
                  <option value="yes">Yes</option>
                </select>
              </div>
            )}

            {formData.bringingSomeone === "yes" && (
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Con chi verrai?
                </label>
                <input
                  type="text"
                  name="plusOneName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Name of your plus one"
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
                  <option value="yes">Yes</option>
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
                  placeholder="Write your notes here"
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
              Yes! Count me in!
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