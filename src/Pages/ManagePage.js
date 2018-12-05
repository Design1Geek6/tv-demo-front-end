import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../style.css'

export default class ManagePage extends Component {
    render() {
        return (
            <div className="manage-page">

                <header>
                    <nav>
                        <div className="manage">
                            <Link to="/ManagePage" className="link">Manage</Link>
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

                <section className="add-edit-show">
                    <form action="">
                        <label>Show Name:</label>
                        <div className="inp-name">
                            <input className="show-inp" type="text" name="name" id="" />
                        </div>

                        <label>Show Rating:</label>
                        <div className="inp-rating">
                            <input className="show-inp" type="text" name="rating" id="" />
                        </div>


                        <label>Image URL:</label>
                        <div className="inp-img">
                            <input className="show-inp" type="text" name="image" id="" />
                        </div>

                        <div className="btn-submit">
                            <input type="submit" value="Create/Update" />
                        </div>
                    </form>
                </section>
            </div >
        )
    }
}
