export { default } from 'next-auth/middleware';

export const config = {
  // ensure any routes other than those for register, login, and api directories will be protected
  matcher: ['/((?!register|api|login).*)'], // TODO: how to ignore public folder, ie assets
};
