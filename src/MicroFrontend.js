
import React, { Component } from 'react'
import axios from 'axios'

class MicroFrontend extends Component {

    constructor() {
        super()
        this.state = {
            errorOnLoadMicroFrontend: null
        }
    }

    componentWillUnmount() {
        const { name } = this.props;
        window[`unmount${name}`](`${name}-container`);
    }

    componentDidMount() {
        const { name, host } = this.props;

        axios.get(`${host}/asset-manifest.json`)
            .then(({ data: { files } }) => {
                Object.keys(files).map((key) => {
                    if (key.includes(".js") && !key.includes(".map")) {
                        const scriptId = `micro-frontend-script-${name}-${key}`;
                        const script = document.createElement('script');

                        script.id = scriptId;
                        script.crossOrigin = '';
                        script.src = `${host}${files[key]}`;

                        let container = document.getElementById("Browse-container")
                        if (container.childElementCount === 0)
                            script.onload = this.renderMicroFrontend;

                        document.head.appendChild(script);
                    }
                    this.setState({ errorOnLoadMicroFrontend: undefined })
                    return null;
                })
            })
            .catch((err) => {
                this.setState({ errorOnLoadMicroFrontend: err })
            })
    }

    renderMicroFrontend = () => {
        const { name, window, history } = this.props;
        if (window.renderBrowse) {
            window.renderBrowse(`${name}-container`, history);
        }
    };

    render() {

        // let { errorOnLoadMicroFrontend } = this.state

        // if (errorOnLoadMicroFrontend == null) {
        //     return <h3>Carregando...</h3>
        // }

        // if (errorOnLoadMicroFrontend) {
        //     return <h3>Houve um erro ao tentar carregar o microfrontend... tente novamente</h3>
        // }

        return <main id={`${this.props.name}-container`} />;
        // return (<h3>{`${ this.props.name } -container`}</h3>)
    }
}

MicroFrontend.defaultProps = {
    document,
    window,
};

export default MicroFrontend