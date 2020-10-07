import React, { Component } from 'react'
import PageLayout from '../../components/page-layout/index.js'
import styles from './index.module.css'
import Title from '../../components/title'
import Origamis from '../../components/origamis/index.js'
import UserContext from '../../Context.js'

class Publications extends Component {

  static contextType = UserContext

  render() {
    console.log(this.context)
    return (
      <PageLayout>
        <Title title="Publications" />
        <Origamis />
      </PageLayout>
    )
  }
}

export default Publications;
