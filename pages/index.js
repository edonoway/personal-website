import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About | Elizabeth Donoway</title>
        <meta name=description content=Physics PhD student researching optical techniques and quantum materials />
      </Head>
      
      <div className=max-w-3xl>
        <p className=mb-4>
          I'm a physics PhD student studying the application of novel optical techniques to study emergent phenomena and exotic phases of matter in quantum materials.
        </p>
        
        <p className=mb-4>
          My research focuses on how light and material systems interact when they are affected by polarization and magnetic field, and I use various optical techniques at the visible and near-infrared regions to study emergent phenomena in strongly correlated electron systems.
        </p>
        
        <p className=mb-4>
          In my free time, I enjoy film photography, music production, analog video synthesis, and collecting other creative hobbies.
        </p>
        
        <p className=mb-4>
          I also co-created a machine learning algorithm to classify chorus varieties based on different acoustic features, which is used in an interactive visualization of this project where you can explore the 3D vector space of chorus varieties.
        </p>
      </div>
    </>
  );
}
