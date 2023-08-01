'use client';

import { signIn, signOut } from 'next-auth/react';
import Link from 'next/link';

export const LoginButton = () => {
  return (
    <button className="mr-3" onClick={() => signIn()}>
      Sign in
    </button>
  );
};

export const LogoutButton = () => {
  return (
    <button className="mr-3" onClick={() => signOut()}>
      Sign out
    </button>
  );
};

export const RegisterButton = () => {
  return (
    <Link href="/register" className="mr-3">
      Register
    </Link>
  );
};

export const ProfileClientButton = () => {
  return (
    <Link className="mr-3" href="/profile-client">
      Profile (Client)
    </Link>
  );
};

export const ProfileServerButton = () => {
  return (
    <Link className="mr-3" href="/profile-server">
      Profile (Server)
    </Link>
  );
};
