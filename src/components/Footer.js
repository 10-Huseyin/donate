import React, { Component } from 'react'
export class Header extends Component {

    render() {
    return (
      <div>
        <style>
          {`
           .footer {
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            height:10px;
            background-color: #000;
            color: white;
            text-align: center;
          `}
        </style>
          <div class="footer">
  <p>Copyright © 2020 - 2021 Tüm Hakları Saklıdır. Soft Innovas </p>
</div>
      </div>
      )
    }
  }
  