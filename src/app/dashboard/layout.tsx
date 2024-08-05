// app/layouts/Layout.tsx or app/layouts/Layout.jsx

import SideNav from '../UI/Dashboard/sidenav';
import Head from 'next/head';

export const metadata = {
  metadataBase: new URL('http://localhost:3000/dashboard'),
  title: 'Starkbank Dashboard',
  description: 'Starknet Dashboard provides you with All in one Investments, Loans and Accont Balance',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      </div>
    </>
  );
}
