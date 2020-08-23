import React,{ useState } from "react"
import { AiFillLike,AiFillDislike }  from "react-icons/ai";


interface ILikes{
    like?:number 
}
 export default function Likes(props:ILikes) {
  let  like = 0
  const [getLike, SetLike] = useState(like)



    return <div> {getLike}<AiFillLike fontSize="40px" onClick = {() =>SetLike(+1)}></AiFillLike>
    <AiFillDislike fontSize="40px" onClick = {() =>SetLike(0)    }></AiFillDislike>
    </div>
    
}