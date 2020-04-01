import React, { Component } from 'react';

class PreviewProductComponent extends Component {
    render() {
        return (
            <div className="container my-4">
                <div className="border border-dark rounded p-2 bg-light">
                    <div></div>
                    <div></div>
                </div>
                <h4 className="my-4"> Dokumento peržiūra</h4>
                <div className="row">
                    <div className="col-4 font-weight-bold">Autorius:</div>
                    <div className="col-4 font-weight-bold">Dokumento tipas:</div>
                    <div className="col-4 font-weight-bold">Pateikimo data:</div>
                </div>
                <div className="row my-2">
                    <div className="col-4">

                    </div>
                    <div className="col-4"></div>
                    <div className="col-4"></div>
                </div>
                <div className="row my-2">
                    <div className="col-12 font-weight-bold">Aprašymas: </div>
                </div>
                <div className="row my-2">
                    <div className="col-12"></div>
                </div>
                <div className="row my-2">
                    <div className="col-12 font-weight-bold">Pridėtos bylos: </div>
                </div>
            </div>
        )
    }
}

export default PreviewProductComponent;