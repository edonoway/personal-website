export default function Contact() {
  return (
    <div className="max-w-3xl">
      <p className="mb-4">email: [firstname][dot][lastname] [at] berkeley.edu</p>
      <p>
        <a 
          href="https://www.linkedin.com/in/elizabethdonoway" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-600 hover:text-gray-500"
        >
          LinkedIn
        </a>
        <a> | </a>
        <a 
          href="https://scholar.google.com/citations?hl=en&view_op=list_works&gmla=AOAOcb0a27dcGZjv5oS4kvjQ_rZWlRpOuX1jzmkwbefPu8z8wug8ja6QLMNLZj8uaYLdAfHXpe_alK85drvjRg&user=--aukLAAAAAJ" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-600 hover:text-gray-500"
        >
          Google Scholar
        </a>
        <a> | </a>
        <a 
          href="https://github.com/edonoway" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-600 hover:text-gray-500"
        >
          GitHub
        </a>
      </p>
    </div>
  );
}
