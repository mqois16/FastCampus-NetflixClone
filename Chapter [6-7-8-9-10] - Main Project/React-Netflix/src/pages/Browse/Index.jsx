import BrowseLayout from "@/components/Layouts/BrowseLayout/Index"
import Navbar from "./Navbar"
import Jumbotron from "@/components/Modules/BrowsePage/Jumbotron/Index"
import MovieList from "@/components/Modules/BrowsePage/MovieList/Index"
import Modal from "@/components/Modules/BrowsePage/Modal/Index"

function Browse() {
    return (
        <BrowseLayout>
            <Jumbotron />
            <MovieList title={"Now Playing Movie"} moviesType={'now_playing'} />
            <MovieList title={"Top Rated Movie"} moviesType={'upcoming'} />
            <MovieList title={"Popular Movie"} moviesType={'popular'} />
            {/* <MovieList title={"Upcoming Movie"} moviesType={'top_rated'} /> */}
            <Modal />
        </BrowseLayout>
    )
}
export default Browse