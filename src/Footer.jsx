export default function Footer() {
  return (
    <footer className="footer">
      <ul className="social-media-links">
        <li className="social-media-link">
          <i
            className="fa-brands fa-facebook-f fa-xs"
            style={{ color: '#4f7df3' }}
          ></i>
        </li>
        <li className="social-media-link">
          <i
            className="fa-brands fa-twitter fa-xs"
            style={{ color: '#4f7df3' }}
          ></i>
        </li>
        <li className="social-media-link">
          <i
            className="fa-brands fa-instagram fa-xs"
            style={{ color: '#4f7df3' }}
          ></i>
        </li>
      </ul>
      <span className="copyright">
        &copy; Copyright Ping. All rights reserved.
      </span>
    </footer>
  );
}
