import Head from 'next/head';

export default function Publications() {
  const publications = [
    {
      year: 2021,
      title: Structural patterns of elastic polarization vectors quantified by X-ray resonant scattering
    },
    {
      year: 2020,
      title: Imaging the energy gap modulations of the cuprate pair-density-wave state
    },
  ];

  return (
    <>
      <Head>
        <title>Publications | Elizabeth Donoway</title>
        <meta name=description content=Academic publications by Elizabeth Donoway />
      </Head>
      
      <div className=max-w-3xl>
        <ul className=space-y-8>
          {publications.map((pub, index) => (
            <li key={index} className=flex>
              <div className=w-16>{pub.year}</div>
              <div>{pub.title}</div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
