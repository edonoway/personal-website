export default function Publications() {
  const publications = [
    {
      year: "2021",
      title: "Structural patterns of elastic polarization vectors quantified by X-ray resonant scattering"
    },
    {
      year: "2020",
      title: "Imaging the energy gap modulations of the cuprate pair-density-wave state"
    },
  ];

  return (
    <div className="max-w-3xl">
      <ul className="space-y-8">
        {publications.map((pub, index) => (
          <li key={index} className="flex">
            <div className="w-16">{pub.year}</div>
            <div>&quot;{pub.title}&quot;</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
