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
        className={`subscribe-form__input-email ${error ? 'error-input' : ''}`}
        placeholder="Your email address..."
        aria-label="email address"
        ref={input}
        aria-describedby="error"
        required
        autoFocus
      />
      <button className="subscribe-form__submit">Notify Me</button>
      {error && (
        <span
          id="error"
          className={`error-message error ${error ? 'visible' : ''}`}
        >
          {error}
        </span>
      )}
    </form>
  );
}
