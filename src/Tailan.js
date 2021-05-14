import React, { Component } from "react";
import history from "./history";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
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
    const url = "http://127.0.0.1:5000/tailan";
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
        <button onClick={(e) => this.handleClick(e)}>Үндсэн цэс</button>
        {this.state.list.map((li) => (
          <div class="row">
            <div class="col-md-6 mb-4 mb-md-0"></div>
          </div>
        ))}
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          events={[
            { title: "Серверт засвар хийх өдөр", date: "2021-05-05" },
            { title: "Хуралтай өдөр", date: "2021-05-09" },
            { title: "Серверт засвар хийх өдөр", date: "2021-05-10" },
            { title: "Сервер програм шалгах", date: "2021-05-06" },
          ]}
          dateClick={this.handleDateClick}
        />

        <Footer />
      </section>
    );
  }
  handleDateClick = (arg) => {
    // bind with an arrow function
    alert(arg.dateStr);
  };
}
