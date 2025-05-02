export default function CV() {
  return (
    <div className="max-w-3xl">
      <section className="mb-8">
        <h2 className="mb-4 text-lg"><b><u>education</u></b></h2>
        <p><b>UC Berkeley</b></p>
        <p>PhD student, Physics</p>
        <br></br>
        <p><b>Cornell University</b></p>
        <p>Bachelor of Arts, Physics</p>
        <p><i>Magna Cum Laude, Phi Beta Kappa</i></p>
      </section>
      
      <section className="mb-8">
        <h2 className="mb-4 text-lg"><b><u>research experience</u></b></h2>
        <p><b>Anthropic Fellow</b></p>
        <p><i>Anthropic</i></p>
        <p>March 2025-Present</p>
        <br></br>
        <p><b>MATS Scholar</b></p>
        <p><i>ML Alignment & Theory Scholars</i></p>
        <p>June 2024-March 2025</p>
        <br></br>
        <p><b>Graduate Student Researcher</b></p>
        <p><i>UC Berkeley, Department of Physics</i></p>
        <p>June 2019-Present</p>
      </section>
      
      <section className="mb-8">
        <h2 className="mb-4 text-lg"><b><u>publications</u></b></h2>
        <p>
          <a 
          href="https://scholar.google.com/citations?hl=en&view_op=list_works&gmla=AOAOcb0a27dcGZjv5oS4kvjQ_rZWlRpOuX1jzmkwbefPu8z8wug8ja6QLMNLZj8uaYLdAfHXpe_alK85drvjRg&user=--aukLAAAAAJ" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-600 hover:text-gray-500"
          >
            Google Scholar
          </a>
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="mb-4 text-lg"><b><u>conferences & presentations</u></b></h2>
        <p>APS March Meeting, Oral Presentation (2023)</p>
        <p>MRS Spring Meeting, Oral Presentation (2021)</p>
        <p>APS March Meeting, Oral Presentation (2021)</p>
        <p>UC Berkeley Condensed Matter Seminar (2020)</p>
      </section>
      
      <section className="mb-8">
        <h2 className="mb-4 text-lg"><b><u>awards & honors</u></b></h2>
        <p>Anthropic Fellow (2025-Present)</p>
        <p>Ford Foundation Predoctoral Fellow (2020-Present)</p>
        <p>NSF Graduate Research Fellow (2020-Present)</p>
        <p>Berkeley Connect Fellow (2020-2021)</p>
        <p>Purnendu Chatterjee Fellow in Energy Technologies (2020-2021)</p>
      </section>
      
      <section className="mb-8">
        <h2 className="mb-4 text-lg"><b><u>skills</u></b></h2>
        <p>Programming: Python, Mathematica, MATLAB</p>
        <p>ML Frameworks/Libraries: PyTorch, Hugging Face, TensorFlow/Keras, scikit-learn</p>
        <p>ML Skills: LLM training at scale (fine-tuning, RLHF, pretraining), PEFT, large-scale dataset curation</p>
        <p>Operating systems: Linux, macOS</p>
      </section>
    </div>
  );
}
