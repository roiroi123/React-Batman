import React from "react";

interface ICreateCard {
    title:string,
    year:number,
    imdbID:string,
    type:string,
    poster:string,
    rank:any
}



export default function CreateCard(props:ICreateCard) {
    const {title,year,imdbID,type,poster,rank} = props
    return (
        <div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src={poster} alt="Card image cap"></img>
  <div >{Rank(rank)}</div>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">Year Created : {year}
    {<br></br>}
     Type: {type}</p>
    <a href={'https://www.imdb.com/title/' + imdbID} className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    )
}

interface IProps {
    movies: Array<ICreateCard>
}

export function MoviesList(props: IProps): any {
    const { movies } = props
    return <div>
        {movies.map((item: any) => (<CreateCard title={item.Title} year ={item.Year} imdbID ={item.imdbID} type = {item.Type} poster = {item.Poster} rank = {item.rank}   />))}
    </div>

}

function Rank(props:any):any {
    console.log(props);
    
    
        if (props === 1) {
            return <React.Fragment>⭐</React.Fragment>
        }
        if (props === 2) {
            return <React.Fragment>⭐⭐</React.Fragment>
        }
        if (props === 3) {
            return <React.Fragment>⭐⭐⭐</React.Fragment>
        }
        if (props === 4) {
            return <React.Fragment>⭐⭐⭐⭐</React.Fragment>
        }
        if (props === 5) {
            return <React.Fragment>⭐⭐⭐⭐⭐</React.Fragment>
        }
    
    
}