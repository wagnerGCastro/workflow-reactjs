'use strict'

import React, { Component } from 'react'
import Title from 'components/title'

import './css/style.css'

class App extends Component {
  constructor () {
    super()
    this.state = { title: '...' }
  }

  // Promisse [01]
  getTitle () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('My app with async / await!')
      }, 2000)
    })
  } 

// Promisse [02]  sem Async
 componentDidMount () {
    this.getTitle().then((result) => {
         this.setState({ title: result })
    })
  }


  // Async/Await
  // async componentDidMount () {
  //   this.setState({
  //     title: await this.getTitle()
  //   })
  // }

  render () {
    return (
      <div>
        <Title>{this.state.title}</Title>
      </div>
    )
  }
}

export default App
