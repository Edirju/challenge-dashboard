import { Header } from "./components/Header";
import { OverviewContainer, OverviewTodayContainer } from "./components/OverviewContainer";

function App() {
  return (
    <>
      <main className="">
        <Header />
        <OverviewContainer />
        <OverviewTodayContainer />
      </main>
    </>
  );
}

export default App;
