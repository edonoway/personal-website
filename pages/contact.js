import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Elizabeth Donoway</title>
        <meta name=description content=Contact Elizabeth Donoway />
      </Head>
      
      <div className=max-w-3xl>
        <p className=mb-4>email: [firstname][dot][lastname] [at] berkeley.edu</p>
        <p>LinkedIn: Update with LinkedIn profile link</p>
      </div>
    </>
  );
}
