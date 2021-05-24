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
            <div className='flex flex-col space-y-2 text-center'>
              <h1>WhatsApp Helper</h1>
              <p>A helper to avoid saving number to your contacts.</p>
              <p className='text-sm text-gray-500'>
                This site does not collect any personal information.
              </p>
            </div>
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
            <CustomLink data-splitbee-event='Link Click' href={link}>
              {link}
            </CustomLink>
            <footer className='absolute space-y-2 text-sm text-center text-gray-400 bottom-2'>
              <CustomLink href='https://www.producthunt.com/posts/whatsapp-helper?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-whatsapp-helper'>
                <img
                  src='https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=297052&theme=dark'
                  alt='WhatsApp Helper - A WhatsApp helper to avoid saving number to your contacts | Product Hunt'
                  width='250'
                  height='54'
                  className='w-48'
                />
              </CustomLink>
              <p>
                © {new Date().getFullYear()} by{' '}
                <CustomLink href='https://theodorusclarence.com'>
                  Theodorus Clarence
                </CustomLink>
              </p>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}
