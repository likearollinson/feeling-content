import "./styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

const styles = {
  navbarTitle: {
    fontSize: "35px",
    fontFamily: "Oswald, sans serif"
  },
  navbar: {
    position: "fixed",
    top: "0",
    width: "100%"
  },
  navbarLinks: {
    fontSize: "25px",
    fontFamily: "Oswald, sans serif"
  },
  header: {
    marginTop: "100px",
    marginBottom: "20px",
    fontFamily: "Oswald, sans serif"
  },
  bradMichael: {
    borderRadius: "1%",
    marginBottom: "20px"
  },
  lowerHeading: {
    fontFamily: "Oswald, sans serif"
  },
  applePodcastEmbed: {
    width: "100%",
    maxWidth: "660px",
    overflow: "hidden",
    borderRadius: "10px",
    background: "transparent",
    margin: "15px",
    paddingRight: "15px"
  },
  spotifyPodcastEmbed: {
    margin: "15px",
    maxWidth: "660px"
  }
};

export default function App() {
  return (
    <body>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={styles.navbar}
      >
        <div className="container-fluid">
          <a className="navbar-brand font" href="#" style={styles.navbarTitle}>
            Feeling Content
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <a
                className="nav-link active font"
                aria-current="page"
                href="#"
                style={styles.navbarLinks}
              >
                Home
              </a>
              <a className="nav-link" href="#" style={styles.navbarLinks}>
                Episodes
              </a>
              <a className="nav-link" href="#" style={styles.navbarLinks}>
                What Ya Feelin'?
              </a>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <h3 className="text-center font" style={styles.header}>
          Listen in as Brad and Michael discuss the albums they're currently
          listening to and give them ratings and reviews
        </h3>
        <div className="d-flex justify-content-center">
          <img
            className="img-fluid"
            src={require("../assets/images/brad-michael.png")}
            alt="brad and michael"
            style={styles.bradMichael}
          />
        </div>
        <h3 className="text-center" style={styles.lowerHeading}>
          Available on Spotify, Apple Podcasts, and other major streaming
          platoforms
        </h3>
        <div className="row">
          <div className="col-md-6 my-auto d-flex justify-content-end">
            <iframe
              title="spotify-podcast-embed"
              src="https://open.spotify.com/embed-podcast/show/17Bc8Gqq8aQ0cAJCyLol8S"
              width="100%"
              height="232"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
              style={styles.spotifyPodcastEmbed}
            ></iframe>
          </div>
          <div className="col-md-6 my-auto d-flex justify-content-start">
            <iframe
              title="apple-podcast-embed"
              src="https://embed.podcasts.apple.com/us/podcast/feeling-content/id1503959277?itsct=podcast_box_player&amp;itscg=30200&amp;ls=1&amp;theme=dark"
              height="450px"
              frameborder="0"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
              allow="autoplay *; encrypted-media *;"
              style={styles.applePodcastEmbed}
            ></iframe>
          </div>
        </div>
      </main>
    </body>
  );
}
