import React, { Component } from 'react'
export class Header extends Component {

    render() {
    return (
      <div>
              <nav className="navbar navbar-inverse">
                <div className="container-fluid">             
                 <ul className="nav navbar-nav navbar-right">
                   <li><a href="#"><span className="glyphicon glyphicon-user"></span> {user.firstName +" "+ user.lastName}</a></li>
                   <li><a href="/login"><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
                 </ul>  
               </div>
             </nav>
      </div>
      )
    }
  }
  