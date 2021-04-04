import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../actions';




class Home extends React.Component {
    
    componentDidMount() {
        this.props.getUsers();
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    render() {

        const { user, users } = this.props;
        return (
            <div>
                <style>
                    {`
                    .sidenav {
                        height: 100%;
                        width: 160px;
                        position: fixed;
                        z-index: 1;
                        top: 0;
                        left: 0;
                        background-color: #111;
                        overflow-x: hidden;
                        padding-top: 20px;
                      }
                      
                      .sidenav a {
                        padding: 6px 8px 6px 16px;
                        text-decoration: none;
                        font-size: 15px;
                        color: #818181;
                        display: block;
                      }
                      
                      .sidenav a:hover {
                        color: #f1f1f1;
                      }
                      
                      .main {
                        margin-left: 160px; 
                        font-size: 12px; 
                        padding: 0px 10px;
                      }
                      .openbtn{
                          margin-top :0px;
                          margin-bottom:20px;
                          color:#fff;
                          margin-left:5px;
                      }
                      
                      @media screen and (max-height: 450px) {
                        .sidenav {padding-top: 15px;}
                        .sidenav a {font-size: 18px;}
                      }
                      .footer {
                        position: fixed;
                        left: 0;
                        bottom: 0;
                        width: 100%;
                        background-color: #000;
                        color: white;
                        text-align: center;
`}
                </style>
              <nav className="navbar navbar-inverse">
                <div className="container-fluid">             
                 <ul className="nav navbar-nav navbar-right">
                   <li><a href="#"><span className="glyphicon glyphicon-user"></span> {user.firstName +" "+ user.lastName}</a></li>
                   <li><a href="/login"><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
                 </ul>  
               </div>
             </nav>
            
            <div class="sidenav">
                    <h4 href="#" className="openbtn"> ☰ Donate Admin</h4>
                    <a href="/user"><span className="glyphicon glyphicon-user"></span>  User</a>
                    <a href="/post"><span className="glyphicon glyphicon-film"></span>  Post</a>
                    <a href="/newPost"><span className="glyphicon glyphicon-pencil"></span>  New Post</a>
                    
            </div>
            <div class="main">
            <h3>All registered users:</h3>
                          {users.loading && <em>Loading users...</em>}
                          {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                          {users.items &&
                              <ul>
                                  {users.items.map((user, index) =>
                                      <li key={user.id}>
                                          {user.firstName + ' ' + user.lastName}
                                          {
                                              user.deleting ? <em> - Deleting...</em>
                                              : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                              : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                                          }
                                      </li>
                                  )}
                              </ul>
                          }
  </div>
  <div class="footer">
  <p>Copyright © 2020 - 2021 Tüm Hakları Saklıdır. Soft Innovas </p>
</div>
            </div>
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(Home);
export { connectedHomePage as Home };