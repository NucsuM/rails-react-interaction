import React from "react";
import './table.css'

class Table extends React.Component {
  TableHead () {
    return(
      <thead>
        <tr>
          <th>ID</th>
          <th>albumId</th>
          <th>title</th>
          <th>url</th>
          <th>thumbnailUrl</th>
        </tr>
      </thead>           
    )
  };

  TableContent () {
    return (
      this.props.tableContent.map((item) => {
        return (
          <tr key={item['id']}>
            <td>{item['id']}</td>
            <td>{item['albumId']}</td>
            <td>{item['title']}</td>
            <td>{item['url']}</td>
            <td><img src={item['thumbnailUrl']} width="20" height="20"></img></td>
          </tr>
        );
      })
    );
  };

  render() {
    return <table>
      {this.TableHead()}
      <tbody>
        {this.TableContent()}
      </tbody>
    </table>;
  }
}

export default Table;
