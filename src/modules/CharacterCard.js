import './CharacterCard.css'

export default function CharacterCard(props) {

    

    return (
        <div className='card'>
            <p>{props.character.name}</p>
            <p>"{props.character.nick}"</p>
            <img src={"./postacie/" + props.character.img} alt="Tu powinien byc obrazek" />
            {/* <p>{props.character.state}</p> */}
        </div>
    )
}