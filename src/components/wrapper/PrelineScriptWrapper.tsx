'use client';

import dynamic from 'next/dynamic';

const PrelineScript = dynamic(() => import('../../utils/preline.init.utils'), {
  ssr: false,
});

export default function PrelineScriptWrapper() {
  return <PrelineScript />;
}