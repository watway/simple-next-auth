import UserSession from '@/components/user';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <>
      <h1>Server Session</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>

      <UserSession />
    </>
  );
}
