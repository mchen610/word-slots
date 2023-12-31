import "./HomePage.css";
import Footer from "./Footer";
import Header from "./Header";
import Link_Button from "./Buttons";

export default function HomePage() {
    
    
   
    return (
        <>
            <title>Word Slots</title>
            
            <div className="home">
                <Header mode="dark"/>

                <Link_Button
                    className="rounded start-button"
                    imgLink="images/start-button.png"
                    redirectLink="/play"
                />

                <Footer mode="light"/>
            </div>
        </>
    );
}
