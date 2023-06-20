import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductDetail } from "./pages/ProductDetail";
import { ProductList } from "./pages/ProductList";
import { ChatPage } from "./pages/Chat";
import { ProfilePage } from "./pages/Profile";
import { Home } from "./pages/Home";
import { PageWrapper } from "./components/pageWrapper";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/product/:productId"
          element={<PageWrapper component={ProductDetail} />}
        />
        <Route
          path="/productList"
          element={<PageWrapper component={ProductList} />}
        />
        <Route path="/chat" element={<PageWrapper component={ChatPage} />} />
        <Route
          path="/profile"
          element={<PageWrapper component={ProfilePage} />}
        />
        <Route path="*" element={<PageWrapper component={Home} />} />
      </Routes>
    </BrowserRouter>
  );
}
