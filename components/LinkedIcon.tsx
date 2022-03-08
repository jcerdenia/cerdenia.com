import { Icon } from "@iconify/react";

interface LinkedIconProps {
  iconId: string;
  className?: string;
  iconClassName?: string;
  href?: string;
  children?: string;
}

const LinkedIcon = ({
  iconId,
  className,
  iconClassName,
  href,
  children,
}: LinkedIconProps): JSX.Element => {
  return (
    <a className={className} href={href}>
      <Icon icon={iconId} className={iconClassName} /> {children}
    </a>
  );
};

export default LinkedIcon;
