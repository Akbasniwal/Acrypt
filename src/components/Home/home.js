import React, { Component } from "react";
import Header from "./header";
import Loader from "../loader/loader";
import Layout from "./layout";
import "./home.scss";
import { BiCopy, BiTrash } from "react-icons/bi";

export class Home extends Component {
  CHeader = (Name, Icons, funcs) => (
    <div className="component-header">
      <div className="name">{Name}</div>
      <div className="icons">
        {Icons.map((Icon, index) => (
          <div
            className="icon"
            key={index}
            onClick={() => {
              funcs[index]();
            }}
          >
            <Icon size={20} />
          </div>
        ))}
      </div>
    </div>
  );

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      searchInput: "",
      searchtools: [],
      operations: [],
      input: "",
      output: "",
      outputType: "",
    };
    this.inputRef = React.createRef();
    this.tools = require("./tools").default;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 1500);
  }

  clearOperations = () => {
    this.setState({
      operations: [],
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.input !== this.state.input) {
      // focus on input end when input losses focus while rendering on setState
      this.inputRef.current.selectionStart = this.inputRef.current.value.length;
      this.inputRef.current.selectionEnd = this.inputRef.current.value.length;
      this.inputRef.current.focus();
    }
  }

  Compute = (input) => {
    let output = input,
      t = "text";
    this.state.operations.forEach((Operation) => {
      try {
        output = Operation.compute(output);
      } catch (e) {
        output = e.message;
        t = "error";
        return;
      }
    });
    this.setState({
      output: output,
      outputType: t,
    });
  };

  render() {
    return this.state.loading ? (
      <Loader />
    ) : (
      <div className="home">
        <Header />
        <div className="content">
          <Layout
            Left={() => (
              <div className="left">
                {this.CHeader("Operations", [])}
                <div className="search">
                  <input
                    type="text"
                    name="search"
                    placeholder="Search..."
                    value={this.state.searchInput}
                    onChange={(e) => {
                      this.setState({
                        searchInput: e.target.value,
                        searchtools: this.tools.filter((tool) =>
                          tool.name
                            .toLowerCase()
                            .includes(e.target.value.toLowerCase())
                        ),
                      });
                    }}
                    autoFocus
                  />
                </div>
                <div className="tools">
                  {(this.state.searchInput !== ""
                    ? this.state.searchtools
                    : this.tools
                  ).map((tool, index) => (
                    <div
                      className="tool"
                      key={index}
                      onClick={async () => {
                        await this.setState({
                          operations: [...this.state.operations, tool],
                        });
                        this.Compute(this.state.input);
                      }}
                    >
                      {tool.name}
                    </div>
                  ))}
                </div>
              </div>
            )}
            Middle={() => (
              <div className="middle">
                {this.CHeader(
                  "Operate Here",
                  [BiTrash],
                  [this.clearOperations]
                )}
                <div className="operations">
                  {this.state.operations.map((Operation, index) => (
                    <div
                      className="operation"
                      key={index}
                      onDoubleClick={async () => {
                        await this.setState({
                          operations: this.state.operations.filter(
                            (_, i) => i !== index
                          ),
                        });

                        this.Compute(this.state.input);
                      }}
                    >
                      {Operation.name}
                      {Operation.html}
                    </div>
                  ))}
                </div>
                <div className="compute">
                  <div
                    className="compute-btn"
                    onClick={() => {
                      this.Compute(this.state.input);
                    }}
                  >
                    Compute
                  </div>
                </div>
              </div>
            )}
            TopRight={() => (
              <div className="top-right">
                {this.CHeader(
                  "Input",
                  [BiCopy],
                  [
                    () => {
                      navigator.clipboard.writeText(this.state.input);
                    },
                  ]
                )}
                <textarea
                  type="text"
                  name="input"
                  value={this.state.input}
                  onChange={(e) => {
                    this.setState({
                      input: e.target.value,
                    });
                    this.Compute(e.target.value);
                  }}
                  ref={this.inputRef}
                ></textarea>
              </div>
            )}
            BottomRight={() => (
              <div className="bottom-right">
                {this.CHeader(
                  "Ouput",
                  [BiCopy],
                  [
                    () => {
                      navigator.clipboard.writeText(this.state.output);
                    },
                  ]
                )}
                <textarea
                  type="text"
                  name="output"
                  style={{
                    backgroundColor:
                      this.state.outputType === "error" ? "#ff525236" : "",
                  }}
                  value={this.state.output}
                  readOnly
                ></textarea>
              </div>
            )}
          ></Layout>
        </div>
      </div>
    );
  }
}

export default Home;
