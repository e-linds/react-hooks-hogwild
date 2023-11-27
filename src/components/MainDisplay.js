import React from "react";
import NavHogs from "./NavHogs";

function MainDisplay({ currentHog }) {
            if (currentHog) {
                return (
            <div>
                <p><strong>{currentHog.name}</strong></p>
                <p>Specialty: {currentHog.specialty}</p>
                <p>Weight: {currentHog.weight}</p>
                <p>Greased?: {(currentHog.greased).toString()}</p>
                <p>Highest Medal Achieved: {currentHog["highest medal achieved"]}</p>
            </div>
                )
            } else {
                return (
                    <>
                    <p></p>
                    <p></p>
                    <p></p>
                    </>
                )
            }
   
}

export default MainDisplay