import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";

const RSVPEN = () => {
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
      navigate("/en", { state: { successMessage: "Thanks for your reply! You will receive a confirmation email, soon." } });
    } catch (error) {
      console.error("Failed to submit form:", error);
      alert("Failed to submit the form.");
    }
  };

  return (
    <div className="">
      <div className="max-w-5xl mx-auto px-6 md:flex-row items-center joinus pt-6">
        <h1 className="corinthia-bold text-7xl md:text-7xl font-serif text-rose-600 newRose mb-4">
          Will you join us?
        </h1>
        <p className="poiret-one-regular text-2xl md:text-2xl text-gray-600 newBrown mb-6">
        To confirm your attendance at our wedding, 
        we kindly ask you to complete the form below. 
        Even if you are unable to join us, 
        we would appreciate it if you could let us know by filling out the form, 
        as it will greatly assist us in planning.
        </p>
        <h2 className="corinthia-bold text-5xl md:text-5xl font-serif text-rose-600 newRose mb-4">
          You are the party!
        </h2>
        <p className="poiret-one-regular text-2xl md:text-2xl text-gray-600 newBrown mb-6">
        A party without you wouldn’t be the same! 
        That’s why we’d love to hear about any preferences or special requirements you might have. 
        Let us know!
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
                Will you join?
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

            {/* Address? */}
            {formData.isComing === "yes" && (
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Home Address
                </label>
                <input
                  type="text"
                  name="address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="e.g: Krommewal, 60"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
            )}

            {/* Bringing Someone? */}
            {formData.isComing === "yes" && (
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Will you bring someone with you?
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
                  Who?
                </label>
                <input
                  type="text"
                  name="plusOneName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Name of your plus one/ones"
                  value={formData.plusOneName}
                  onChange={handleChange}
                />
              </div>
            )}

            {/* Notes Section */}
            {formData.isComing === "yes" && (
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Do you have any allergies, intollerancies or other things to communicate to us?
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
                  Your additional notes
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
              {formData.isComing === "yes" ? (
                <span>Count me in!</span>
              ) : (<span>Unfortunately I'll miss this :/</span>)
              }
            </button>
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center mt-12">
        <div className="flex-1 text-center">
          <h1 className="corinthia-bold text-7xl md:text-7xl font-serif text-rose-600 newRose mb-4">
          Your presence is the greatest gift we could ask for! 
          </h1>
          <p className="poiret-one-regular text-2xl text-gray-600 mb-6">
          But if you’re feeling a little extra generous, a contribution would surely help us with the wedding expenses!
          </p>
          <h1 className="corinthia-bold text-5xl md:text-5xl font-serif text-rose-600 newRose mb-4">
            Many Thanks
          </h1>
          <p className="poiret-one-regular text-2xl text-gray-600 mb-6">
            IBAN: 0000 0000 0000 0000
          </p>
        </div>
      </div>
    </div>
  );
};

export default RSVPEN;