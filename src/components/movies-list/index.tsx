import React from "react";
import CreateCard, { ICreateCard } from "../movies";

interface IProps {
    movies: Array<ICreateCard>
}

export default function MoviesList(props: IProps): any {
    const { movies } = props
    return <div>
        {movies.map((item: any) => (<CreateCard {...item}   />))}
    </div>

}