import DefaultLayout from "@layouts/DefaultLayout/Index"
import Footer from "@mods/Footer/Index"
import Jumbotron from "@mods/Jumbotron/Index"
import SectionDownload from "@mods/SectionContents/SectionDownload"
import SectionEnjoy from "@mods/SectionContents/SectionEnjoy"
import SectionFAQ from "@mods/SectionContents/SectionFAQ"
import SectionProfile from "@mods/SectionContents/SectionProfile"
import SectionWatch from "@mods/SectionContents/SectionWatch"



function Landing() {

  return (
    <DefaultLayout>
      <Jumbotron />
      <SectionEnjoy />
      <SectionDownload />
      <SectionWatch />
      <SectionProfile />
      <SectionFAQ />
      <Footer />
    </DefaultLayout>
  )
}

export default Landing