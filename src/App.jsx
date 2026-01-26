import Container from "./components/Container";
import WelcomePage from "./pages/WelcomePage";
import Header from "./components/Header"
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import UserDashboard from "./pages/UserDashboard";
import DriverDashboard from "./pages/DriverDashBoard"
import Footer from "./components/Footer"
import Cart from "./pages/Cart";
import Robot from "./pages/Robot"
import { useView, ViewProvider } from "./components/ViewContext";
import { Box } from "@mui/material";
import View from "./pages/view";
import ClimateControl from "./pages/ClimateContol";
import EnergyPanel from "./pages/EnergyPanel";
import Shop from "./pages/Shop";
import manual from "/manual/manual.svg?url";
import { MapPage } from "./pages/Map";
import { ShopList } from "./components/ShopList";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <ViewProvider>
      <AppContent />
    </ViewProvider>
  );
}
function AppContent() {
  const { view, role, isLogedIn, stop, route, setView,cart } = useView();
  
  const bgImage = (view === "welcomePage" || !view) ? "/img/background.png" : null;

  // routine for checking if user has specified route
  const withRoute = (Component) => {
    if(!route){
    return <UserDashboard showAlert={true}/>;
    } 
    return Component;
  } 


  const renderContent = () => {
    // 1. Logic for Dashboard/Welcome 
    if (view === "dashboard") {
        if (isLogedIn && role === "driver"){
          return <DriverDashboard />;
        } else if(role=== "user"|| role==="guest"){
          return <UserDashboard />;
        }
      } else if(view === "welcomePage"){
      return <WelcomePage />;
    }

    // 2. Mapping for all other views
    const viewMap = {
      signin: <SignIn />,
      signup: <SignUp />,
      ac: <ClimateControl />,
      solar: <EnergyPanel />,
      robot: <Robot />,
 
      view: withRoute(<View />),
      sightseeings: withRoute(<MapPage />),
      openShop: withRoute(<Shop />),
      cart: withRoute(<Cart />),
      shopList: withRoute(<ShopList />),
      checkout:withRoute(<Checkout/>),
      manual: (
        <Box 
          component="img" 
          src={manual} 
          alt="Manual" 
          onContextMenu={(e) => e.preventDefault()}
          sx={{ 
            maxWidth: '650px',
            width: '100%', 
            height: 'auto', 
            p: '30px', 
            pointerEvents: 'none', 
            userSelect: 'none' }} 
        />
      )
    };

    return viewMap[view] || <WelcomePage isLogedIn={isLogedIn} />;
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <Container backgroundImage={bgImage}>
        {renderContent()}
      </Container>
      <Footer />
    </Box>
  );
}


export default App;