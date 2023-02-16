import { Footer, Header } from '@/components'
import Image from 'next/image'
import AboutSectionImage from 'src/assets/images/about-image-doctor.png'
function About() {
  return (
    <div>
      <Header />
      <Image src={AboutSectionImage} alt="about-section-image" />
      <article className="container mx-auto grid gap-y-[40px] mt-[40px] relative">
        <div
          style={{
            position: 'absolute',
            width: '700px',
            height: '239px',
            bottom: '200px',
            right: '90px',
            background: '#F20F10',
            filter: `blur(200px)`,
          }}
        />
        <h2 className="text-3xl font-semibold text-blue-700">
          * About
          <ul>
            <li>* Rare Skin Disease Nepal</li>
          </ul>
        </h2>
        <div className="text-justify grid gap-y-[30px] text-lg mb-[100px]">
          <h2>
            People living with dermatological conditions face stigma, shame and other psychosocial challenges in addition to the physical symptoms of their disease. For many patients, this is a
            lifelong burden. And in many cultures, this can have devastating social impacts. This must change. Together, we can make it happen. The International Alliance of Dermatology Patient
            Organizations (also known as GlobalSkin) – is a unique global alliance serving patient organizations to improve the lives of dermatology patients worldwide. Our not-for-profit
            organization, which is based in Canada, is focused on three pillars: Research Advocacy Support GlobalSkin envisions a world in which people living with dermatological diseases and skin
            traumas can easily access the care and treatment they need, when they need it, and can live without stigmatization, persecution or economic disadvantages due to their conditions.
          </h2>
          <h2>
            GlobalSkin is working with over 200 patient association members ─ located in 67 countries representing more than 55 disease areas ─ to improve the lives of those affected by dermatological
            conditions throughout the world by: initiating dialogue and advocating for access to new and existing treatments, and dermatological care to improve patients’ quality of life; raising the
            awareness of the incidence of, and the challenges for, people living with serious dermatological diseases to create better understanding; and supporting our Members, not-for-profit
            dermatology patient organizations, through education, global campaigning, sharing of best-practices and beneficial networking opportunities to strengthen support for patients and build a
            strong, inclusive movement; building special focus communities; and conducting patient-initiated research. We appeal as one voice to the World Health Organization and other key influencers
            to recognize the debilitating nature of dermatological disease so that more resources for research and treatment options are made readily available to those afflicted and in need of help.
          </h2>
          <h2>
            The common thread through these important GlobalSkin initiatives is credible data, which we will collect in the first-ever global patient-initiated 'impact of skin disease’ research
            project, expected to have a profound and lasting impact on key decision-makers. By collecting data from the dermatology patient perspective to represent various real-life conditions around
            the world, the dermatological community will gain better awareness, making it easier to truly help patients. Together, we are stronger. Interested in how GlobalSkin was formed? Learn about
            our History. Our bylaws are available HERE.
          </h2>
        </div>
      </article>
      <Footer />
    </div>
  )
}

export default About
