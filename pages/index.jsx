import { useState } from 'react';

import Seo from '@/components/Seo';
import CustomLink from '@/components/CustomLink';
import { getFromLocalStorage, processNumber } from '@/helper';

export default function Home() {
  const [id, setId] = useState(
    () => getFromLocalStorage('countrycode') || '62'
  );
  const [number, setNumber] = useState('');

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  const handleIdChange = (e) => {
    const newId = e.target.value.replace(/[^\d]/g, '');
    setId(newId);
    localStorage.setItem('countrycode', newId);
  };

  const link = `https://wa.me/${processNumber(number, id)}`;

  return (
    <>
      <Seo />

      <main>
        <section className='bg-dark'>
          <div className='flex flex-col items-center justify-center min-h-screen space-y-8 text-white layout'>
            <div className='flex flex-col space-y-2'>
              <label className='text-sm font-bold' htmlFor='id'>
                Country code:
              </label>
              <input
                className='border-gray-600 rounded-lg bg-dark focus:ring-primary-400'
                value={id}
                name='id'
                onChange={handleIdChange}
                type='text'
                pattern='\d*'
              />
            </div>
            <div className='flex flex-col space-y-2'>
              <label className='text-sm font-bold' htmlFor='number'>
                Input your number:
              </label>
              <input
                className='border-gray-600 rounded-lg bg-dark focus:ring-primary-400'
                value={number}
                name='number'
                onChange={handleChange}
                type='text'
                pattern='\d*'
              />
            </div>
            <CustomLink href={link}>{link}</CustomLink>
          </div>
        </section>
      </main>
    </>
  );
}
