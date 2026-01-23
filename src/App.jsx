import Container from "./components/Container";
import WelcomePage from "./pages/WelcomePage";
import Header from "./components/Header"
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import UserDashboard from "./pages/UserDashboard";
import DriverDashboard from "./pages/DriverDashBoard"
import Footer from "./components/Footer"
import Cart from "./pages/Cart"
// import UserDashboard from "./pages/UserDashboard";
// import DriverDashboard from "./pages/DriverDashBoard"
import { useView, ViewProvider } from "./components/ViewContext";
import { Box } from "@mui/material";
import CoffeeOrder from "./components/CoffeeOrder";




function App() {
  return (
    <ViewProvider>
      <AppContent />
    </ViewProvider>
  );
}
function AppContent(){
  const {view, role, isLogedIn, stop} = useView();
  const bgImage = (view === "welcomePage" || !view) ? "/img/background.png" : null;
  console.log("App is trying to render view: ", view) 
  const renderContent = () => {
    switch (view) {
      case "signin":
        return <SignIn />;
        case "signup":
          return <SignUp />;
        case "dashboard":
          if(isLogedIn){
            console.log("IsLogedIn TRUE") 
            switch(role){
              case "user":
                return (  
                    <UserDashboard />
                  );
                  case "driver":
                    return(
                      <DriverDashboard />
                  );
                  default:
                    return(
                      <WelcomePage isLogedIn/>
                  );
                }
              }else{
                  return <Container> Unathorized Role</Container>;
                // return < Dashboard />
              }
        case "openShop":
          if(isLogedIn){
            return(
              <CoffeeOrder />
            )
          }
        case "cart":
          return(
            <Cart />
          )
        case "welcomePage":
          default:
            return(
                <WelcomePage isLogedIn/>
            )
          
    }
  };
  return(
    <Box sx={{display:"flex", flexDirection:"column", minHeight:"100vh"}}>
      <Header />
        <Container backgroundImage={bgImage}>
          {renderContent()}
        </Container>
      <Footer />
    </Box>
  );
}


export default App;