import './card.styles.scss'

const Card = ({
    id,
    ...otherCharapterProps
}) => {
    const {name, image} = otherCharapterProps
    return(
        <div className="card">
        <a href={`/personaje/${id}`}>
            <div className="card-image">
                <figure className="image is-1by4">
                    <img src={image} alt="{name}" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">{name}</p>
                </div>
            </div>
        </a>
    </div>
    )
}
export default Card