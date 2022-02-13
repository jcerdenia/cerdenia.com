import Link from "next/link";

const Footer = (): React.ReactElement => {
  return (
    <div className="pt-4">
      <p>
        <strong>
          For scores and parts, commissions, and all other inquiries, please
          email{" "}
          <Link href="mailto:joshua@cerdenia.com">joshua@cerdenia.com</Link>{" "}
          directly.
        </strong>
      </p>
      <footer>
        All content © 2011-22 Joshua Cerdenia unless otherwise stated.
      </footer>
    </div>
  );
};

export default Footer;
