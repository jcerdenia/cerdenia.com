interface MediaWidgetProps {
  className?: string;
  src: string;
  width?: number | string;
  height?: number | string;
}

const MediaWidget = ({
  className,
  src,
  width = "100%",
  height = 300,
}: MediaWidgetProps): React.ReactElement => {
  let type: "youtube" | "soundcloud" | undefined;

  switch (true) {
    case src.includes("youtube.com"): {
      type = "youtube";
      break;
    }
    case src.includes("soundcloud.com"): {
      type = "soundcloud";
      break;
    }
    default: {
      type = undefined;
    }
  }

  if (type === "soundcloud") {
    src = src.replace(/http(s?):\/\//i, "");
    return (
      <iframe
        className={className}
        width={width}
        height={height}
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=https%3A//${src}&color=%23484440&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true`}
      />
    );
  }

  if (type === "youtube") {
    src = src.replace(/watch\?v=/i, "embed/");
    return (
      <iframe
        className={className}
        width={width}
        height={height}
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return <div className="text-danger">Cannot render {src}</div>;
};

export default MediaWidget;
