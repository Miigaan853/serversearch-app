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
    const url = "http://127.0.0.1:5000/eelj";
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
              <h5>{li.ename}</h5>

              <ul class="rating"></ul>
              <p>
                <span class="mr-1">
                  <strong>{li.id}</strong>
                </span>
              </p>
              <p class="pt-1">{li.temdeglel}</p>
              <div class="table-responsive">
                <table class="table table-sm table-borderless mb-0">
                  <tbody>
                    <tr>
                      <th class="pl-0 w-25" scope="row">
                        <strong>????????</strong>
                      </th>
                      <td>15 ????????????????????</td>
                    </tr>
                    <tr>
                      <th class="pl-0 w-25" scope="row">
                        <strong>1 ?????????? ??????????????</strong>
                      </th>
                      <td>7 ??????????????</td>
                    </tr>
                    <tr>
                      <th class="pl-0 w-25" scope="row">
                        <strong>4 ?????????????????? ??????????????</strong>
                      </th>
                      <td>3 ?????????????????? ??????????????</td>
                    </tr>
                  </tbody>
                </table>
                <button onClick={(e) => this.handleClick(e)}>???????????? ??????</button>
              </div>
            </div>
          </div>
        ))}
        <Footer />
      </section>
    );
  }
}
