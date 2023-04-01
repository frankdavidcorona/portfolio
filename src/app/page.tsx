import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import { Raleway } from "next/font/google";

const font = Raleway({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <main
      className={`${font.className} my-32 mx-auto max-w-4xl leading-tight space-y-8 tracking-widest`}
    >
      <h1 className="text-9xl font-extrabold drop-shadow-lg shadow-gray-100">
        Hello<span className="text-amber-600 text-7xl">.</span>
      </h1>
      <div className="flex items-center gap-8 justify-between">
        <div className="flex gap-8 items-center">
          <div className="text-9xl font-extrabold ">I am</div>
          <ul className="list-disc px-2 leading-7 text-md">
            <li>Computer Science Engineer</li>
            <li>Software Development Lead</li>
            <li>Full Stack Developer</li>
            <li>10+ Years of Experience</li>
          </ul>
        </div>
        <ArrowRightCircleIcon className="h-16 w-16 text-amber-600 hover:cursor-pointer" />
      </div>
      <div className="text-9xl font-extrabold ">Frank</div>
    </main>
  );
}
