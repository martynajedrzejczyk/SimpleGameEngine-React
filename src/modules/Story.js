import './Story.css'
import Option from './Option'

export default function Story(props) {
    function next(e, nextId) {
        console.log(nextId)
        props.change(nextId)
    }

    const opt = []
    console.log("TU", props.row.choice)
    for(let ch of props.row.choice) {
        const option = <Option text={ch.text} key={ch.nr} next={ch.next} click={next}/>
        opt.push(option)
    }

    if("team" in props.row) {
        props.handleDisplay()
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