
import Footer from "@mods/Footer/Index"
import Jumbotron from "@mods/Jumbotron/Index"
import SectionDownload from "@mods/SectionContents/SectionDownload"
import SectionEnjoy from "@mods/SectionContents/SectionEnjoy"
import SectionFAQ from "@mods/SectionContents/SectionFAQ"
import SectionProfile from "@mods/SectionContents/SectionProfile"
import SectionWatch from "@mods/SectionContents/SectionWatch"
import Navbar from "./Navbar"



function Landing() {

  return (
    <>
      <Navbar />
      <Jumbotron />
      <SectionEnjoy />
      <SectionDownload />
      <SectionWatch />
      <SectionProfile />
      <SectionFAQ />
      <Footer />
    </>
  )
}

export default Landing