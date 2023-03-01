import "./assets/css/app.scss";
import AdminLayout from "./layout/AdminLayout.jsx";
import Layout from "./layout/Layout";

function App() {
  const { pathname } = window.location;

  return (
    <div className="App">
      {/* {pathname.includes("/admindfnd001907") ? <AdminLayout /> : <Layout />}
       */}
      <Layout />
    </div>
  );
}

export default App;
