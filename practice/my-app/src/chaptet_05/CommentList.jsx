/* eslint-disable react/prop-types */

import Comment from "./Comment";

const comment_list = [
    {
        name : "김동건",
        comment : "안녕하세요, 위젯입니다."
    },
    {
        name : "유재석",
        comment : "안녕하세요, 위젯입니다."
    },
    {
        name : "강민경",
        comment : "안녕하세요, 위젯입니다."
    }
]

function CommentList(){
    return (
        // <div>
        //     <Comment name = {"김동건"} comment = {"안녕하세요, 위젯입니다."}/>
        // </div>
        <div>
            {comment_list.map((comment, idx)=>{
                return (
                    <Comment name = {comment.name} comment = {comment.comment} key ={idx}/>
                )
            })}
        </div>
    )
}

export default CommentList