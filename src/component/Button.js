import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';


class Button extends React.Component {
    render(props) {

        return (
            <div className={this.props.className}>
                <Link to={this.props.link}>
                    <button className={this.props.btnStyle}>
                        {this.props.title}
                        <img className="item-img" src={this.props.itemImg} alt=""/>
                    </button>
                </Link>
            </div>
        );
    }
};

export default Button;
