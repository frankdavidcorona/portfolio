"use client";

import { NavItem } from "@/types";
import { Finlandica } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  item: NavItem;
};

const inter = Finlandica({ subsets: ["latin"] });

export default function NavigationItem({ item }: Props) {
  const pathname = usePathname();
  const isActive = pathname === item.path;

  return (
    <Link
      href={item.path}
      className={`${inter.className} ${
        isActive && `border-b-4 border-amber-600 text-amber-600`
      } font-semibold text-2xl hover:text-amber-600 hover:border-b-4 hover:border-amber-600 rounded-sm`}
    >
      {item.name}
    </Link>
  );
}
