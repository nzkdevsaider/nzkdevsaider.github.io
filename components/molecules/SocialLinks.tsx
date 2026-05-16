"use client";

import { GithubLogoIcon, LinkedinLogoIcon, InstagramLogoIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { basics } from "@/lib/cv.json";

const iconMap: Record<string, React.ElementType> = {
  GitHub: GithubLogoIcon,
  LinkedIn: LinkedinLogoIcon,
  Instagram: InstagramLogoIcon,
};

const SocialLinks = () => {
  const socialProfiles = basics.profiles.filter((p) => iconMap[p.network]);

  return (
    <div className="flex flex-row items-center gap-0.5">
      {socialProfiles.map((profile) => {
        const Icon = iconMap[profile.network];
        return (
          <Link
            key={profile.network}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 rounded-lg text-base-content/60 hover:text-base-content hover:bg-base-200 transition-colors"
            aria-label={profile.network}
          >
            <Icon className="w-4 h-4" />
          </Link>
        );
      })}
    </div>
  );
};

export default SocialLinks;
