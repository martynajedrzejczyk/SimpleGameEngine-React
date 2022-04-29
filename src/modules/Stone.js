import './Stone.css'

export default function Stone(props) {
    return (
        <div className='stone'>
            <div className='stoneName'>Kamień {props.stone.color}</div>
            <img src={"./obrazy/kamienie/" + props.stone.img} alt="Tu powinien byc obrazek" />
        </div>
    )
}