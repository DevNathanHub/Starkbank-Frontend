import {
  ClerkProvider,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StarkBank - Your Banking app on Chain",
  description:
    " Your most secure, entirely on-chain banking option is StarkBank, which provides decentralized savings and loans with incredibly interest rates.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider >
        <body className={`${inter.className} min-h-screen flex flex-col`}>
      
        <header className="flex items-center h-20 gap-4 px-4 border-b border-black border-solid sm:px-8 border-opacity-20">
  <div className="flex items-center gap-2 sm:gap-4">
    <Link href="/">
      <Image
        src="/logo.png"
        alt="Bchain - Starknet" 
        width={120}
        height={30}
        priority

      />
    </Link>
  </div>
  <div className="flex-grow flex justify-center">
  </div>
  <div>
    <SignedIn>
      <UserButton afterSignOutUrl="/" />
    </SignedIn>
  </div>
</header>



          <main className="grow">{children}</main>


          <footer className="flex items-center h-20 gap-1 px-8 font-medium border-t md:px-20">
          
      
            <nav className="flex justify-end grow sm:gap-2">
          
              <a
                className="flex flex-col justify-center p-2 hover:underline"
                href="https://twitter.com/codebuddy777"
              >
                <Twitter />
              </a>
              
            </nav>
          </footer>
        </body>
      </ClerkProvider>

    </html>
  );
}



function Twitter() {
  return (
    <svg
      width="19"
      height="15"
      viewBox="0 0 19 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.36796 14.5C4.34609 14.5 2.46136 13.9119 0.875 12.8973C2.22187 12.9844 4.59879 12.7757 6.07724 11.3655C3.85317 11.2634 2.85016 9.55768 2.71934 8.82873C2.90831 8.90162 3.80956 8.9891 4.31834 8.78499C1.75994 8.14351 1.36745 5.89833 1.45467 5.21311C1.93437 5.54843 2.74841 5.66506 3.06821 5.6359C0.684246 3.93015 1.54189 1.36422 1.96345 0.810218C3.67426 3.18042 6.23825 4.51161 9.41024 4.58565C9.35043 4.32335 9.31885 4.05026 9.31885 3.76978C9.31885 1.75682 10.9459 0.125 12.9529 0.125C14.0016 0.125 14.9465 0.570471 15.6098 1.28302C16.3106 1.11882 17.3652 0.734417 17.8808 0.402003C17.6209 1.33507 16.8118 2.11343 16.3224 2.40192C16.3185 2.39207 16.3265 2.41174 16.3224 2.40192C16.7523 2.3369 17.9155 2.11336 18.375 1.8016C18.1478 2.32578 17.29 3.19733 16.5861 3.68526C16.717 9.46129 12.2978 14.5 6.36796 14.5Z"
        fill="#47ACDF"
      />
    </svg>
  );
}



