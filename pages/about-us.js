import Layout from "../components/Layout";
import TeamMember from "../components/TeamMember";
import {useContext} from "react";
import {LangContext} from "../contexts/LangContext";

const TEAMDATA = [{
  name:'Diederick Vos',
  title_en:'Started this',
  title_nl:'Is hier ooit mee begonnen',
  imageurl:'/team-diederickVos.png',
  quote_nl:'Ik geloof in een wereld die we beter kunnen maken terwijl we een leuk leven leiden. Als we met zn allen een beetje bewuster zouden zijn en kleine verbeterstapjes zouden zetten ben ik ervan overtuigd dat we de wereld in een betere staat achter kunnen laten dan dat we haar ooit geërfd hebben.',
  quote_en:'I believe in a world we can improve whilst maintaining an enjoyable life. If we all would be a little more conscious and we would continuously make small improvements I am convinced we could leave our planet in a better condition than we inherited it.'
},
  {
  name:'Felix van Musschenbroek Greve',
  title_en:'Knows stuff about soil and buildings',
  title_nl:'Weet dingen van grond en gebouwen',
  imageurl:'/team-felix.png',
  quote_nl:'Pas halverwege mijn dertigste realiseerde ik me dat ik de kracht had om zelf een betekenisvol verschil te maken voor het milieu In plaats van altijd die revolutionaire grote verandering te plannen die altijd werd uitgesteld, begon ik kleinere en meer behapbare stappen te zetten. Zo kon ik beginnen, en alle positiviteit die daaruit voortkwam, gaf me het zetje dat ik nodig had om verder te gaan.',
  quote_en:'Only midway through my 30s, I realised that I had the power to make a meaningful difference for the environment myself Instead of always planning this revolutionary big change that was always put off, I started making smaller and more manageable steps. This allowed me to start, and all the positiveness that resulted from this, gave the push I needed to keep going further.With Releaf the Planet I hope to be at this starting point of other peoples journey towards more sustainable living. I want to help you take that one small step. '
}
]

const PAGEDATA = [
  {
    title_1:'Our mission',
    title_2:'A sustainable economy for everyone, everywhere ',
    title_3:'We’ll challenge others to follow suit. Therefore we directly invest 90% of our profits in sustainability. '
  },
  {
    title_1:'Onze missie',
    title_2:'Een duurzame economie, overal en voor iedereen.',
    title_3:'We dagen anderen ook uit dit te doen en elke dag een stapje beter. Zo stoppen wij 90% van onze winst direct terug in verduurzaming.'
  }
]
function AboutUs() {

  const [lang2, setLang2] = useContext(LangContext);
  let titles = PAGEDATA[0]
  if (lang2 == 'nl') {
    titles = PAGEDATA[1]
  }

  return (
    <div>
      <Layout>
        <div className="text-leaf-800 pb-24 mx-1 lg:mx-8 my-4">
          <p className="text-2xl font-bold text-leaf-800 mb-4 text-left md:text-center">{titles.title_1}</p>
          <p className="text-lg font-medium mb-6 text-left md:text-center mx-2 lg:mx-24">{titles.title_2}</p>
          <p className="text-2xl font-bold text-leaf-800 my-6 text-center">{titles.title_3}</p>
          <div className="flex flex-wrap justify-center lg:mx-16">
            {TEAMDATA.map((e,index) =>
              <TeamMember key={index} member={e}/>
            )
            }
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default AboutUs;