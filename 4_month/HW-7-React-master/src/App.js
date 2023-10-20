import './App.css';
import TitlePage from "./pages/titlePage/TitlePage";
import TabloPage from "./pages/tabloPage/TabloPage";
import ContactsPage from "./pages/contactsPage/ContactsPage";
import TextPage from "./pages/textPage/TextPage";
import UsersPage from "./pages/usersPage/UsersPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Menu from "./components/menu/Menu";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route index element={<TitlePage/>}/>
                <Route path="/tablo" element={<TabloPage/>}/>
                <Route path="/contacts" element={<ContactsPage/>}/>
                <Route path="/text" element={<TextPage/>}/>
                <Route path="/users" element={<UsersPage/>}/>
            </Routes>
        </BrowserRouter>


    </div>
  );
}

export default App;
