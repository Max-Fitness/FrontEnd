import React from "react";
import ovalLogo from "../../images/ovalLogo.png"
import "../../styles/homepage.css"

const HomePage = () =>{
    return(
        <div className="hpWrapper">
            <img className="hpImg" src={ovalLogo} />
            <div className="hpIntroWrapper">
                <h1>MaxFitness</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tempor nec feugiat nisl pretium. Id leo in vitae turpis. Venenatis lectus magna fringilla urna. Massa massa ultricies mi quis hendrerit dolor magna eget est. Malesuada fames ac turpis egestas. Enim nec dui nunc mattis enim ut. Montes nascetur ridiculus mus mauris. Et malesuada fames ac turpis egestas sed tempus urna. Quam adipiscing vitae proin sagittis nisl. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Faucibus et molestie ac feugiat sed lectus vestibulum mattis.</p>
            </div>
            <div className="hpTextWrapper">
                <div className="hpTextBox">
                    <h2>Our Mission</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tempor nec feugiat nisl pretium. Id leo in vitae turpis. Venenatis lectus magna fringilla urna. Massa massa ultricies mi quis hendrerit dolor magna eget est. Malesuada fames ac turpis egestas. Enim nec dui nunc mattis enim ut. Montes nascetur ridiculus mus mauris</p>
                </div>
                <div className="hpTextBox">
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tempor nec feugiat nisl pretium. Id leo in vitae turpis. Venenatis lectus magna fringilla urna. Massa massa ultricies mi quis hendrerit dolor magna eget est. Malesuada fames ac turpis egestas. Enim nec dui nunc mattis enim ut. Montes nascetur ridiculus mus mauris</p>
                </div>
            </div>
        </div>
    )
}

export default HomePage;