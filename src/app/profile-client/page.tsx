'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { cache, use } from 'react';

type User = {
  id: number;
  name: string;
  email: string;
};

const getUsers = cache(() =>
  fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json())
);

export default function Profile() {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/api/auth/signin');
    },
  });

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  let users = use<User[]>(getUsers());

  return (
    <div className="grid grid-cols-4 gap-4 text-center">
      {users.map((user) => (
        <div key={user.id} className="border-slate-600">
          <Image
            className="mx-auto"
            src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
            alt={user.name}
            height={180}
            width={180}
          />
          <h3>{user.name}</h3>
        </div>
      ))}
    </div>
  );
}
