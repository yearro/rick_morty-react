import {React, Component} from 'react'
import {Routes, Route} from 'react-router-dom'

import Header from './components/header/header.component'
import Home from './pages/home/home.component'
import NotFoun from './pages/404/404.component'
import View from './pages/view/view.component'
import getData from './utils.js'

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      charapters:[]
    }
  }
  componentDidMount() {    
    const response = getData().then(({ results }) => {
      this.setState({
        charapters: results
      })
    })
  }
  render() {
    const { charapters } = this.state
    return(
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home charapters={charapters} />} />
          <Route exact path="/personaje/:id" element={<View />} />
          <Route path="/404" element={<NotFoun />} />
        </Routes>
      </div>
    )
  }
}

export default App;
