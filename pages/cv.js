import Head from 'next/head';

export default function CV() {
  return (
    <>
      <Head>
        <title>CV | Elizabeth Donoway</title>
        <meta name=description content=Curriculum Vitae of Elizabeth Donoway />
      </Head>
      
      <div className=max-w-3xl>
        <section className=mb-8>
          <h2 className=mb-4>education</h2>
          <p>Your education details here</p>
        </section>
        
        <section className=mb-8>
          <h2 className=mb-4>research experience</h2>
          <p>Your research experience details here</p>
        </section>
        
        <section className=mb-8>
          <h2 className=mb-4>publications</h2>
          <p>A summary of your publications</p>
        </section>
        
        <section className=mb-8>
          <h2 className=mb-4>conferences & presentations</h2>
          <p>Your conferences and presentations</p>
        </section>
        
        <section className=mb-8>
          <h2 className=mb-4>awards & honors</h2>
          <p>Your awards and honors</p>
        </section>
        
        <section className=mb-8>
          <h2 className=mb-4>skills</h2>
          <p>Your skills and competencies</p>
        </section>
      </div>
    </>
  );
}
