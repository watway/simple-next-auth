'use client';
import { useSession } from 'next-auth/react';

export default function UserSession() {
  const { data: session } = useSession();

  return (
    <>
      <h1>Client Session</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </>
  );
}
