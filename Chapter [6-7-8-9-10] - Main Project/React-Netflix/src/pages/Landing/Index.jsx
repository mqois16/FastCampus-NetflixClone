
import DefaultLayout from '../../components/Layouts/DefaultLayout/Index'
import Jumbotron from '../../components/Modules/Jumbotron/Index'
import SectionDownload from '../../components/Modules/SectionContents/SectionDownload'
import SectionEnjoy from '../../components/Modules/SectionContents/SectionEnjoy'
import SectionWatch from '../../components/Modules/SectionContents/SectionWatch'



function Landing() {

  return (
    <DefaultLayout>
      <Jumbotron />
      <SectionEnjoy />
      <SectionDownload />
      <SectionWatch />
    </DefaultLayout>
  )
}

export default Landing