export default function Publications() {
  const publications = [
    {
      year: "2025",
      title: "Hidden domain boundary dynamics toward crystalline perfection",
      journal: "Proceedings of the National Academy of Sciences",
      url: "https://www.pnas.org/doi/abs/10.1073/pnas.2407772122"
    },
    {
      year: "",
      title: "Light-Induced Reorientation Transition in an Antiferromagnetic Semiconductor",
      journal: "Physical Review X",
      url: "https://journals.aps.org/prx/abstract/10.1103/PhysRevX.15.011044"
    },
    {
      year: "2024",
      title: "Multimodal Approach Reveals the Symmetry-Breaking Pathway to the Broken Helix in EuIn2As2",
      journal: "Physical Review X",
      url: "https://journals.aps.org/prx/abstract/10.1103/PhysRevX.14.031013"
    },
    {
      year: "",
      title: "Hidden non-equilibrium pathways towards crystalline perfection",
      journal: "ArXiv Preprint",
      url: "https://ui.adsabs.harvard.edu/abs/2024arXiv240204962M/abstract"
    },
    {
      year: "2023",
      title: "Symmetry-breaking pathway towards the unpinned broken helix",
      journal: "ArXiv Preprint",
      url: "https://arxiv.org/abs/2310.16018"
    },
    {
      year: "",
      title: "Spin-carrier coupling induced ferromagnetism and giant resistivity peak in EuCd2P2",
      journal: "Physical Review B",
      url: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.107.144404"
    },
    {
      year: "2022",
      title: "Structural chirality of polar skyrmions probed by resonant elastic x-ray scattering",
      journal: "Physical Review Letters",
      url: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.129.247601"
    },
    {
      year: "",
      title: "Beyond the imitation game: Quantifying and extrapolating the capabilities of language models",
      journal: "ArXiv Preprint",
      url: "https://arxiv.org/abs/2206.04615"
    },
    {
      year: "",
      title: "Chiral structures of electric polarization vectors quantified by X-ray resonant scattering",
      journal: "Nature Communications",
      url: "https://www.nature.com/articles/s41467-022-29359-5"
    },
    {
      year: "2020",
      title: "Imaging the energy gap modulations of the cuprate pair-density-wave state",
      journal: "Nature",
      url: "https://www.nature.com/articles/s41586-020-2143-x"
    },
  ];

  return (
    <div className="max-w-3xl">
      <ul className="space-y-8">
        {publications.map((pub, index) => (
          <li key={index} className="flex">
            <div className="w-16"><b>{pub.year}</b></div>
            <a href={pub.url} target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
              &quot;{pub.title},&quot; <i>{pub.journal}</i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
