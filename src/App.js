import { Route } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./pages/Home";
import TeamPage from "./pages/TeamPage";
import LeaguePage from "./pages/LeaguePage";
import LeagueStatistic from "./pages/LeagueStatistic";
import TeamStatistic from "./pages/TeamStatistic";

function App() {
  return (
    <div className="App">
      <Header />

      <Route exact path="/" render={() => <Home />}/>

      <Route path="/leagueStatistic" render={() => <LeagueStatistic />}/>

      <Route path="/teamsStatistic" render={() => <TeamStatistic />} />

      <Route path="/leaguePage/:leagueId?" render={() => <LeaguePage />} />

      <Route path="/teamPage/:teamId?" render={() => <TeamPage />} />


      <Footer />
    </div>
  );
}

export default App;
