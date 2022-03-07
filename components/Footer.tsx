const Footer = (): JSX.Element => {
  return (
    <div className="pt-4">
      <p>
        <strong>
          For scores and parts, commissions, teaching, and all other inquiries,
          please <a href="mailto:joshua@cerdenia.com">email me</a> directly.
        </strong>
      </p>
      <footer>
        © 2011-22 Joshua Cerdenia unless otherwise stated. This site is{" "}
        <a
          href="https://github.com/joshuacerdenia/music.cerdenia.com"
          target="_blank"
          rel="noreferrer"
        >
          open-source
        </a>
        .
      </footer>
    </div>
  );
};

export default Footer;
