import { Icon } from "@iconify/react";

interface LinkedIconProps {
  iconId: string;
  className?: string;
  iconClassName?: string;
  iconStyle?: any;
  href?: string;
  children?: string;
}

const LinkedIcon = ({
  iconId,
  className,
  iconClassName,
  iconStyle,
  href,
  children,
}: LinkedIconProps): JSX.Element => {
  return (
    <a className={className} href={href}>
      <Icon icon={iconId} className={iconClassName} style={iconStyle} />{" "}
      {children}
    </a>
  );
};

export default LinkedIcon;
