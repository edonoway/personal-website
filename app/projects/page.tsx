export default function Projects() {
  const projects = [
    {
      title: "Quantifying the information theoretic requirements for eliciting latent capabilities in large language models",
      description: "This project focuses on understanding the information theoretic requirements for eliciting latent capabilities in language models as a function of model scale. It aims to quantify the amount of information needed to trigger these capabilities and explore the implications for model performance and safety. The project also investigates the amount of information added to a model during different training stages, such as pretraining and reinforcement learning from human feedback (RLHF), on the acquisition of these capabilities and their implications for estimating the performance ceilings of models. I am motivated by understanding how turning the different knobs of a system results in specific, measurable, predictable behavior—much in the vein of phase diagrams that describe the physical state of a system given a particular set of parameters or conditions. My research applies this perspective to understanding how capabilities are (first) taught and (later) elicited in large language models. By tuning the number of model parameters or bits of information consumed during training, we are to predict the capability ceiling that can be achieved—and how far we are away from it. Additionally, we should be able to use such predictions to make quantitatively-backed statements like “the number of bits that are required for model X to express capability Y is larger than the amount of information that this model can contain.",
      paperUrl: "/papers/quantifying-information-theoretic-requirements.pdf"
    },
    {
      title: "Symmetry-breaking pathways to the unpinned broken helix in the axion-insulator candidate EuIn2As2",
      description: "This project focused on uncovering and rigorously describing the cascade of time-reversal and rotational symmetry-breaking which leads to the stabilization of an unpinned broken helix ground state in the axion-insulator candidate EuIn2As2. We developed a novel, multimodal approach combining symmetry-sensitive optical probes, neutron scattering data, and group theoretic analysis to resolve and unify seemingly conflicting perspectives on the nature of this state and its underlying magnetic symmetries. We employed a novel approach to ultrafast pump-probe polarimetry under varying strain and temperature conditions to investigate the dynamics of the broken helix phase, reveal and explain its origin, and understand its implications for the material's topological properties and the stabilization of topologically-protected, axion-insulator states. This enabled us to provide insights into the mechanisms underlying the emergence of this phase and its potential applications in quantum materials."
    },
    {
      title: "Optics of atomically thin transition metal dichalcogenide heterostructures",
      description: "Studying the optical response of 2D TMDCs in collaboration with the Stanford Institute for Materials and Energy Sciences (SIMES)."
    },
    {
      title: "Topological phase transition dynamics of polar skyrmions",
      description: "Scanning transmission electron microscopy (STEM) superlattice thin films reveals a rich variety of topological structure and shows that topological structures can be tuned via manipulation of strain and temperature conditions."
    },
    {
      title: "Resonant X-ray ferroelectric circular dichroism holography of polar topological textures in thin-film heterostructures",
      description: "This project developed the technique of resonant X-ray ferroelectric circular dichroism holography to study polar topological textures in thin-film heterostructures. This new imaging technique provides insights into the complex interplay of electric, magnetic, and lattice degreees of freedom in these systems by enabling nanoscale resolution of the topological structures and ferroic orders that arise through such correlated interactions."
    },
    {
      title: "Probing exotic phases of matter in interfacial thin films",
      description: "This project aimed to apply the spectacular success of atomic layer-by-layer deposition via thin-film epitaxy to precisely manipulate the spin degree of freedom in quantum magnets, enabling precise engineering of states proximal to quantum spin liquids. I was particularly interested in understanding how strain, temperature, and magnetic field alter magnetic exchange interactions, resulting in stabilization of exotic and topological phases of matter through minimization of the Landau free energy. I thought this could be a promising way to explore the rich landscape of phases that arise through the interplay of quantum, electronic, and magnetic degrees of freedom. In particular, I hoped to explore phases proximal to quantum spin liquid and quantum spin ice states and map out the phase diagram of complex quantum magnetism in thin film pyrochlore iridates, which are promising candidates for hosting these phenomena. I switched groups before getting to the experimentation phase of this project, but I have a lot of ideas and initial proofs of concept for how to approach this problem, and I would be really excited to see this research done! Please reach out if you're working on something similar and would like to collaborate!"
    },
    {
      title: "Resonant x-ray scattering of polar topological structures in confined ferroelectrics",
      description: "Polar topological textures—skyrmions, vortices, and merons—have uniquely been observed and robustly stabilized in epitaxial confined ferroelectrics. Therein, interfacial constraints favor the non-uniform rotation of polarization within the polar layers, leading to the formation of emergent topological structures due to the low-dimensionality of these systems. These topologies characterize phases concomitant with exotic functional properties, motivating exploration into ways to extrinsically manipulate these features. Using scanning convergent beam electron diffraction, X-ray holography, and phase-field simulations, we demonstrated that polar skyrmions in (PbTiO3)n/(SrTiO3)n superlattices form a phase characterized by interactions that are extrinsically tunable via temperature and strain, enabling control over phase transitions between distinct ordering configurations and topological states. We have employed several emerging techniques to examine the interplay between emergent phenomena--namely topology, ordering, and chirality--and extrinsic parameters, to describe the topological phase diagram and phenomenology of polar oxide superlattices. Additionally, we have developed and introduced a new technique, resonant X-ray ferroelectric circular dichroism holography, that enables direct resolution of the chirality of polar topological textures down to previously inaccessible, nanometer length scales. This technique provides a powerful tool for probing ferroic order arising from correlated electron-lattice couplings and their implications for the understanding of topological phenomena."
    },
    {
      title: "Visualizing energy gap modulations in Bi-2212, a high-temperature cuprate superconductor",
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
