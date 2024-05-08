export default function App() {
  return (
    <>
      <main className="main">
        <img src="/images/logo.svg" alt="logo" className="logo" />
        <h1>
          We are launching <span>soon!</span>
        </h1>
        <p>Subscribe and get notified</p>
        <form action="" className="subscribe-form">
          <input
            type="text"
            name="email"
            id="email"
            className="subscribe-form__input-email"
          />
          <button className="subscribe-form__submit">Notify Me</button>
        </form>
        <img
          src="/images/illustration-dashboard.png"
          alt="dashboard illustration"
        />
      </main>
      <footer>
        <ul className="social-media-links">
          <li className="social-media-link"></li>
          <li className="social-media-link"></li>
          <li className="social-media-link"></li>
        </ul>
        <span className="copyright">
          &copy; Copyright Ping. All rights reserved.
        </span>
      </footer>
    </>
  );
}
