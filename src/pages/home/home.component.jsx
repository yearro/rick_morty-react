import { React, Component } from "react";
import Card from '../../components/card/card.component'
import './home.styles.scss'

class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { charapters } = this.props
        return(
            <div className="personajes">
                {   charapters
                    .map(({id, ...otherCharapterProps}) => (
                    <Card key={id} id={id} {...otherCharapterProps} />
                ))
            }
            </div>
        )
    }
}

export default Home