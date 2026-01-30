"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(nextLocale: "en" | "es") {
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button className="group relative w-14 h-9 bg-white text-black text-[10px] font-black uppercase tracking-[0.15em] transition-transform duration-300 active:scale-95 rounded-md border border-black/10 shadow-sm overflow-hidden outline-none">
          {/* Animated Brackets - Black and Thicker (border-4) */}
          <span className="absolute top-0 left-0 w-2 h-2 border-t-4 border-l-4 border-black rounded-tl-md transition-all duration-300 group-hover:w-full group-hover:h-full z-0 pointer-events-none"></span>
          <span className="absolute bottom-0 right-0 w-2 h-2 border-b-4 border-r-4 border-black rounded-br-md transition-all duration-300 group-hover:w-full group-hover:h-full z-0 pointer-events-none"></span>
          
          {/* Centered Text Container */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <span>{locale}</span>
          </div>
        </button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent 
        align="end" 
        sideOffset={5}
        className="w-[160px] border-2 border-black rounded-xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white z-[110]"
      >
        <DropdownMenuItem 
          onClick={() => onSelectChange("en")}
          className="flex items-center gap-3 cursor-pointer py-2.5 focus:bg-black focus:text-white transition-colors uppercase font-black text-[10px] tracking-wider"
        >
          English (EN)
        </DropdownMenuItem>
        
        <DropdownMenuItem 
          onClick={() => onSelectChange("es")}
          className="flex items-center gap-3 cursor-pointer py-2.5 focus:bg-black focus:text-white transition-colors uppercase font-black text-[10px] tracking-wider"
        >
          Español (ES)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}