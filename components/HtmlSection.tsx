interface HtmlSectionProps {
  className?: string;
  html: string;
}

const HtmlSection = ({
  className,
  html,
}: HtmlSectionProps): React.ReactElement => {
  return (
    <section className={className} dangerouslySetInnerHTML={{ __html: html }} />
  );
};

export default HtmlSection;
