import './People.css'
import CharacterCard from './CharacterCard'

export default function People(props) {
    const opt = []
    for(let ch of props.characters) {
        const charact = <CharacterCard key={ch.nick} character={ch}/>
        opt.push(charact)
    }

    return (
        <div className="people-main">
            <div className='textHeader'>Twoja drużyna:</div>
            <div className='people'>
                {opt}
            </div>
        </div>
    )
}