
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

        console.log({ name, host })

        axios.get(`${host}/asset-manifest.json`)
            .then(({ data: { files } }) => {
                Object.keys(files).map((key) => {
                    if (key.includes(".js") && !key.includes(".map")) {
                        const scriptId = `micro-frontend-script-${name}-${key}`;
                        const script = document.createElement('script');

                        script.id = scriptId;
                        script.crossOrigin = '';
                        script.src = `${host}${files[key]}`;

                        let container = document.getElementById(`${name}-container`)
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
        const { name, history } = this.props;

        console.log({ name, history })

        if (window[`render${name}`]) {
            window[`render${name}`](`${name}-container`, history);
        }
    };

    render() {
        return <main id={`${this.props.name}-container`} />;
    }
}

export default MicroFrontend