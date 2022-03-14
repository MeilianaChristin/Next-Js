import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    // after 2 seconds , then push to homepage redirect
    setTimeout(() => {
      router.push('/');
    }, 2000);
  }, []);
  return (
    <div>
      <h1 className="title-not-found">Oopsss...</h1>
      <h1 className="title-not-found">This page not found</h1>
    </div>
  );
}
