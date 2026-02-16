import Header from "./Header/Header.jsx";
import '../App.css'
import SideBar from "./SideBar.jsx";
function Index (){
    return (
        <div className="layout-alt">
            <Header/>
            <main className="main">

            </main>
            <SideBar/>
        </div>
    )
}

export default Index;