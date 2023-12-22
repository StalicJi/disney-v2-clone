import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import MoviesCarousel from "@/components/MoviesCarousel";
import { getUpcomingMovies } from "@/lib/getMovies";
import { getTopRatedMovies } from "@/lib/getMovies";
import { getPopularMovies } from "@/lib/getMovies";

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();

  return (
    <main className="">
      <CarouselBannerWrapper />

      <div className="flex flex-col space-y-2 xl:-mt-48">
        <MoviesCarousel movies={upcomingMovies} title="Upcoming" />
        <MoviesCarousel movies={topRatedMovies} title="Top Rated" />
        <MoviesCarousel movies={popularMovies} title="Popular" />
      </div>
    </main>
  );
}
