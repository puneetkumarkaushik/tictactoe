import React, {Component} from 'react';
import './Box.css';

class Box extends Component {
    render() {
        return (
            <div className="box" onClick={() => this.props.onMark(this.props.index)}>
                <span className="mark">{this.props.mark}</span>
            </div>
        );
    }
}

export default Box;
