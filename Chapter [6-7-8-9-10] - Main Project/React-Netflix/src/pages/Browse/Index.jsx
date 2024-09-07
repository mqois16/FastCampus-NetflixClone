import BrowseLayout from "@/components/Layouts/BrowseLayout/Index"
import Navbar from "./Navbar"
import Jumbotron from "@/components/Modules/BrowsePage/Jumbotron/Index"
import MovieList from "@/components/Modules/BrowsePage/MovieList/Index"
import Modal from "@/components/Modules/BrowsePage/Modal/Index"
import { useAtom } from "jotai"
import { searchMoviesAtom } from "@/jotai/atoms"
import SearchMovies from "@/components/Modules/SearchMovies/Index"

function Browse() {
    const [searchQuery] = useAtom(searchMoviesAtom)
    return (
        <BrowseLayout>
            {searchQuery ? <SearchMovies /> : (
                <>
                    <Jumbotron />
                    <MovieList title={"Now Playing Movie"} moviesType={'now_playing'} />
                    <MovieList title={"Top Rated Movie"} moviesType={'upcoming'} />
                    <MovieList title={"Popular Movie"} moviesType={'popular'} />
                </>
            )}
            <Modal />
        </BrowseLayout>
    )
}
export default Browse