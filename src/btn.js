import React from "react";

import "./styles.css";
import "./App.css";
import { Tooltip as ReactTooltip } from "react-tooltip";

class BTN extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    console.log(this.state.value);
    event.preventDefault();
  };

  render() {
    var position = this.state.value;
    return (
      <>
        <div>
          <input
            type="text"
            className="input"
            placeholder="Type position"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <div>
            {this.state.value === "top" && <div style={styles.top}>Top </div>}
            <button
              id="btn"
              // type="submit"
              // value="Submit"
              onMouseOver={this.handleSubmit}

              // data-tooltip-content={this.state.value}
            >
              <span>Hover</span>
            </button>

            {this.state.value === "bottom" && (
              <div style={styles.bottom}>Bottom</div>
            )}
            {this.state.value === "left" && <div style={styles.left}>Left</div>}
            {this.state.value === "right" && (
              <div style={styles.right}>Right</div>
            )}
          </div>
          {this.state.value === "top" && (
            <ReactTooltip
              anchorId="btn"
              content={this.state.value}
              place="top"
            />
          )}

          {this.state.value === "bottom" && (
            <ReactTooltip
              anchorId="btn"
              content={this.state.value}
              place="bottom"
            />
          )}
          {this.state.value === "right" && (
            <ReactTooltip
              anchorId="btn"
              content={this.state.value}
              place="right"
            />
          )}
          {this.state.value === "left" && (
            <ReactTooltip
              anchorId="btn"
              content={this.state.value}
              place="left"
            />
          )}
        </div>
      </>
    );
  }
}

const styles = {
  top: {
    marginTop: "2%",
    fontWeight: "700",
    fontSize: "60px",
    textAlign: "center"
  },
  bottom: {
    marginTop: "50%",
    fontWeight: "700",
    fontSize: "60px",
    textAlign: "center"
  },
  left: {
    marginLeft: "-80%",
    fontWeight: "700",
    fontSize: "60px"
  },
  right: {
    marginLeft: "90%",
    fontWeight: "700",
    fontSize: "60px"
  }
};

export default BTN;
