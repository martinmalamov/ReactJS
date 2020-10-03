import React, { Component } from 'react'
import styles from './index.module.css'
import Origam from '../origam'

class Origamis extends Component {
    constructor(props) {
        super(props)

        this.state = {
            origamis: []
        }
    }

    getOrigamis = async () => {
        // const {length} = this.props
        // ?length=${length}
        const promise = await fetch(`http://localhost:9999/api/origami`)
        const origamis = await promise.json()

        this.setState({
            origamis
        })
    }

    // renderOrigamis() {
    //     const { origamis } = this.state

    //     return origamis.map((origam, index) => {
    //         return (
    //             <Origam key={origam._id} index={index} {...origam} />
    //         )
    //     })
    // }

    componentDidMount() {
        this.getOrigamis()
    }

    render() {

        const {
            origamis
        } = this.state
        return (
            <div className={styles.container}>
                <h1 className={styles.title}>Origamis</h1>
                <div>
                    {origamis.map(origam => {
                        return (
                            <div>
                                {origam.description}
                            </div>
                        )
                    })}
                </div>
            </div>
        )

        // return (
        //     <div className={styles["origamis-wrapper"]}>
        //         {this.renderOrigamis()}
        //     </div>
        // )
    }
}

export default Origamis;
