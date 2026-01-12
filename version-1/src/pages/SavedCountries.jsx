import { useState } from "react";

export default function SavedCountries() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    bio: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    // this resets the form to its initial state so it can be used by next user
    setFormData({
      name: "",
      email: "",
      country: "",
      bio: "",
    });
  }
  function handleChange(e) {
    // takes the name attribute and value, or what the user typed
    const { name, value } = e.target;

    // spread operator prevFormData makes a copy of whats stored in formData
    // [name] refers to the name attribute in jsx
    // value is what the user typed
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }
  return (
    <div className="saved-countries">
      <h1>My Saved Countries</h1>
      <h2>My Profile</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
        />
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="country"
          id="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
          required
        />
        <textarea
          name="bio"
          id="bio"
          placeholder="Bio"
          cols="62"
          rows="10"
          required
        />
        <br />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
