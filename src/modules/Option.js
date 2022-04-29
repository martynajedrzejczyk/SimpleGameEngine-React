import './Option.css'

export default function Option(props) {

    const click = function(e) {
        e.preventDefault()
        props.click(e, props.ch.next)
        if ('rand' in props.ch) {
            console.log(props.ch.if0, props.ch.if1)
            props.click(e, undefined, props.ch.if0, props.ch.if1)
        }
    }

    return (
        <button onClick={click}>
            {props.ch.text}
        </button>
    )
}