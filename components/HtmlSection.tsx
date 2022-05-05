interface HtmlSectionProps {
  className?: string;
  children: string;
  wrapper?: string;
}

const HtmlSection = ({
  className,
  children,
  wrapper,
}: HtmlSectionProps): JSX.Element => {
  if (wrapper === "aside") {
    return (
      <aside
        className={className}
        dangerouslySetInnerHTML={{ __html: children }}
      />
    );
  }

  return (
    <section
      className={className}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
};

export default HtmlSection;
