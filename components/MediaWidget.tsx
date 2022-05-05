interface MediaWidgetProps {
  className?: string;
  src: string;
  width?: number | string;
  height?: number | string;
  style?: {};
  onMouseEnter?: VoidFunction;
  onMouseLeave?: VoidFunction;
}

const MediaWidget = ({
  className,
  src,
  width = "100%",
  height = 300,
  style,
  onMouseEnter,
  onMouseLeave,
}: MediaWidgetProps): JSX.Element => {
  switch (true) {
    case src.includes("youtube.com"): {
      src = src.replace(/watch\?v=/i, "embed/");

      return (
        <iframe
          className={className}
          width={width}
          height={height}
          style={style}
          src={src}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      );
    }

    case src.includes("soundcloud.com"): {
      src = src.replace(/http(s?):\/\//i, "");

      return (
        <iframe
          className={className}
          width={width}
          height={height}
          style={style}
          src={`https://w.soundcloud.com/player/?url=https%3A//${src}&color=%23484440&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true`}
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      );
    }

    default: {
      return <text className="text-danger">Cannot render {src}</text>;
    }
  }
};

export default MediaWidget;
