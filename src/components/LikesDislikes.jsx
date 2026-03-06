import { useState } from "react";

export default function LikesDislikes(){
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);

    return(
<div className="ml-30 mt-20 w-100  shadow rounded flex flex-col items-center gap-6 pt-4 pb-4">
    <h1>Like/Dislike Buttons (task8)</h1>
   <div className="flex gap-4">
    <div className="bg-pink-300 rounded py-1 px-2" >{like}</div>
    <button
    onClick={()=> setLike(like + 1)}
    >👍</button>
    </div>
<div className="flex gap-4">
<div className="bg-blue-300 rounded py-1 px-2">{dislike}</div>
    <button
    onClick={()=> setDislike(dislike + 1)}
    >👎</button>
    </div>
    </div>

    )
}