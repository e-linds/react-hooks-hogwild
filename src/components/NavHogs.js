import React, { useState } from "react";
import AddNewHog from "./AddNewHog";
import MainDisplay from "./MainDisplay"


function NavHogs({ hogs, hogsArray, setHogsArray }) {
    const [currentHog, setCurrentHog] = useState("")
    const [filterButtonText, setFilterButtonText] = useState("Show Greased Hogs Only")

    function clickNewHog(clickedHog) {
        setCurrentHog(clickedHog)
    }

    const greasedHogs = hogsArray.filter((each) => {
        return each.greased === true
    })


    function handleFilterButton() {

        if (filterButtonText === "Show Greased Hogs Only") {

        setHogsArray(hogsArray = greasedHogs)
        setFilterButtonText("Show All Hogs")

        } else {

        setHogsArray(hogsArray = hogs)
        setFilterButtonText("Show Greased Hogs Only")

        }

    }



    function sortByName() {
        
        const nameSortedHogs = hogsArray.sort((a,b) => {
            const x = a.name
            const y = b.name
            return ((x < y) ? -1 : ((x > y ? 1 : 0)))
        })

        setHogsArray(hogsArray = [...nameSortedHogs])    
    }

    function sortByWeight() {

        const weightSortedHogs = hogsArray.sort((a,b) => {
            const x = parseFloat(a.weight)
            const y = parseFloat(b.weight)
            return ((x < y) ? -1 : ((x > y ? 1 : 0)))
        })

        setHogsArray(hogsArray = [...weightSortedHogs])
    
    }

    function hideHog(clickedHog) {
        const newHogsArray = hogsArray.filter((each) => {
            return each !== clickedHog
        })

        setHogsArray(newHogsArray)
    }


    return (
        <>
        <div>
            <button onClick={handleFilterButton}>{filterButtonText}</button>
            <button onClick={sortByName}>Sort By Name</button>
            <button onClick={sortByWeight}>Sort By Weight</button>
        </div>
        <AddNewHog hogsArray={hogsArray} setHogsArray={setHogsArray}/>
        <MainDisplay currentHog={currentHog}/>
        <div className="ui grid container">
        {hogsArray.map((hog) => {
            return (
                <div onClick={() => clickNewHog(hog)} className="pigTile" key={hog.name}>
                    <p>{hog.name}</p>
                    <img src={hog.image}></img>
                    <button onClick={() => hideHog(hog)}>Hide Hog</button>
                </div>
            )
        })}
        </div>
        
        </>
    )

}


export default NavHogs