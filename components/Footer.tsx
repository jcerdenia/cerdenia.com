import Link from "next/link";

const Footer = (): React.ReactElement => {
  return (
    <div className="pt-4">
      <p>
        <strong>
          For inquiries, commissions, and obtaining scores and parts, please
          email{" "}
          <Link href="mailto:joshua@cerdenia.com">joshua@cerdenia.com</Link>{" "}
          directly.
        </strong>
      </p>
      <footer>© 2011-22 Joshua Cerdenia</footer>
    </div>
  );
};

export default Footer;
