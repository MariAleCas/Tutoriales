import React, { Component } from "react"

class Table extends Component {
  render() {
    return (
      <table>
        <TableBody />
        <TableHeader />
      </table>
    )
  }
}
const TableBody = () => {
  return <tbody />
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