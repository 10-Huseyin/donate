import React, { Component } from 'react'
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class PostsPagination extends Component {
    render() {
        var pages=[]
        var totalPages = this.props.totalPages
        // console.log("TOTALPAGES=> ", totalPages)
        for (var i = 0; i <totalPages; i++ ) {
            pages.push(i+1)
        }
        // console.log(pages)    
        const buttons = pages.map((page) => 
                <Button value={page} onClick={this.props.handlePostPage} key={page} className="m-1">{page}</Button>)        
        return (
            <div>
                <table class="table">
                    <tbody>
                        <tr>
                            <td scope="row">
                                {buttons}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}




