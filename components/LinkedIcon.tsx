import { Icon } from "@iconify/react";
import Link from "next/link";

interface LinkedIconProps {
  iconId: string;
  className?: string;
  iconClassName?: string;
  iconStyle?: any;
  href: string;
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
  const iconProps = {
    icon: iconId,
    className: iconClassName,
    ...iconStyle,
  };

  if (href.startsWith("/")) {
    return (
      <Link href={href} passHref>
        <a className={className}>
          <Icon {...iconProps} /> {children}
        </a>
      </Link>
    );
  } else {
    return (
      <a className={className} href={href}>
        <Icon {...iconProps} /> {children}
      </a>
    );
  }
};

export default LinkedIcon;
