interface HtmlSectionProps {
  className?: string;
  children: string;
}

const HtmlSection = ({
  className,
  children,
}: HtmlSectionProps): JSX.Element => {
  return (
    <section
      className={className}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
};

export default HtmlSection;
