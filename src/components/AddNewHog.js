import React, { useState } from "react";
import NavHogs from "./NavHogs";

function AddNewHog({ hogsArray, setHogsArray }) {
    const [newName, setNewName] = useState("")
    const [newSpecialty, setNewSpecialty] = useState("")
    const [newGreased, setNewGreased] = useState(false)
    const [newWeight, setNewWeight] = useState("")
    const [newHighestMedal, setNewHighestMedal] = useState("")
    const [newImage, setNewImage] = useState("")

    function handleNameInput(e) {
        setNewName(e.target.value)
    }

    function handleSpecialtyInput(e) {
        setNewSpecialty(e.target.value)
    }

    function handleGreasedInput(e) {
        setNewGreased(e.target.checked)
    }

    function handleWeightInput(e) {
        setNewWeight(e.target.value)
    }

    function handleImageInput(e) {
        setNewImage(e.target.value)
    }

    function handleHighestMedalInput(e) {
        setNewHighestMedal(e.target.value)
    }


    function handleFormSubmit(e) {
        e.preventDefault()
      

            const newHog = {
                name: newName,
                specialty: newSpecialty,
                greased: newGreased,
                weight: newWeight,
                image: newImage,
                "highest medal achieved": newHighestMedal

            }
    
            setHogsArray([...hogsArray, newHog])

            setNewName("")
            setNewSpecialty("")
            setNewGreased(false)
            setNewWeight("")
            setNewImage("")
            setNewHighestMedal("")

        
    }
    

    return(
        <div className="newHogForm">Add New Hog
        <form onSubmit={(e) => handleFormSubmit(e)}>
            <br></br>
            <input name="name" placeholder="Name" type="text" value={newName} onChange={(e) => handleNameInput(e)}></input>
            <br></br>
            <input name="specialty" placeholder="Specialty" type="text" value={newSpecialty} onChange={(e) => handleSpecialtyInput(e)}></input>
            <br></br>
            <label value="true">Greased?</label>
            <input name="greased" placeholder="Greased?" type="checkbox" value={newGreased} onChange={(e) => handleGreasedInput(e)}></input>
            <br></br>
            <input name="weight" placeholder="Weight" type="text" value={newWeight} onChange={(e) => handleWeightInput(e)}></input>
            <br></br>
            <input name="image" placeholder="Image link" type="text" value={newImage} onChange={(e) => handleImageInput(e)}></input>
            <br></br>
            <input name="highest-medal" placeholder="Highest Medal Achieved" type="text" value={newHighestMedal} onChange={(e) => handleHighestMedalInput(e)}></input>
            <button type="submit">Add New Hog</button>
        </form>
        </div>
    )
}

export default AddNewHog