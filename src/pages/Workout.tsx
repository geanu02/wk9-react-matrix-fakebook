import Body from "../components/Body";
import Counter from "../components/Counter";

export default function Workout() {

    const workoutArr = ['pushups', 'squats', 'burpees', 'jumpingJacks', 'situps', 'mountain climbers']

    return (
        <Body makepost sidebar>
            { workoutArr.map(workout => { 
                return <Counter key={workout} exercise={workout} />
            }) }
        </Body>
    )
}