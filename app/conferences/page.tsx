export default function Conferences() {
  const conferences = [
    {
      year: "2024",
      title: "Symmetry-breaking pathways to the broken helix",
      conference: "APS March Meeting",
      url: "https://meetings.aps.org/Meeting/MAR24/Session/Z62.7"
    },
    {
      year: "2023",
      title: "Observation of spin dynamics associated with exotic helical spin orders in EuIn2As2",
      conference: "APS March Meeting",
      url: "https://ui.adsabs.harvard.edu/abs/2023APS..MARQ56004D/abstract"
    },
    {
      year: "2022",
      title: "Emergent topological phase transition dynamics of polar skyrmions",
      conference: "MRS Spring Meeting",
      url: "https://www.mrs.org/meetings-events/annual-meetings/archive/meeting/presentations/view/2022-mrs-spring-meeting/2022-mrs-spring-meeting-3676274"
    },
    {
      year: "",
      title: "Emergent topological phase transition dynamics of polar skyrmions",
      conference: "APS March Meeting",
      url: "https://ui.adsabs.harvard.edu/abs/2021APS..MARY55003D/abstract"
    },
  ];

  return (
    <div className="max-w-3xl">
      <ul className="space-y-8">
        {conferences.map((conf, index) => (
          <li key={index} className="flex">
            <div className="w-16"><b>{conf.year}</b></div>
            <a href={conf.url} target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
              &quot;{conf.title},&quot; <i>{conf.conference}</i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
