import React from 'react';
import './Box.css';
import { Link } from 'react-router-dom';

class Box extends React.Component {
    render(props) {
        return (
            <Link to={this.props.link}>
                <div className={this.props.boxStyle}>
                    <div className="box-img">
                        <img src={this.props.boxImg} />
                    </div>
                    <div className="content">
                        <div className="content-detail">
                            <span className={this.props.categoryColor}>{this.props.category}</span>
                            <span className="date">{this.props.date}</span>
                        </div>
                        <p>{this.props.title}</p>
                    </div>
                </div>
            </Link>
        )
    }
}

export default Box;
