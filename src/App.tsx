import Layout from './components/layout/Layout';
import GamificationPage from "./pages/GamificationPage";
import './App.css';
import { Toaster } from "@/components/ui/sonner"

function App() {
  return (
    <Layout>
      <GamificationPage />
      <Toaster />
    </Layout>
  );
}

export default App
