import Image from "next/image";
import headerImage from "@/public/header-image.jpg";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { BsFillClockFill } from "react-icons/bs";

export default function Home() {
  return (
    /* <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
 
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
 
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>
 
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>
 
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>
 
        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>*/
    <main>
      {/* --- Navigation bar --- */}
      <nav className="md:h-[12vh] w-full md:p-8 p-4 flex items-center justify-between border-b-[1px] border-b-gray-200 bg-white sticky top-0 z-20">
        <h2 className="text-2xl font-bold text-purple-600">TechGrow</h2>
        <button className="bg-purple-600 hover:bg-purple-800 text-white px-5 py-3 rounded-2xl">
          Get Started
        </button>
      </nav>

      {/* --- Header --- */}
      <header className="min-h-[88vh] w-full md:px-8 px-4 py-12 flex md:flex-row flex-col items-center justify-between">
        <div className="md:w-[60%] w-full md:pr-6 md:mb-0 mb-8">
          <h2 className="font-extrabold text-5xl mb-4">
            Future-Proof Your Career with Top Digital Skills!
          </h2>
          <p className="opacity-60 mb-4">
            Unlock your full potential of a future-proof career through the
            power of top digital skills with our all-in-one growth package.
          </p>
          <button className="bg-purple-600 hover:bg-purple-800 w-[200px] text-white px-5 py-3 rounded-2xl text-lg font-semibold">
            Get Started
          </button>
        </div>
        <div className="md:w-[40%] w-full">
          <Image
            src={headerImage}
            alt="Woman on laptop"
            className="rounded-lg"
          />
        </div>
      </header>

      {/* --- Features Section --- */}
      <section className="w-full min-h-[88vh] bg-purple-50 md:px-8 px-4 py-14 ">
        <h2 className="font-extrabold text-3xl text-center mb-4">
          Why Choose Us?
        </h2>
        <p className="opacity-50 text-center">
          Unlock your full potential of a future-proof career
        </p>
        <p className="opacity-50 mb-14 text-center">
          that surpasses your expectation.
        </p>
        <div className="flex w-full items-center justify-between md:space-x-6 md:flex-row flex-col">
          <div className="md:w-1/3 md:mb-0 mb-6 w-full bg-white rounded-xl px-5 py-8 hover:border-[1px] hover:border-purple-600 hover:shadow-md">
            <div className="rounded-full p-4 bg-purple-50 max-w-max mb-2">
              <FaChalkboardTeacher className="text-2xl text-purple-800" />
            </div>
            <p className="font-bold text-lg mb-2">Expert instructors</p>
            <p className="text-sm opacity-50">
              Learn from industry experts, gaining unique insights which cannot
              be found elsewhere.
            </p>
          </div>
          <div className="md:w-1/3 md:mb-0 mb-6 w-full bg-white rounded-xl px-5 py-8 hover:border-[1px] hover:border-purple-600 hover:shadow-md">
            <div className="rounded-full p-4 bg-purple-50 max-w-max mb-2">
              <IoDocumentTextSharp className="text-2xl text-purple-800" />
            </div>
            <p className="font-bold text-lg mb-2">Hands-On Projects</p>
            <p className="text-sm opacity-50">
              Learn practical, real-world digital skills through relevant
              projects and interactive sessions.
            </p>
          </div>
          <div className="md:w-1/3 md:mb-0 mb-6 w-full bg-white rounded-xl px-5 py-8 hover:border-[1px] hover:border-purple-600 hover:shadow-md">
            <div className="rounded-full p-4 bg-purple-50 max-w-max mb-2">
              <BsFillClockFill className="text-2xl text-purple-800" />
            </div>
            <p className="font-bold text-lg mb-2">Lifetime Access</p>
            <p className="text-sm opacity-50">
              Unlimited lifetime access for continuous learning and personal
              growth.
            </p>
          </div>
        </div>
      </section>

      {/* --- Purchase Now Section--- */}
      <div className="w-full min-h-[70vh] py-14 md:px-12 px-4 bg-purple-700 flex md:flex-row flex-col items-center justify-between">
        <div className="md:w-[50%] w-full md:pr-6 md:mb-0 mb-8">
          <h2 className="font-extrabold text-5xl mb-4 text-purple-50">
            Start learning and grow your skills today!{" "}
          </h2>
          <p className="mb-4 text-purple-300">
            Unlock your full potential of a future-proof career through the
            power of top digital skills with our all-in-one growth package.
          </p>
          <div className="mb-6">
            <div className="flex items-center space-x-3 mb-2">
              <AiFillCheckCircle className="text-2xl text-green-300" />
              <p className="text-purple-50 text-sm opacity-80">
                24/7 availability
              </p>
            </div>
            <div className="flex items-center space-x-3 mb-2">
              <AiFillCheckCircle className="text-2xl text-green-300" />
              <p className="text-purple-50 text-sm opacity-80 ">
                Expert-led tutorials
              </p>
            </div>
            <div className="flex items-center space-x-3 mb-2">
              <AiFillCheckCircle className="text-2xl text-green-300" />
              <p className="text-purple-50 text-sm opacity-80 ">
                High-quality contents
              </p>
            </div>
            <div className="flex items-center space-x-3 mb-2">
              <AiFillCheckCircle className="text-2xl text-green-300" />
              <p className="text-purple-50 text-sm opacity-80 ">
                Hands-on practical and interactive sessions
              </p>
            </div>
          </div>
          <button className="bg-purple-50 hover:bg-purple-100 w-[200px] text-purple-600 px-5 py-3 rounded-2xl text-lg font-semibold">
            Purchase Now
          </button>
        </div>
        <div className="md:w-[50%] w-full flex items-center justify-center">
          <Image
            src={buy}
            alt="Man smiling"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* --- Footer Section --- */}
    </main>
  );
}
