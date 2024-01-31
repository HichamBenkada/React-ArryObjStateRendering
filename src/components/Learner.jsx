import Score from "./Score";

export default function Learner({learners}){
    return(
        <>
       
        {learners.map((learner , i) => {
            return <div className = "card">
                 ({i+1} of {learners.length})
                 <h3>
                    Name: {learner.name}
                 </h3>
                <p className ="read-the-docs">
                    <b>Bio:</b> <br /><em>{learner.bio}</em>
                </p> 

                <Score scores = {learner.scores}/>
            </div>
            })
        }
        </>
    )
}