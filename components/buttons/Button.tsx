import { ButtonProps } from "@/lib/types";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconLink,
} from "@tabler/icons-react";
import Link from "next/link";

const Button = ({ network, url }: ButtonProps) => {
  const getBrand = (network: string) => {
    switch (network.toLowerCase()) {
      case "github":
        return {
          icon: <IconBrandGithub size={20} />,
          url,
        };
      case "linkedin":
        return {
          icon: <IconBrandLinkedin size={20} />,
          url,
        };
      case "twitter":
        return {
          icon: <IconBrandTwitter size={20} />,
          url,
        };
      case "instagram":
        return {
          icon: <IconBrandInstagram size={20} />,
          url,
        };
      default:
        return {
          icon: <IconLink size={20} />,
          url,
        };
    }
  };
  return (
    <div className="tooltip" data-tip={network}>
      <Link target="_blank" href={url} className="btn btn-sm btn-circle">
        {getBrand(network).icon}
      </Link>
    </div>
  );
};

export default Button;
