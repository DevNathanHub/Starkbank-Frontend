// app/layouts/Layout.tsx

import React from 'react';
import Head from 'next/head';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Starknet App</title>
        <meta name="description" content="Manage your investments and profile with Starknet." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          {children}
        </div>
      </div>
    </>
  );
}
