import BrowseLayout from "@/components/Layouts/BrowseLayout/Index"
import Navbar from "./Navbar"
import Jumbotron from "@/components/Modules/BrowsePage/Jumbotron/Index"
import MovieList from "@/components/Modules/BrowsePage/MovieList/Index"

function Browse() {
    return (
        <BrowseLayout>
            <Jumbotron />
            <MovieList title={"Popular Movie"} />
            <MovieList title={"Upcoming Movie"} />
            <MovieList title={"Top Rated Movie"} />
        </BrowseLayout>
    )
}
export default Browse