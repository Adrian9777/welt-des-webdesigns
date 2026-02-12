import './App.css'
import Header from "./components/Header.jsx";
import NavBar from "./components/NavBar.jsx";
import Main from "./components/Main.jsx";
import SideBar from "./components/SideBar.jsx";
import {useParams, useNavigate} from "react-router-dom";
import courseData from "./data/coursData.js";

function App() {
const {topic, chapter} = useParams()
    console.log(topic, chapter)
    const currentTopic = courseData[topic]
    console.log(currentTopic)
    return (
        <div className="app-layout">
            <Header/>
            <NavBar navigationPages={currentTopic.navigationPages}
                    titel={currentTopic.titel}
                    topic={topic}/>
            <Main/>
            <SideBar/>


        </div>
    )
}

export default App
