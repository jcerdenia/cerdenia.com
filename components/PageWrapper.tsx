import Head from "next/head";

interface PageWrapperProps {
  title: string;
  children: any;
}

const PageWrapper = ({ title, children }: PageWrapperProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </>
  );
};

export default PageWrapper;
