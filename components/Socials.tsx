import { OverlayTrigger, Tooltip } from "react-bootstrap";

import socials from "../data/socials";
import LinkedIcon from "./LinkedIcon";

interface OverlayProps {
  text: string;
  children: JSX.Element;
  disabled?: boolean;
}

const Overlay = ({ text, children, disabled = false }: OverlayProps) => {
  if (disabled) {
    return children;
  }

  const renderTooltip = (text: string) => {
    return <Tooltip id="button-tooltip">{text}</Tooltip>;
  };

  return (
    <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip(text)}
    >
      {children}
    </OverlayTrigger>
  );
};

const Socials = (): JSX.Element => {
  return (
    <span className="socials-row">
      {socials.map((social) => {
        return (
          <Overlay key={social.url} text={social.name} disabled>
            <div>
              <LinkedIcon
                iconId={social.iconId}
                iconClassName="icon"
                iconStyle={social.iconStyle}
                href={social.url}
              />
            </div>
          </Overlay>
        );
      })}
    </span>
  );
};

export default Socials;
