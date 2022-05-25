import PageLayout from "../components/PageLayout";

const NotFoundPage = (): JSX.Element => {
  return (
    <PageLayout title="404: Page Not Found">
      <h5>Page Not Found</h5>
      <p>That page does not exist, or may have moved.</p>
    </PageLayout>
  );
};

export default NotFoundPage;
