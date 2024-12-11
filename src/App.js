import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import CreateUser from "./page/Admin/CreateUser";
import MyLogin from "./page/auth/Login";
import UserInfo from "./page/auth/UserInfo";
import DonatAmount from "./page/Donar/DonatAmount";
import Home from "./page/Home";
import Notpound from "./page/Notpound";
import PublicHomePage from "./page/public/PublicHomePage";
import RecoveryTranscation from "./page/Student/RecoveryTranscation";
import UnderWorking from "./page/UnderWorking";
import useGetData from "./page/Util/hooks/getData";

// axios.defaults.url("http://localhost:5000/api/v1")
// const token = Cookies.get('token')

// const token = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];
// const decodedData = JSON.parse(atob(token.split('.')[1]));
// console.log(decodedData);

function App() {
  const { data : user} = useGetData("/users/current-user");
  
  return (
    <>
      <div>
        <Routes>
          {/* Main Open Page */}
          <Route path="/" element={ <Home />}>
            <Route path="/" element={<PublicHomePage/>}/>
            <Route path="/details-view" element={<UnderWorking/>}/>
            {user && <Route path="/verifyUser" element={<UserInfo/>}/>}
            {user.role === "admin" && <Route path="/create-user" element={<CreateUser/>}/>}
            <Route path="/recovery-amount" element={<RecoveryTranscation/>}/>
            <Route path="/donation-amount" element={<DonatAmount/>}/>
            <Route path="*" element={<Notpound></Notpound>}></Route>
          </Route>
          <Route path="/login" element={<MyLogin/>}/>
        </Routes>

        {/* <Footer></Footer> */}
        <Toaster />
      </div>
    </>
  );
}

export default App;
