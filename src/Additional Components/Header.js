import React, { Component } from 'react';
import '../styles.css';

class Header extends Component {
    render() {
        return (
            <div className="container headerDiv">
                <div className="row">
                    <div className="col-12">
                        <h1 className="display-4">MY PRODUCT WAREHOUSE</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;