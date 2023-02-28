interface HtmlWrapperProps {
  className?: string;
  parent?: "aside" | undefined;
  children: string;
}

const HtmlWrapper = ({
  className,
  parent,
  children,
}: HtmlWrapperProps): JSX.Element => {
  const props = {
    className,
    dangerouslySetInnerHTML: { __html: children },
  };

  switch (parent) {
    case "aside": {
      return <aside {...props} />;
    }

    default: {
      return <div {...props} />;
    }
  }
};

export default HtmlWrapper;
