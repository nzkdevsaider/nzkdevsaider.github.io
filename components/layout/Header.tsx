import RESUME_DATA from "@/lib/cv.json";
import { generateId } from "@/lib/utils";
import { IconWorld } from "@tabler/icons-react";
import Button from "../buttons/Button";
const Header = () => {
  return (
    <div className="max-w-3xl mx-auto my-3">
      <h1 className="text-4xl font-medium my-2 animate-fade-in">{RESUME_DATA.basics.name}</h1>
      <div className="text-gray-600">
      <p className="text-md">{RESUME_DATA.basics.label}</p>
      <div className="flex flex-row items-center gap-1 mb-2">
        <IconWorld size={15} />
        <p className="text-sm font-mono">{RESUME_DATA.basics.location.city}</p>
      </div>
      <div className="flex flex-row items-center gap-2">
        {RESUME_DATA.basics.profiles.map((profile, index) => (
          <Button
            network={profile.network}
            url={profile.url}
            key={generateId(index)}
          />
        ))}
      </div>
      </div>
    </div>
  );
};

export default Header;
