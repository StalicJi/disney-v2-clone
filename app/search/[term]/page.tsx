import { notFound } from "next/navigation";

type Props = {
  params: {
    term: string;
  };
};

const SearchPage = ({ params: { term } }: Props) => {
  //   404notFound
  if (!term) notFound();

  const termToUse = decodeURI(term);

  //API call to get the Searched Movies
  //API call to get the Popular Movies

  return <div>Welcome to the search page: {termToUse}</div>;
};

export default SearchPage;
