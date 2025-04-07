export default function Projects() {
  const projects = [
    {
      title: "Optics of atomically thin transition metal dichalcogenide heterostructures",
      description: "Studying the optical response of 2D TMDCs in collaboration with the stanford institute for materials and energy sciences (SIMES)."
    },
    {
      title: "Topological phase transition dynamics of polar skyrmions",
      description: "Scanning transmission electron microscopy (STEM) superlattice thin films reveals a rich variety of topological structure and shows that topological structures can be tuned via manipulation of strain and temperature conditions."
    },
    {
      title: "Resonant x-ray scattering of polar topological structures in confined ferroelectrics",
      description: ""
    },
    {
      title: "Visualizing energy gap modulations in a high-temperature cuprate superconductor",
      description: ""
    }
  ];

  return (
    <div className="max-w-3xl">
      <ul className="space-y-8">
        {projects.map((project, index) => (
          <li key={index} className="mb-6">
            <h2 className="mb-2"><b>{project.title}</b></h2>
            {project.description && <p>{project.description}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
