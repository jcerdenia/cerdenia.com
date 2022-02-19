interface MediaWidgetProps {
  className?: string;
  url: string;
  width?: number | string;
  height?: number | string;
  type: "soundcloud" | "youtube";
}

const MediaWidget = ({
  className,
  url,
  width = "100%",
  height = 300,
  type,
}: MediaWidgetProps): React.ReactElement => {
  if (type === "soundcloud") {
    url = url.replace(/http(s?):\/\//i, "");
    return (
      <iframe
        className={className}
        width={width}
        height={height}
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=https%3A//${url}&color=%23484440&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true`}
      />
    );
  }

  if (type === "youtube") {
    url = url.replace(/watch\?v=/i, "embed/");
    return (
      <iframe
        className={className}
        width={width}
        height={height}
        src={url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return <div className="text-danger">Cannot render {url}</div>;
};

export default MediaWidget;
