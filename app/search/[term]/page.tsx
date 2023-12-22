import MoviesCarousel from "@/components/MoviesCarousel";
import { getPopularMovies, getSearchMovies } from "@/lib/getMovies";
import { notFound } from "next/navigation";

type Props = {
  params: {
    term: string;
  };
};

const SearchPage = async ({ params: { term } }: Props) => {
  //   404notFound
  if (!term) notFound();

  const termToUse = decodeURI(term);

  //API call to get the Searched Movies
  const movie = await getSearchMovies(termToUse);

  //API call to get the Popular Movies
  const popularMovie = await getPopularMovies();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-4 mt-32 xl:mt-42">
        <h1 className="text-6xl font-bold px-10">Results for {termToUse}</h1>
        <MoviesCarousel title="Movies" movies={movie} isVertical />
        <MoviesCarousel title="You may also like" movies={popularMovie} />
      </div>
    </div>
  );
};

export default SearchPage;
