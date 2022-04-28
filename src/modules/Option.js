import './Option.css'

export default function Option(props) {

    const click = function(e) {
        e.preventDefault()
        props.click(e, props.next)

        // text={ch.text} key={ch.nr} next={ch.next}
    }

    return (
        <button onClick={click}>
            {props.text}
        </button>
    )
}