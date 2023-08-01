import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import { redirect } from 'next/navigation';

type User = {
  id: number;
  name: string;
  email: string;
};

export default async function ProfileServer() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/api/auth/signin');
  }

  const users: User[] = await fetch(
    'https://jsonplaceholder.typicode.com/users'
  ).then((res) => res.json());

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
