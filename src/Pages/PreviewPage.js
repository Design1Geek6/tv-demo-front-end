import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'


export default class PreviewPage extends Component {
  render() {
    return (
      <div className="manage-page">

        <header>
          <nav>
            <div className="manage">
              <Link to="/" className="link">Manage</Link>
            </div>
            <div className="preview">
              <Link to="/PreviewPage" className="link">Preview</Link>
            </div>
          </nav>
        </header>


        <section className="manage-shows">
          <section className="show-selection">

            <h1 className="h1-shows">SHOWS</h1>
            <div className="show">
              <button className="show-btn-1">The Walking Dead</button>
              <button className="delete">-</button>
            </div>
            <div className="show">
              <button className="show-btn-1">Arrow</button>
              <button className="delete">-</button>
            </div>

          </section>
        </section>

        <section className="show-preview">
          <div className="preview-group">
            <div className="title-rate">
              <h2 className="show-title">The Walking Dead</h2>
              <h2 className="show-rating">3.5</h2>
            </div>
          </div>
          <img className="poster" src="../twdimg.jpg" alt="The Walking Dead Poster" />
        </section>
      </div>
    )
  }
}

