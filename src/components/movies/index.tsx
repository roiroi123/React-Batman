import React,{ useState } from "react"
import RankByStars from "../rank";
import Likes from "../likes";
import Button from 'react-bootstrap/Button';


export interface ICreateCard {
    Title:string,
    Year:number,
    imdbID:string,
    Type:string,
    Poster:string,
    rank:any
    id:any
}



export default function CreateCard(props:ICreateCard) {
  const Background =   ""
  
  const [getBgc, SetBgc] = useState(Background)

    const {Title,Year,imdbID,Type,Poster,rank,id} = props
    return (
        <div id = {id} className="card" style={{width: "18rem", backgroundColor:getBgc}}>
          <Button onClick ={()=>{deleteBtn(id)}} >X</Button>
  <img className="card-img-top" src={Poster} alt="Card image cap"></img>
  <div >{RankByStars(rank)}</div>
  <div className="card-body">
    <h5 className="card-title">{Title}</h5>
    <p className="card-text">Year Created : {Year}
    {<br></br>}
     Type: {Type}</p>
    <p className="card-text"><Likes></Likes> </p>
    <a href={'https://www.imdb.com/title/' + imdbID} className="btn btn-primary">Go to the IMDB site</a>
    <Button onClick={()=>{
      if (getBgc === "yellow") {
        SetBgc("")
      }
      else{
        SetBgc("yellow")

      }
      }} >Change Background</Button>
  </div>
</div>
    )
}
function deleteBtn(id:any) {
  console.log(id)
  const ToBeDeleted:any = document.getElementById(id)
  ToBeDeleted.innerHTML = ""
  
}

