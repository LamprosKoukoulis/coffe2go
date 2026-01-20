import Container from "./components/Container";
import WelcomePage from "./pages/WelcomePage";
import Header from "./components/Header"
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
// import UserDashboard from "./pages/UserDashboard";
// import DriverDashboard from "./pages/DriverDashBoard"
import { useView, ViewProvider } from "./components/ViewContext";



function App() {
  return (
    <ViewProvider>
      <AppContent />
    </ViewProvider>
  );
}
function AppContent(){
  const {view, role, isLogedIn} = useView();
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
                  <Container /*backgroundImage="/img/background.png"*/>
                    <UserDashboard />
                  </Container>  
                  );
                  case "driver":
                    return(
                      <Container /*backgroundImage="/img/background.png"*/>
                      <DriverDashboard />
                  </Container>
                  );
                  default:
                    return(
                      <Container backgroundImage="/img/background.png">
                      <WelcomePage />
                  </Container>
                  );
                }
              }else{
                  return <Container> Unathorized Role</Container>;
                // return < Dashboard />
              }
        case "welcomePage":
          default:
            return(
              <Container backgroundImage="/img/background.png">
                <WelcomePage />;
              </Container>
            )
          
    }
  };
  return(
    <>
      <Header />
        {renderContent()}
    </>
  );
}


export default App;