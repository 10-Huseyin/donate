import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { API_BASE } from "../../config/env";

export default class editNewsCampaigns extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: {
        post_img_url: "",
        donatee_img_url: "",
        donatee_desc: "",
        donatee_name: "",
        title: "",
        summary: "",
        content: "",
        created_at: new Date(),
        updated_at: new Date(),
        user_id: "",
        post_type: "",
        content_1: "",
        content_2: "",
        content_3: "",
        content_4: "",
        content_img_1: "",
        content_img_2: "",
        is_deleted: false,
        onSubmit: false,
      },
    };
  }

  initialState = {
    posts: {
      post_img_url: "",
      donatee_img_url: "",
      donatee_desc: "",
      donatee_name: "",
      title: "",
      summary: "",
      content: "",
      created_at: new Date(),
      updated_at: new Date(),
      user_id: "",
      post_type: "",
      content_1: "",
      content_2: "",
      content_3: "",
      content_4: "",
      content_img_1: "",
      content_img_2: "",
      is_deleted: false,
      onSubmit: true,
    },
  };

  componentWillMount() {
    const id = this.props.id;
    axios
      .get(`${API_BASE}posts/${id}`)
      .then((json) =>
        this.setState({
          posts: {
            post_img_url: json.data.post_img_url,
            donatee_img_url: json.data.donatee_img_url,
            donatee_desc: json.data.donatee_desc,
            donatee_name: json.data.donatee_name,
            title: json.data.title,
            summary: json.data.summary,
            content: json.data.content,
            created_at: json.data.created_at,
            updated_at: json.data.updated_at,
            user_id: json.data.user_id,
            post_type: json.data.post_type,
            content_1: json.data.content_1,
            content_2: json.data.content_2,
            content_3: json.data.content_3,
            content_4: json.data.content_4,
            content_img_1: json.data.content_img_1,
            content_img_2: json.data.content_img_2,
          },
        })
      )
      // .then(console.log(this.state.posts));
  }

  handlePostType = (e) => {
    // console.log("post type", e.target.value);
    if (e.target.value === "1") {
      this.setState({ posts: { ...this.state.posts, post_type: true } });
    } else {
      this.setState({ posts: { ...this.state.posts, post_type: false } });
    }
  };

  handlePostUrl = (event) => {
    const target = event.target;
    const { value } = target;
    this.setState({
      posts: { ...this.state.posts, post_img_url: value },
    });
    // console.log("post_img_url", value);
  };

  handleDonateeUrl = (event) => {
    const target = event.target;
    const { value } = target;
    this.setState({
      posts: { ...this.state.posts, donatee_img_url: value },
    });
    // console.log("donatee_img_url", value);
  };

  handleDonateeDesc = (event) => {
    const target = event.target;
    const { value } = target;
    this.setState({
      posts: { ...this.state.posts, donatee_desc: value },
    });
    // console.log("DONATEEE DESC", value);
    // console.log(this.state.posts);
  };

  handleDonateeName = (event) => {
    const target = event.target;
    const { value } = target;
    this.setState({
      posts: { ...this.state.posts, donatee_name: value },
    });
    // console.log("DONATEEE NAME", value);
    // console.log(this.state.posts);
  };

  handleTitle = (event) => {
    const target = event.target;
    const { value } = target;
    this.setState({
      posts: { ...this.state.posts, title: value },
    });
    // console.log("TITLE", value);
    // console.log(this.state.posts);
  };

  handleSummary = (event) => {
    const target = event.target;
    const { value } = target;
    this.setState({
      posts: { ...this.state.posts, summary: value },
    });
    // console.log("Summary", value);
  };

  handleContent1 = (event) => {
    const target = event.target;
    const { value } = target;
    this.setState({
      posts: { ...this.state.posts, content_1: value },
    });
    // console.log("Content_1", value);
  };

  handleContent2 = (event) => {
    const target = event.target;
    const { value } = target;
    this.setState({
      posts: { ...this.state.posts, content_2: value },
    });
    // console.log("Content_2", value);
  };

  handleContentImg1 = (event) => {
    const target = event.target;
    const { value } = target;
    this.setState({
      posts: { ...this.state.posts, content_img_1: value },
    });
    // console.log("Content_img_1", value);
  };

  handleContent3 = (event) => {
    const target = event.target;
    const { value } = target;
    this.setState({
      posts: { ...this.state.posts, content_3: value },
    });
    // console.log("Content_3", value);
  };

  handleContent4 = (event) => {
    const target = event.target;
    const { value } = target;
    this.setState({
      posts: { ...this.state.posts, content_4: value },
    });
    // console.log("Content_4", value);
  };

  handleContentImg2 = (event) => {
    const target = event.target;
    const { value } = target;
    this.setState({
      posts: { ...this.state.posts, content_img_2: value },
    });
    // console.log("Content_img_2", value);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.editedFalse();
    const id = this.props.id;
    axios.put(`${API_BASE}posts/${id}`, {
      post_img_url: this.state.posts.post_img_url,
      donatee_img_url: this.state.posts.donatee_img_url,
      donatee_desc: this.state.posts.donatee_desc,
      donatee_name: this.state.posts.donatee_name,
      title: this.state.posts.title,
      summary: this.state.posts.summary,
      content: this.state.posts.content,
      post_type: this.state.posts.post_type,
      content_1: this.state.posts.content_1,
      content_2: this.state.posts.content_2,
      content_3: this.state.posts.content_3,
      content_4: this.state.posts.content_4,
      content_img_1: this.state.posts.content_img_1,
      content_img_2: this.state.posts.content_img_2,
    });
    this.setState(this.initialState);
  };

  render() {
    return (
      <div className="container bg-light border border-5 border-primary p-5 text-center">
        <form onSubmit={this.handleSubmit} action={"../../../img/"}>
          <div className="mt-3">
            <div className="row">
              <div className="col-12 text-center">
                <h1 className="text-primary">Edit Post</h1>
              </div>
              <div className="col-12 text-center mt-3 mb-3">
                <select
                  className="ui dropdown"
                  onChange={this.handlePostType}
                  value={this.state.posts.post_type ? "1" : "0"}
                >
                  <option value="2">Select Post Type</option>
                  <option className="option1" value="1">
                    News
                  </option>
                  <option className="option0" value="0">
                    Campaigns
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <div className="container-fluid mt-3 mb-3 p-2 border">
              <div className="row">
                <div className="col-12 col-md-6 col-lg-6 mt-2">
                  <label>Add Header Image URL:</label>
                  <br />
                  <input
                    name="post_img_url"
                    onChange={this.handlePostUrl}
                    placeholder="Enter Post Image Url "
                    value={this.state.posts.post_img_url}
                    class="form-control"
                  />
                </div>
                <br />
                <div className="col-12 col-md-6 col-lg-6 mt-2">
                  <label>Add Doneete Image URL:</label>
                  <br />
                  <input
                    name="donatee_img_url"
                    onChange={this.handleDonateeUrl}
                    placeholder="Enter Donatee Image Url "
                    value={this.state.posts.donatee_img_url}
                    class="form-control"
                  />
                </div>
                <br />

                <div className="col-12 col-md-6 col-lg-6 mt-2">
                  <label>Add Doneetee Name:</label>
                  <br />
                  <input
                    name="donatee_name"
                    onChange={this.handleDonateeName}
                    placeholder="Enter Donatee Name "
                    value={this.state.posts.donatee_name}
                    class="form-control"
                  />
                </div>
                <br />

                <div className="col-12 col-md-6 col-lg-6 mt-2">
                  <label>Add Title:</label>
                  <br />
                  <input
                    name="title"
                    onChange={this.handleTitle}
                    placeholder="Enter Title"
                    value={this.state.posts.title}
                    class="form-control"
                  />
                </div>
                <br />
                <div className="col-12 col-md-6 col-lg-6 mt-2">
                  <label>Add Doneetee Description:</label>
                  <br />
                  <textarea
                    class="form-control"
                    rows="4"
                    cols="50"
                    name="summary"
                    onChange={this.handleDonateeDesc}
                    value={this.state.posts.donatee_desc}
                  ></textarea>
                </div>
                <br></br>
                <div className="col-12 col-md-6 col-lg-6 mt-2">
                  <label>Add Summary:</label>
                  <br />
                  <textarea
                    class="form-control"
                    rows="4"
                    cols="50"
                    name="summary"
                    onChange={this.handleSummary}
                    value={this.state.posts.summary}
                  ></textarea>
                </div>
              </div>

            </div>
          </div>
          <div className="container-fluid text-center mt-5 border p-3">
            <h6 className="fw-bold text-primary">Add Article</h6>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6 mt-2">
                <label>Add Content 1</label>
                <br></br>
                <textarea
                  class="form-control"
                  rows="4"
                  cols="50"
                  name="content_1"
                  onChange={this.handleContent1}
                  value={this.state.posts.content_1}
                ></textarea>
              </div>
              <div className="col-12 col-md-6 col-lg-6 mt-2">
                <label>Add Content 3</label>
                <br></br>
                <textarea
                  class="form-control"
                  rows="4"
                  cols="50"
                  name="content_3"
                  onChange={this.handleContent3}
                  value={this.state.posts.content_3}
                ></textarea>
              </div>
              <div className="col-12 col-md-6 col-lg-6 mt-2">
                <label>Add Content 2</label>
                <br></br>
                <textarea
                  class="form-control"
                  rows="4"
                  cols="50"
                  name="content_2"
                  onChange={this.handleContent2}
                  value={this.state.posts.content_2}
                ></textarea>
              </div>
              <div className="col-12 col-md-6 col-lg-6 mt-2">
                <label>Add Content 4</label>
                <br></br>
                <textarea
                  class="form-control"
                  rows="4"
                  cols="50"
                  name="content_4"
                  onChange={this.handleContent4}
                  value={this.state.posts.content_4}
                ></textarea>
              </div>
              <div className="col-12 col-md-6 col-lg-6 mt-2">
                <label>Add Content Image 1 URL:</label>
                <br />
                <input
                  name="content_img_1"
                  onChange={this.handleContentImg1}
                  placeholder="Enter Content Image 1 Url "
                  value={this.state.posts.content_img_1}
                  class="form-control"
                />
              </div>
              <div className="col-12 col-md-6 col-lg-6 mt-2">
                <label>Add Content Image 2 URL:</label>
                <br />
                <input
                  name="content_img_2"
                  onChange={this.handleContentImg2}
                  placeholder="Enter Content Image 2 Url "
                  value={this.state.posts.content_img_2}
                  class="form-control"
                />
              </div>
            </div>
          </div>

          <div className="text-right">
            <br />
            <input
              type="submit"
              name="submit"
              value="Submit"
              className="btn btn-primary "
            />
          </div>
        </form>
        {this.state.posts.onSubmit ? <Redirect to="/admin/posts" /> : null}
      </div>
    );
  }
}
