import './Story.css'
import Option from './Option'

export default function Story(props) {
    function next(e, nextId, if0, if1) { 
        console.log(if0, if1)
        if (if0 !== undefined) {
            const rand = Math.random()
            if (rand < 0.5) {
                props.change(if0)
            } else {
                props.change(if1)
            }
        } else {
            props.change(nextId)
        }
        
    }

    const opt = []
    for(let ch of props.row.choice) {
        const option = <Option key={ch.nr} ch={ch} click={next}/>
        opt.push(option)
    }

    
    return (
        <div className="story">
            <div className="text">
                {props.row.text}
            </div>
            <div className="options-div">
                {opt}
            </div>
        </div>
    )
}