import { useRef, useState } from 'react';
import Validation from './Validation';

export default function EmailForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const input = useRef(null);

  function handleChange(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError(Validation(input));
  }

  return (
    <form onSubmit={handleSubmit} className="subscribe-form" noValidate>
      <input
        value={email}
        onChange={handleChange}
        type="email"
        name="email"
        id="email"
        className="subscribe-form__input-email"
        placeholder="Your email address..."
        aria-label="email address"
        ref={input}
        required
      />
      <button className="subscribe-form__submit">Notify Me</button>
      {error && <span className="error-message">{error}</span>}
    </form>
  );
}
