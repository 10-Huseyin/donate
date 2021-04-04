import React, { Component } from 'react'
export class Sidebar extends Component {

    render() {
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
                     
`}
                </style>          
            <div class="sidenav">
                    <h4 href="#" className="openbtn"> ☰ Donate Admin</h4>
                    <a href="/user">User</a>
                    <a href="/post">Post</a>
                    <a href="/newPost">New Post</a>
                    
            </div>
      </div>
      )
    }
  }
  