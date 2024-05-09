export default function Footer() {
  return (
    <footer className="footer">
      <ul className="social-media-links">
        <li>
          <a href="#" className="social-media-link" aria-label="facebook">
            <i
              className="fa-brands fa-facebook-f fa-xs"
              style={{ color: '#4f7df3' }}
            ></i>
          </a>
        </li>
        <li>
          <a href="#" className="social-media-link" aria-label="twitter">
            <i
              className="fa-brands fa-twitter fa-xs"
              style={{ color: '#4f7df3' }}
            ></i>
          </a>
        </li>
        <li>
          <a className="social-media-link" href="#" aria-label="instagram">
            <i
              className="fa-brands fa-instagram fa-xs"
              style={{ color: '#4f7df3' }}
            ></i>
          </a>
        </li>
      </ul>
      <span className="copyright">
        &copy; Copyright Ping. All rights reserved.
      </span>
    </footer>
  );
}
