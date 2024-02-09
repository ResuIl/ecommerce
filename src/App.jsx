import AuthProvider from "./provider/authProvider";
import Routes from "./routes";
import { ProductContextWrapper } from './ProductContextWrapper'

function App() {
  return (
    <AuthProvider>
      <ProductContextWrapper>
        <Routes />
      </ProductContextWrapper>
    </AuthProvider>
  );
}

export default App;
