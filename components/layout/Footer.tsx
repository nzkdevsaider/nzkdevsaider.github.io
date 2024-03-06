import { CommandMenu } from "../CommandMenu";
import RESUME_DATA from "@/lib/cv.json";

const Footer = () => {
  const { basics } = RESUME_DATA;

  return (
    <CommandMenu
      links={basics.profiles.map((profile, index) => {
        return {
          url: profile.url,
          title: profile.network,
        };
      })}
    />
  );
};

export default Footer;
