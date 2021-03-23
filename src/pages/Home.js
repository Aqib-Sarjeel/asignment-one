import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [stringValue, setStringValue] = useState("");
  const [arrayChar, setArrayChar] = useState([]);

  const handleChangeChar = () => {
    // setStringValue(e.target.value);
    setArrayChar(stringValue.split(""));
  };

  const getColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  return (
    <Fragment>
      <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
        <Link to="/users">
          <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
            Slide bar
          </a>
        </Link>
        <input
          class="form-control form-control-dark w-100"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <ul class="navbar-nav px-3">
          <li class="nav-item text-nowrap">
            <a class="nav-link" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </nav>

      <div class="container-fluid">
        <div class="row">
          <nav class="col-md-2 d-none d-md-block bg-light sidebar">
            <div class="sidebar-sticky">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <Link to="recrsl">
                    <a class="nav-link active" href="#">
                      <span data-feather="home"></span>
                      Dashboard <span class="sr-only">(current)</span>
                    </a>
                  </Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="file"></span>
                    Orders
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="shopping-cart"></span>
                    Products
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="users"></span>
                    Customers
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="bar-chart-2"></span>
                    Reports
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="layers"></span>
                    Integrations
                  </a>
                </li>
              </ul>

              <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span>Saved reports</span>
                <a class="d-flex align-items-center text-muted" href="#">
                  <span data-feather="plus-circle"></span>
                </a>
              </h6>
              <ul class="nav flex-column mb-2">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    Current month
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    Last quarter
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    Social engagement
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    Year-end sale
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="col-md-2"></div>

          <div className="col-md-10">
            <div className="row">
              <div className="col-3"></div>
              <div className="col-6">
                <br />
                <input
                  type="text"
                  placeholder="enter value"
                  className="form-control"
                  onChange={(e) => {
                    setStringValue(e.target.value);
                  }}
                  value={stringValue}
                />
                <br />
                <button
                  onClick={() => handleChangeChar()}
                  className="btn btn-primary"
                >
                  Submit
                </button>
                <span>&nbsp;&nbsp;</span>
                <button
                  onClick={() => setArrayChar([])}
                  className="btn btn-danger"
                >
                  Clear
                </button>
              </div>

              <div className="col-3"></div>

              <div className="col-12">
                <div className="row">
                  {arrayChar.map((char, index) => (
                    <div className="col-3 text-center my-2">
                      <div
                        style={{
                          background: `${
                            index % 3 === 0 ? getColor() : "blue"
                          }`,
                          height: "100px",
                          width: "100px",
                        }}
                      >
                        {char}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
