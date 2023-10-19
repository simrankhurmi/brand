import './App.css';

// import GetConsultance from './brandtheme/GetConsultance';
import Service from './brandtheme/Service';
import Client from './brandtheme/Client';
import Brandings from './brandtheme/Brandings';
import BrandingQuests from './brandtheme/BrandingQuests';
import Work from './brandtheme/Work';
import Forms from './brandtheme/Forms';
import FooterLine from './brandtheme/Footer';
import ClientDetail from './brandtheme/ClientDetail';
import Header from './brandtheme/header/Header';
import MarketingSkills from './brandtheme/MarketingSkills';
import Consult from './brandtheme/consult/Consult';

function App() {
  return (
    <>
    <Header />
    {/* <GetConsultance/> */}
    <Consult />
    <MarketingSkills />
    <Service/>
    <Client/>
    
    <Brandings/>
    <ClientDetail/>
    <BrandingQuests/>
    <Work/>
    <Forms/>
    <FooterLine/>
    </>
  );
}

export default App;
