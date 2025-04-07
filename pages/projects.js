import Head from 'next/head';

export default function Projects() {
  const projects = [
    {
      title: "optics of atomically thin transition metal dichalcogenide heterostructures",
      description: "studying the optical response of 2D TMDCs in collaboration with the stanford institute for materials and energy sciences (SIMES)."
    },
    {
      title: "topological phase transition dynamics of polar skyrmions",
      description: "scanning transmission electron microscopy (STEM) superlattice thin films reveals a rich variety of topological structure and shows that topological structures can be tuned via manipulation of strain and temperature conditions."
    },
    {
      title: "resonant x-ray scattering of polar topological structures in confined ferroelectrics",
      description: ""
    },
    {
      title: "visualizing energy gap modulations in a high-temperature cuprate superconductor",
      description: ""
    }
  ];

  return (
    <>
      <Head>
        <title>Projects | Elizabeth Donoway</title>
        <meta name="description" content="Research projects by Elizabeth Donoway" />
      </Head>
      
      <div className="max-w-3xl">
        <ul className="space-y-8">
          {projects.map((project, index) => (
            <li key={index} className="mb-6">
              <h2 className="mb-2">{project.title}</h2>
              {project.description && <p>{project.description}</p>}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
import Head from 'next/head';

export default function Conferences() {
  return (
    <>
      <Head>
        <title>Conferences | Elizabeth Donoway</title>
        <meta name=description content=Conference presentations by Elizabeth Donoway />
      </Head>
      
      <div className=max-w-3xl>
        <p>Conference information will be added here.</p>
      </div>
    </>
  );
}
