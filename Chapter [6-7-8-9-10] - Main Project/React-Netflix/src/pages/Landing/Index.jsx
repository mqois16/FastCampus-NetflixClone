
import DefaultLayout from '../../components/Layouts/DefaultLayout/Index'
import Jumbotron from '../../components/Modules/Jumbotron/Index'
import SectionEnjoy from '../../components/Modules/SectionContents/SectionEnjoy'



function Landing() {

  return (
    <DefaultLayout>
      <Jumbotron />
      <SectionEnjoy />
    </DefaultLayout>
  )
}

export default Landing