import React, { Component } from 'react'
import Table from './table'
import Form from './Form'
class App extends React.Component {
  state = {
    characters: [],
  }
  render() {
    const { characters } = this.state
    return (
      <div className="container">
        <Table charactersData={characters} removeCharacter={this.removeCharacter} />
        <Form handleSumit={this.handleSumit} />
      </div>

    )
  }
  removeCharacter = (index) => {
    const { characters } = this.state
    this.setState({
      characters: characters.filter((characters, i) => {
        return i !== index
      }),
    })
  }
  handleSumit = (character) => {
    this.setState({ characters: [...this.state.characters, character] })
  }


}
export default App