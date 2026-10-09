import { redirect } from 'next/navigation';

const RootPage = () => {
  redirect('/app/dashboard');
};

export default RootPage;
