// src/Header/Header.tsx
import { Indicator } from "@mantine/core";
import { IconAnchor, IconBell, IconSettings } from "@tabler/icons-react";
import NavLinks from "./NavLinks";

const Headerafterlogin = () => {
  return (
    <div
      className="w-full px-6 text-white h-28 flex justify-between items-center font-['poppins']"
      style={{ backgroundColor: '#2d2d2d' }}
    >
      <div className="flex gap-3 items-center text-bright-sun-400">
        <IconAnchor className="h-8 w-8" stroke={2.5} />
        <div className="text-2xl font-semibold">JobHook</div>
      </div>
      <NavLinks />
  
        
        <div className="bg-mine-shaft-900 p-1 rounded-full">
          <IconSettings stroke={1.5} />
        </div>
        <div className="bg-mine-shaft-900 p-1 rounded-full">
          <Indicator color="#fabe25" offset={6} size={8} processing>
            <IconBell />
          </Indicator>
        </div>
      </div>
    
  )
};

export default Headerafterlogin;
