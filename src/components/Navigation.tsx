import NavigationItem from "@/components/NavigationItem";
import { navigation } from "@/constants";
import { Finlandica } from "next/font/google";

const inter = Finlandica({ subsets: ["latin"] });

export default function Navigation() {
  return (
    <div className="flex justify-between p-10">
      <div className="space-x-6 flex">
        {navigation.map((item, indexItem) => (
          <NavigationItem item={item} key={indexItem} />
        ))}
      </div>

      <div className={`text-amber-600 text-xl font-bold ${inter.className}`}>
        frank.corona@pm.me
      </div>
    </div>
  );
}
