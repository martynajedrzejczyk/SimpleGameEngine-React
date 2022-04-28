import Stone from './Stone'
import './Stones.css'

export default function Stones(props) {
    const stones = []
    for(let st of props.stones) {
        const stone = <Stone key={st.color} stone={st} />
        stones.push(stone)
    }
    return (
        <div className="stones-main">
            <div className='textHeader'>Zebrane kamienie:</div>
            <div className='stones'>
            {stones}
            </div>
            
        </div>
    )
}