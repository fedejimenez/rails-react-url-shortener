import React, { Component } from "react"

class UrlPage extends Component {
  render() {
    return (
      <div className="container">
        <h1>Url List</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Long Url</th>
              <th scope="col">Short Url</th>
              <th>Slug</th>
              <th scope="col">Clicked</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">long1</th>
              <td>short1</td>
              <td>slug1</td>
              <td>clicked1</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default UrlPage