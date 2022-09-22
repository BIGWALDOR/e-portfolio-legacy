export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row footer__row">
          <figure>
            <a href="#">
              <img
                src="./assets/WB_Logo-removebg.png"
                className="footer__logo--img"
                alt=""
              />
            </a>
          </figure>
          <div className="footer__social--list">
            <a
              href="https://github.com/BIGWALDOR"
              className="footer__social--link link__hover-effect link__hover-effect--white"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/walid-bouladam-91ba38168/"
              className="footer__social--link link__hover-effect link__hover-effect--white"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              href="./assets/WB-Resume.pdf"
              className="footer__social--link link__hover-effect link__hover-effect--white"
              target="_blank"
            >
              Résumé
            </a>
          </div>
          <div className="footer__copyright">Copyright &copy; 2022</div>
        </div>
      </div>
    </footer>
  )
}
