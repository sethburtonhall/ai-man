import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MobileMenuProps {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  navItems?: React.ReactNode;
}

export default function MobileMenu(props: MobileMenuProps) {
  return (
    <Sheet>
      <SheetTrigger>{props.icon}</SheetTrigger>

      <SheetContent className="bg-zinc-950 pt-4">
        <SheetHeader>
          <SheetTitle>{props.title}</SheetTitle>
        </SheetHeader>
        {props.navItems}
      </SheetContent>
    </Sheet>
  );
}
