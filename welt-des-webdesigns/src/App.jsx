import './App.css'
import './css/main.scss'
import Header from "./components/Header/Header.jsx";
import NavBar from "./components/NavBar.jsx";
import Content from "./components/Content.jsx";
import SideBar from "./components/SideBar.jsx";
import TopBarNav from "./components/TopBarNav.jsx";
import {useParams, useNavigate} from "react-router-dom";
import courseData from "./data/coursData.js";
import {useState} from "react";

function App() {

    const [isOpen, setIsOpen] = useState(false)
    //list aus URL topic (html css und javascript) und chapter wird auch ausgelesen zb. start
    const {topic, chapter} = useParams()
    // holt über den url part topic ds aktuelle topic z.B. html
    const currentTopic = courseData[topic]
    return (
        <div className="app-layout">
            <Header onToggle={()=> setIsOpen(!isOpen)}/>
            <TopBarNav/>
            <aside className={`navbar ${isOpen? 'open': 'close'}`}>
            <NavBar navigationPages={currentTopic.navigationPages}
                    titel={currentTopic.titel}
                    topic={topic}/>
            </aside>
            <Content chapter={chapter}/>
            <SideBar/>


        </div>
    )
}

export default App
