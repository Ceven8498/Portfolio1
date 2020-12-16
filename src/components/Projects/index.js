import React from 'react';
import RedBag from "../../assets/images/red_bag.png";
import NoteTaker from "../../assets/images/note-taker.png";
import TeamProfileGenerator from "../../assets/images/TPF.gif";
import WorkScheduler from "../../assets/images/work-scheduler.png";
import EatsandDrinks from "../../assets/images/RecipeGen.png";
import "../../index.css";

function Portfolio(props) {
    return (

        <div class="row" id="portfolio">
            <div class="column">
                <a class="myDIV" href="https://red-bag-p2.herokuapp.com/">
                <img src={RedBag} alt="Logo" />
                </a>
                <a href="https://ceven8498.github.io/Work-Day-Scheduler/">
                <img src={WorkScheduler} alt="Logo" />
                </a>
    
          </div>
                <div class="column">
                    <a href="https://notetaker98.herokuapp.com/">
                    <img src={NoteTaker} alt="Logo" />
            </a>
                        <a href="https://github.com/ctyrone123/project1">
                        <img src={EatsandDrinks} alt="Logo" />
            </a>
                            <a href="https://github.com/Ceven8498/Team-Profile-Generator">
                            <img src={TeamProfileGenerator} alt="Logo" />
            </a>
          </div>
        </div>
    
    )


}

export default Portfolio;