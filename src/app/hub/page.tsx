'use client';

import { useEffect } from 'react';
import testsentry from "../server/actions/test";
import axios from 'axios';

export default function Home() {
  useEffect(() => {
    // const test = async () => {                           //works too
    //   const res = await axios("/test") ;
    // };
    const test = async () => {
      const res = await testsentry();
    };
    test();
  }, []);

  return (
    <div>
      <p>test</p>
    </div>
  );
}