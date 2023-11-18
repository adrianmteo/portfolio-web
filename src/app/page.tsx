"use client";

import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

const words = [
  "am a full-stack developer",
  "work with TypeScript",
  "use GraphQL for my APIs",
  "have experience with Prisma and PostgreSQL",
  "deploy bleeding edge web apps to Vercel",
  "make beautiful native SwiftUI apps",
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center max-w-screen-md ">
        <h1 className="text-4xl leading-snug font-semibold">
          Hello, my name is{" "}
          <span className="text-blue-600">Adrian Mateoaea</span>
          <br />
          and I work remotely from{" "}
          <Link
            target="_blank"
            className="text-blue-600"
            href="https://www.google.com/maps/place/Cluj-Napoca"
          >
            Cluj-Napoca
          </Link>
          .
          <br />I{" "}
          <span className="text-blue-600">
            <Typewriter
              cursor
              loop={0}
              words={words}
              typeSpeed={50}
              cursorBlinking={false}
              cursorStyle={
                <span className="h-7 w-1 bg-white inline-block animate-pulse" />
              }
              deleteSpeed={25}
              delaySpeed={2000}
            />
          </span>
          .
        </h1>
        <div className="mt-6">
          <Link
            target="_blank"
            href="https://github.com/adrianmteo"
            className="text-black bg-white rounded-md px-4 py-2 font-semibold inline-flex justify-center"
          >
            <Image
              priority
              width={24}
              height={24}
              alt="GitHub"
              src="/images/github.svg"
              className="inline-block mr-2"
            />
            <span>GitHub</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
