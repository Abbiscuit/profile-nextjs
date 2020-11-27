import React from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';

const detail = () => {
  return (
    <div>
      <Navigation />
      <p>Detail Page </p>
      <Link href="/">
        <a>Go back</a>
      </Link>
    </div>
  );
};

export default detail;
