import Navbar from "./navbar";
import { Button } from "./ui/button";
import logo from "@/assets/logo.jpg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Separator } from "./ui/separator";
function Header() {
  return (
    <header className="flex justify-between container mx-auto py-5">
      <div className="flex justify-between items-center gap-5">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="h-12 w-12" />
          <h3 className="font-bold">Monotree</h3>
        </div>
        <div>
          <Navbar />
        </div>
      </div>
      <div className="flex gap-2">
        <Button variant={"outline"}>Book a demo</Button>
        <Separator orientation="vertical" />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              English <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Nepali</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

export default Header;
