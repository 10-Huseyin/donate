import React, { Component } from 'react';
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import BarLoader from "react-spinners/BarLoader"

export default class UserList extends Component {
  state = { delete: false, willDelete: "", data: [], loading: false }

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.setState({
        data: this.props.data,
        loading: true
      })
    }
  }
  componentDidMount() {
    this.props.fetchData()
  }

  showAlertDelete = () => {
    this.setState({ delete: true })
    this.props.deleteUser(this.state.willDelete);
    const newData = this.state.data.filter((user) => user.id !== this.state.willDelete);
    this.setState({ data: newData })
    setTimeout(() => {
      this.setState({ delete: false })
    }, 3000);
  }

  willDeleteUser = (id) => {
    this.setState({ willDelete: id })
  }

  render() {
    const users = this.state.data;
    const pages = this.props.totalPages
    const page = this.props.nextPage
    console.log(this.props)

    const alertDelete = (
      <div className="alert alert-success" role="alert">
        User was deleted successfully.
      </div>
    )
    const alertUpdate = (
      <div className="alert alert-success" role="alert">
        User was updated successfully.
      </div>
    )

    return (
      <div>
        <Table striped bordered hover>
          {this.state.delete && alertDelete}
          <thead>
            <tr>
              <th>Number</th>
              <th>Role</th>
              <th>User Name</th>
              <th>E-mail</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Last Login</th>
              <th></th>
            </tr>
          </thead>
          <BarLoader color={'#c6fc03'} loading={this.state.loading} />
          {users.map((user, index) => (
            <tbody>
              <tr key={index}>
                <td>
                  {index + 1 + (page * 10)}
                </td>
                <td>{user.roles[0].name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.last_login}</td>
                <td>
                  {/* <Link to={`/user/edit/${user.id}`}> */}
                  <button
                    className="btn btn-sm btn-success mr-2 gap-3"
                    type="button"
                    onClick={() => this.props.willEditUser(user.id)}
                  >
                    Edit
                    </button>
                  {/* </Link> */}
                  <button
                    type="button"
                    onClick={() => this.willDeleteUser(user.id)}
                    data-toggle="modal" data-target="#exampleModal"
                    className="btn btn-sm btn-danger mx-auto">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            {page === 0 ? <li className="page-item disabled"><span className="page-link">Previous</span></li> : <li className="page-item" onClick={() => this.props.changePage(page - 1)}><span className="page-link">Previous</span></li>}

            {[...Array(pages)].map((x, i) =>
              <li className="page-item" onClick={() => this.props.changePage(i)}><span className="page-link">{i + 1}</span></li>
            )}
            {page === pages - 1 ? <li className="page-item disabled"><span className="page-link">Next</span></li> : <li className="page-item" onClick={() => this.props.changePage(page + 1)}><span className="page-link">Next</span></li>}
          </ul>
        </nav>

        {/* Delete modal */}
        <div div class="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Delete it?</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete user?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.showAlertDelete}>Yes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

