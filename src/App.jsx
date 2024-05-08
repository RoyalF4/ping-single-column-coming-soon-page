import EmailForm from './EmailForm';
import Footer from './Footer';

export default function App() {
  return (
    <>
      <main className="main">
        <img src="/images/logo.svg" alt="logo" className="logo" />
        <h1 className="heading">
          We are launching <span className="heading-accent">soon!</span>
        </h1>
        <p className="subtext">Subscribe and get notified</p>
        <EmailForm />
        <img
          className="illustration"
          src="/images/illustration-dashboard.png"
          alt="dashboard illustration"
        />
      </main>
      <Footer />
    </>
  );
}
