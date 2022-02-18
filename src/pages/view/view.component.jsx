import { React, Component } from "react";
import getData from '../../utils'
import './view.styles.scss'
class View extends Component {
    constructor() {
        super()
        this.state = {
            character: {
                name: '',
                image: '',
                episode: [],
                status: '',
                species: '',
                gender: '',
                origin: {
                    name: ''
                },
                location: {
                    name: ''
                }
            }
        }
    }
    componentDidMount() {
        const currentPath = (window.location.href).split('/')
        getData(currentPath.pop()).then((character) => {
            this.setState({
                character: {
                    ...character
                }
            })
        }).catch(() => {
            window.location.href = "/404";
        })
    }
    render() {
        const {
            name,
            image,
            episode,
            status,
            species,
            gender,
            origin,
            location
        } = this.state.character
        return(
            <div className="Personaje-inner">
                <article className="Personaje-card">
                    <img src={image} alt={name} />
                </article>
                <article className="Personaje-card">
                    <h3>Episodios: <span>{episode.length}</span></h3>
                    <h3>Estado: <span>{status}</span></h3>
                    <h3>Especie: <span>{species}</span></h3>
                    <h3>Género: <span>{gender}</span></h3>
                    <h3>Origen: <span>{origin.name}</span></h3>
                    <h3>Última ubicación: <span>{location.name}</span></h3>
                </article>
            </div>
        )
    }
}
export default View