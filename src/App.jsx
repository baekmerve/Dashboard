import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Delivery from "./pages/Delivery";
import Layout from "./components/Common/Layout";
import { ThemeProvider } from "./components/context/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />

        <Route
          path="/users"
          element={
            <Layout>
              <Users />
            </Layout>
          }
        />
        <Route
          path="/users/:userId"
          element={
            <Layout>
              <UserDetails />
            </Layout>
          }
        />
        <Route
          path="/products"
          element={
            <Layout>
              <Products />
            </Layout>
          }
        />
        <Route
          path="/products/:productId"
          element={
            <Layout>
              <ProductDetails />
            </Layout>
          }
        />
        <Route
          path="/delivery"
          element={
            <Layout>
              <Delivery />
            </Layout>
          }
        />
      </Routes>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
