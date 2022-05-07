import MainLayout from "./layouts/MainLayout/MainLayout";
import MintPage from './pages/MintPage/MintPage';

function App() {
  return (
    <div className="App">
      <MainLayout>
        <MintPage />
      </MainLayout>
    </div>
  );
}

export default App;
