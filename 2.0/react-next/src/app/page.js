'use client';

import dynamic from 'next/dynamic';

const CueSyncComponent = dynamic(() => import('../components/CueSyncComponent'), {
  ssr: false,
});

export default function Page() {
  return (
    <main style={{ maxWidth: '800px', margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>CueSync + Next.js</h1>
      <CueSyncComponent />
    </main>
  );
}
