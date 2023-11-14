import Search from "@/components/search/searchEngine";
import Image from 'next/image';
import logo from '../../../public/images/SearchLogo.png';

const SearchResults = [
  { id: 1, title: 'Glennn si sepuh', description: 'Description' },
  { id: 2, title: 'Jojo si kampret', description: 'Description' },
  { id: 3, title: 'Jimmy si eek', description: 'Description' },
  { id: 4, title: 'Kepin si cina', description: 'Description' },
  { id: 5, title: 'Mike cakep', description: 'Description' },
];

export default function SearchResult() {
  return (
    <div className="max-w-2xl p-4 pl-20">
      <div className="flex items-center self-start mb-4 ml-4"> {/* Added self-start class */}
        <Image src={logo} alt="Logo" width={60} height={60} className="mr-2" />
        <Search />
      </div>
      <h5 className="mb-4 ml-4">Search Results</h5>
      {SearchResults.map((result) => (
        <a key={result.id} href={`/result/${result.id}`}>
          <div className="bg-white rounded p-4 mb-4 shadow-md cursor-pointer">
            <h3 className="text-xl font-bold mb-2">{result.title}</h3>
            <p className="text-gray-600">{result.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
