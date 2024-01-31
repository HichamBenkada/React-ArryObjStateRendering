export default function Score({scores}){
    return(
        <>
        Scores: <br />
            {scores.map((score)=>{
                return (
                    <pre key ={score.date}>
                    Date: {score.date}     Score: {score.score}
                    </pre>
                )
            })}
        </>
    )
}