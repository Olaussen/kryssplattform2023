import AuthProvider from "./contexts/AuthContextProvider";
import LoginPage from "./pages/LoginPage";

export default function App() {
  return (
    <AuthProvider>
      <LoginPage />
    </AuthProvider>
  );
}
