import React, { Component } from 'react';

class CreateNewProductComponent extends Component {
    render() {
        return (
            <div className="border border-dark rounded p-2 bg-light">
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Name</label>
                            <input type="text" className="form-control" placeholder="Name" />
                        </div>
                        <div className="form-group col-md-6">
                            <label>EAN</label>
                            <input type="text" className="form-control" placeholder="EAN" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Type</label>
                        <input type="text" className="form-control" placeholder="Type" />
                    </div>
                    <div className="form-group">
                        <label>Weight</label>
                        <input type="text" className="form-control" placeholder="Weight" />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Color</label>
                            <input type="text" className="form-control" placeholder="Color" />
                        </div>
                        <button className="btn btn-dark">Save</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateNewProductComponent;