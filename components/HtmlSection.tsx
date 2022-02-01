const HtmlSection = ({
  className,
  html,
}: HtmlSectionProps): React.ReactElement => {
  return (
    <section className={className} dangerouslySetInnerHTML={{ __html: html }} />
  );
};

interface HtmlSectionProps {
  className?: string;
  html: string;
}

export default HtmlSection;
