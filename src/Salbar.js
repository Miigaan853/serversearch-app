import React, { Component } from "react";
import history from "./history";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Footer from "./Footer";
export default class Delgerengui extends Component {
  handleClick() {
    history.push("/");
  }
  state = {
    loadin: true,
    list: [],
    search: "",
    server: [],
  };
  async componentDidMount() {
    const url = "http://127.0.0.1:5000/salbar";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ list: data.data, loadin: false });
  }
  render() {
    if (this.state.loadin) {
      return <div>loading</div>;
    }
    if (!this.state.list.length) {
      return <div>didn get menu list</div>;
    }
    return (
      <section class="mb-5">
        {this.state.list.map((li) => (
          <div class="row">
            <div class="col-md-6 mb-4 mb-md-0">
              <div id="mdb-lightbox-ui"></div>

              <div class="mdb-lightbox">
                <div class="row product-gallery mx-1">
                  <div class="col-12 mb-0">
                    <figure class="view overlay rounded z-depth-1 main-img">
                      <a href={li.Img} data-size="710x823">
                        <img
                          src={li.Img}
                          class="img-fluid z-depth-1"
                          style={{ width: "100%" }}
                        />
                      </a>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <h5>{li.scode}</h5>

              <ul class="rating"></ul>
              <p>
                <span class="mr-1">
                  <strong>{li.sname}</strong>
                </span>
              </p>
              <div class="table-responsive">
                <table class="table table-sm table-borderless mb-0">
                  <tbody>
                    <tr></tr>
                  </tbody>
                </table>
                <button onClick={(e) => this.handleClick(e)}>Үндсэн цэс</button>
              </div>
            </div>
          </div>
        ))}
        <Footer />
      </section>
    );
  }
}
