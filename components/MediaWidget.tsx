import { setAttributes } from "../lib/utils";

interface MediaWidgetProps {
  className?: string;
  src: string;
  width?: number | string;
  height?: number | string;
  style?: object;
  visual?: boolean;
  onMouseEnter?: VoidFunction;
  onMouseLeave?: VoidFunction;
}

export const heights = {
  COMPACT: 152,
  SHORT: 232,
  NORMAL: 300,
  TALL: 352,
};

const MediaWidget = ({
  className,
  src,
  width = "100%",
  height = heights.NORMAL,
  style = {},
  onMouseEnter,
  onMouseLeave,
}: MediaWidgetProps): JSX.Element => {
  const props = {
    className,
    src,
    width,
    height,
    style,
    onMouseEnter,
    onMouseLeave,
  };

  switch (true) {
    case src.includes("youtube.com"): {
      return (
        <iframe
          {...props}
          src={src.replace(/watch\?v=/i, "embed/")}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    }

    case src.includes("soundcloud.com"): {
      const url = new URL("https://w.soundcloud.com/player/");

      setAttributes(url.searchParams, "set", {
        url: src,
        color: "#484440",
        auto_play: false,
        hide_related: true,
        show_comments: false,
        show_user: false,
        show_reposts: false,
        show_teaser: false,
        visual: true,
      });

      return <iframe {...props} src={url.toString()} allow="autoplay" />;
    }

    case src.includes("spotify.com"): {
      const url = new URL(src.replace("spotify.com", "spotify.com/embed"));

      setAttributes(url.searchParams, "set", {
        utm_source: "generator",
        theme: 0,
      });

      return (
        <iframe
          {...props}
          src={url.toString()}
          style={{ ...style, borderRadius: "12px" }}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      );
    }

    default: {
      return <text className="text-danger">Cannot render {props.src}</text>;
    }
  }
};

export default MediaWidget;
