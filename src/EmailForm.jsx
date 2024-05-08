import { useState } from 'react';

export default function EmailForm() {
  const [email, setEmail] = useState('');

  function handleChange(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="subscribe-form">
      <input
        value={email}
        onChange={handleChange}
        type="email"
        name="email"
        id="email"
        className="subscribe-form__input-email"
        placeholder="Your email address..."
        required
      />
      <button className="subscribe-form__submit">Notify Me</button>
    </form>
  );
}
