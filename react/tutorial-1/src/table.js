import React, { Component } from "react"

const Table = props => {
  const { charactersData, removeCharacter } = props

  return (
    <table>
      <TableHeader />
      <TableBody charactersData={charactersData} removeCharacter={removeCharacter} />

    </table>
  )
}

const TableBody = (props) => {
  const rows = props.charactersData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    )
  })
  return <tbody>{rows}</tbody>
}

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  )
}
export default Table