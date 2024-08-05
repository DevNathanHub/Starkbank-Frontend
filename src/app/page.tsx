import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <article className="grid relative min-h-screen  overflow-hidden">
        <div className="px-8 py-20 md:px-20 lg:py-48 text-center">
          <h1 className="text-5xl font-semibold text-transparent md:text-6xl gradient md:leading-[1.5em]">
            StarkBank - Your Decentralized Banking App
          </h1>
          <p className="mt-2 text-lg">
          Your most secure, entirely on-chain banking option is StarkBank, which provides decentralized savings and loans with incredibly interest rates.          </p>

          <SignedIn>
            <div className="mt-8 inline-block">
              <Link href="/dashboard" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
                Go to Dashboard
              </Link>
            </div>
          </SignedIn>

          <SignedOut>
            <div className="mt-8 inline-block">
              <SignInButton afterSignInUrl="/dashboard">
                <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">Sign in</button>
              </SignInButton>
            </div>
          </SignedOut>
        </div>
      </article>

    </main>
  );
}
