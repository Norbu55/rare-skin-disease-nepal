import Image from 'next/image'
import RabindraImage from 'src/assets/images/rabindra.png'
function Rabindra() {
  return (
    <>
      <div className="container mx-auto my-[40px]">
        <Image src={RabindraImage} alt="dr.rushma image" className="h-[330px] w-[350px]" priority />
        <article>
          <h2 className="text-3xl font-semibold text-blue-900 mt-[30px]">Dr. Rabindra Baskota</h2>
          <div className="text-justify grid gap-y-[20px] text-lg mt-[20px]">
            <p>
              Dr. Rabindra Baskota is a Senior Consultant Dermatologist at Ministry of Health and Population, Nepal He is a Public health specialist with over 15 years of work experience as clinician,
              consultant, program manager, researcher and trainer in Nepal.
            </p>
            <p>
              Dr Rabindra Baskota serves as senior consultant dermatologist for Ministry of Health and Population of Nepal. He was the chief of the Leprosy Control and Disability Management Section
              from 2017 to 2022. In this role, he has led the development of national policies, strategies, and guidelines along with the implementation of leprosy programs and skin disease campaigns
              at the national and the sub-national level. His responsibilities also include patient care to persons with leprosy and skin NTDs, including the rare skin conditions.
            </p>
            <p>
              Dr Baskota joined the Leadership Team of Global Partnership for Zero Leprosy in March 2022. In GPZL, he contributed to the development of the Zero Leprosy Toolkit as a chair of the
              SDR-PEP sub-group. In addition, he coordinated the Nepal’s National Leprosy Program review alongside GPZL, WHO, ILEP, and organizations of persons affected by leprosy in 2019. He is also
              in the Technical Advisory Group of the WHO Global Leprosy Program since September 2022.
            </p>
            <p>
              Dr Baskota received MBBS from Kathmandu University in 2007 and earned Doctor of Medicine (MD) in Dermatology from National Academy of Medical Sciences in 2015. He also holds Master of
              Public Health (MPH) from the University of Melbourne, where he was awarded the “Leaders in Community” award in 2021. Dr Baskota has authored and co-authored various publications on
              leprosy and other skin conditions.
            </p>
          </div>
        </article>
        <article>
          <h2 className="text-3xl font-semibold text-blue-900 mt-[30px]">Educational Qualifications</h2>
          <ul className="text-justify grid gap-y-[10px] text-lg mt-[30px] list-disc pl-[30px]">
            <li>University of Melbourne, Australia - Master of Public Health (MPH)</li>
            <li>National Academy of Medical Sciences, Nepal – Doctor of Medicine (MD Dermatology)</li>
            <li>Kathmandu University, Nepal - Bachelor of Medicine and Bachelor of Surgery (MBBS).</li>
          </ul>
        </article>
        <article>
          <h2 className="text-3xl font-semibold text-blue-900 mt-[30px]">Work Experiences</h2>
          <ul className="text-justify grid gap-y-[20px] text-lg mt-[30px] list-disc pl-[30px]">
            <li>Coordinated Technical Working Group in developing National Leprosy Strategy and five-year Action Plan 2021-2025 for leprosy control in Nepal.</li>
            <li>Provided technical support in leprosy case validation, data verification, active case detection and contact examination campaigns.</li>
            <li>Contributed to development of NTD training module for health workers.</li>
            <li>
              Served as Data and Safety Monitoring Board (DSMB) member of a study entitled “ A single center, open label pilot study to evaluate the safety and efficacy of CC-11050 in Nepalese
              Patients with erythema Nodosum leprosum”.
            </li>
            <li>
              Worked as the chair of the scientific committee of PEP++ study, which is a trial on post-exposure prophylaxis with three doses of rifampicin and clarithromycin given to contacts of
              leprosy.
            </li>
            <li>Served as National Coordinator to conduct in-depth review of the national leprosy program of Nepal in July 2019.</li>
            <li>
              Provided technical advice to WHO on global leprosy policies and strategies, ranging from epidemiology, monitoring implementation, patient care, research development to delivery of
              interventions and their linkages with other health interventions.
            </li>
          </ul>
        </article>
        <article>
          <h2 className="text-3xl font-semibold text-blue-900 mt-[30px]">Awards & Achievement</h2>
          <ul className="text-justify grid gap-y-[20px] text-lg mt-[30px] list-disc pl-[30px]">
            <li>Best Thesis Award, 2016, Society of Dermatologists, Venereologists and Leprologists, Nepal.</li>
            <li>Leaders in communities award, 2021, The University of Melbourne, Australia.</li>
          </ul>
        </article>
        <article>
          <h2 className="text-3xl font-semibold text-blue-900 mt-[30px]">Research & Publications</h2>
          <ul className="text-justify grid gap-y-[20px] text-lg mt-[30px] list-decimal pl-[30px]">
            <li>
              Blok DJ, Steinmann P, Tiwari A, Barth-Jaeggi T, Arif MA, Banstola NL, Baskota R, Blaney D, Bonenberger M, Budiawan T, Cavaliero A. The long-term impact of the leprosy post- exposure
              prophylaxis (LPEP) program on leprosy incidence: a modelling study. PLoS neglected tropical diseases. 2021 Mar 31;15(3):e0009279.
            </li>
            <li>
              Richardus JH, Tiwari A, Barth-Jaeggi T, Arif MA, Banstola NL, Baskota R, et al. Leprosy postexposure prophylaxis with single-dose rifampicin (LPEP): an international feasibility
              programme. Lancet Glob Health. 2021 Jan 1;9(1):e81– 90.
            </li>
            <li>
              Barth-Jaeggi T, Cavaliero A, Aerts A, Anand S, Arif M, Ay SS, Aye TM, Banstola NL, Baskota R, Blaney D, Bonenberger M. Leprosy post-exposure prophylaxis with single-dose rifampicin.
              Leprosy Review. 2019 Dec 1;90(4):356-63.
            </li>
            <li>Parajuli S, Pokhrel DB, Baskota R, Poudyal A, Paudel U. Challenges of Sustaining Elimination Status of Leprosy in Nepal. J Inst Med Nepal. 2019 Dec 4;41(2):59–61.</li>
            <li>Baskota R, Parajuli N, Shrestha SK. Correspondence to histoid leprosy: a retrospective clinicopathological study from central Nepal. Int J Dermatol. 2019;58(4):E78–E78.</li>
            <li>Sigdel D, Jha S, Kathet R, Mainali U, Baskota R, Paudyal S, et al. Morphine Consumption in a Tertiary Care Hospital in Eastern Nepal. Int J Contemp Med Res. 2019 Jun 1;6:E1 to E4.</li>
            <li>
              Baskota R, Ghimire A, Ghimire S, Kathet R. Herpes Zoster Duplex Bilateralis in an Immunocompetent Adolescent Girl at Koshi Zonal Hospital, Morang. Birat J Health Sci. 2017 Nov
              2;2(2):234–6.
            </li>
            <li>Karki A, Kayastha BMM, Lama L, Baskota R. Acquired cutis laxa – A case report. PMJN. 2015 Jul;15(2):45-6.</li>
            <li>Singh RR, Adhikari SC, Bastakoti R, Regmi S, Baskota R. Determining Relation Between gallstone and lipid profile. BJHS 2018;3(2)6:418-422.</li>
            <li>
              Taal AT, Chakrawarti A, Banstola NL, Kumar A, Singh BM, Baskota R, van Brakel WH, Richardus JH, Blok DJ. Trends and geographical variation in leprosy case detection and disability in
              Nepal, 2010–2021. Leprosy Review. 2022 Dec 1;93(4):348-63.
            </li>
          </ul>
        </article>
      </div>
    </>
  )
}

export default Rabindra
