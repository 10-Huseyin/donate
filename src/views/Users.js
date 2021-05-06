import React, { Component } from 'react';
import UserList from '../components/Users/UserList';
import { API_BASE } from '../config/env';
import EditUserForm from '../components/Users/EditUserForm'
import axios from 'axios';

const url = `${API_BASE}users`;

export default class Users extends Component {
  state = {
    data: [],
    totalDocs: null,
    totalPages: null,
    nextPage: 0,
    currentUser: {},
    edit: false
  }

  willEditUser = (id) => {
    axios.get(`${url}/info/${id}`)
      .then(result => result.data)
      .then(data => this.setState({ currentUser: data, edit: true }))
      .catch(err => err)
  }

  editUser = (id, roles, firstname, lastname, email, username, company, phone) => {
    axios.put(`${url}/${id}`, { roles, firstname, lastname, email, username, company, phone, is_deleted: false })
      .then(result => Object.assign({}, result.data, { id }))
      .then(id => this.setState({ edit: false }))
      .catch(err => console.log(err))
    this.fetchData()
  }
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.nextPage !== prevState.nextPage) {
      this.fetchData();
    }
    console.log("prevState : ", prevState)
  }

  fetchData = () => {
    axios.get(`${url}?page=${this.state.nextPage}`)
      .then(result => this.setState({
        data: result.data.docs,
        totalDocs: result.data.totalDocs,
        totalPages: result.data.totalPages
      }))
      .catch(err => err)
  }

  changePage = (page) => {
    this.setState({ nextPage: page })
  }

  deleteUser = async (id) => {
    axios.put(`${url}/${id}`, { is_deleted: true })
      .then(result => Object.assign({}, result.data, { id }))
      .then(data => console.log("Was Deleted...", data))
  }

  render() {
    return (
      <div>
        {this.state.edit ? <EditUserForm willEditData={this.state.currentUser} editUser={this.editUser} /> : <UserList {...this.state} fetchData={this.fetchData} changePage={this.changePage} deleteUser={this.deleteUser} willEditUser={this.willEditUser} />}
      </div>
    )
  }
}


