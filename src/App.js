import logo from './logo.svg';
import './App.css';
import Header from './brandtheme/Header';
import GetConsultance from './brandtheme/GetConsultance';
import MarketingSkills from './brandtheme/MarketingSkills';
import Service from './brandtheme/Service';
import Client from './brandtheme/Client';
import Brandings from './brandtheme/Brandings';
import BrandingQuests from './brandtheme/BrandingQuests';
import Work from './brandtheme/Work';
import Forms from './brandtheme/Forms';
import FooterLine from './brandtheme/Footer';
import ClientDetail from './brandtheme/ClientDetail';

function App() {
  return (
    <>
    <Header/>
    <GetConsultance/>
    <MarketingSkills/>
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
