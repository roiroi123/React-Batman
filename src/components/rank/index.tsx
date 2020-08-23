import React from "react";


interface IRankByStars{
    NOStars:number
}

export default function RankByStars(NOStars:number):IRankByStars {
    let stars:any = ""
    for (let index = 0; index < NOStars; index++) {
         stars += "⭐"
        
    }
    console.log("hey");
    const starsDiv = <React.Fragment>{stars}</React.Fragment>

    return stars
    
}