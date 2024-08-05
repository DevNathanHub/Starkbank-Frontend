import { auth } from '@clerk/nextjs';
import React, { Suspense, lazy } from 'react';
import dynamic from 'next/dynamic';
import ClientDashboard from './components/ClientDashboard';


export default function Dashboard() {
  const { userId, sessionClaims } = auth();

  return (
    <div className="min-h-screen  flex flex-col items-center justify-center">
        {userId && (
          <>
            <h1 className="text-3xl font-semibold text-black">
              👋 Hi, {sessionClaims?.firstName || 'Customer'}
            </h1>
          </>
        )}
        <ClientDashboard />
    </div>
  );
}
