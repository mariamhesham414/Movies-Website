import "./NotFound.css";
export default function NotFound() {
  return (
    <>
      {/* <div classNameNameName="flex-wrapper no-pad">
        <div classNameNameName="flex-col">
          <div classNameNameName="error-copy">
            <h1>404 Page Not Found</h1>
            <h4 classNameNameName="dynamic-msg"></h4>
            <p>
              Check that you typed the address correctly, go back to your
              previous page or try using our site search to find something
              specific.
            </p>
          </div>
        </div>
        <div classNameNameName="flex-col no-pad toAnimate">
          <div classNameNameName="error-image-animate"></div>
        </div>
      </div> */}
      <div className="notfound">
        <a
          href="http://www.thedresscounter.com"
          target="_blank"
          rel="noreferrer"
        >
          <header className="top-header"></header>

          {/* <!--dust particel--> */}
          <div>
            <div className="starsec"></div>
            <div className="starthird"></div>
            <div className="starfourth"></div>
            <div className="starfifth"></div>
          </div>
          {/* <!--Dust particle end---> */}

          <div className="lamp__wrap">
            <div className="lamp">
              <div className="cable"></div>
              <div className="cover"></div>
              <div className="in-cover">
                <div className="bulb"></div>
              </div>
              <div className="light"></div>
            </div>
          </div>
          {/* <!-- END Lamp --> */}
          <section className="error">
            {/* <!-- Content --> */}
            <div className="error__content">
              <div className="error__message message">
                <h1 className="message__title">Page Not Found</h1>
                <p className="message__text">
                  We &apos; re sorry, the page you were looking for isn&apos;t
                  found here. The link you followed may either be broken or no
                  longer exists. Please try again, or take a look at our.
                </p>
              </div>
              <div className="error__nav e-nav">
                <a
                  href="http://www.thedresscounter.com"
                  target="_blanck"
                  className="e-nav__link"
                ></a>
              </div>
            </div>
            {/* <!-- END Content --> */}
          </section>
        </a>
      </div>
    </>
  );
}
