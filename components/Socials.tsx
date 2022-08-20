import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";

import socials from "../data/socials";
import LinkedIcon from "./LinkedIcon";

const Socials = (): JSX.Element => {
  const renderTooltip = (text: string) => {
    return <Tooltip id="button-tooltip">{text}</Tooltip>;
  };

  return (
    <span className="socials-row">
      {socials.map((social, i) => {
        return (
          <OverlayTrigger
            key={i}
            placement="auto"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip(social.name)}
          >
            <div>
              <LinkedIcon
                iconId={social.iconId}
                iconClassName="icon"
                iconStyle={social.iconStyle}
                href={social.url}
              />
            </div>
          </OverlayTrigger>
        );
      })}
    </span>
  );
};

export default Socials;
