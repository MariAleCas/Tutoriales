import React, { Component } from "react"

class Table extends Component {
  render() {
    const { charactersData } = this.props
    return (
      <table>
        <TableBody charactersData={charactersData} />
        <TableHeader />
      </table>
    )
  }
}
const TableBody = (props) => {
  const rows = props.charactersData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
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