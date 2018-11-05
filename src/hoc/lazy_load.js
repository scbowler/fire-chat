import React, { Component, Fragment } from 'react';
import Loading from '../components/general/loading';

export default (options) => {
    return class extends Component {
        constructor(props) {
            super(props);

            this.unMounting = false;
            this.defaultLoading = <Loading container/>;

            const { loading } = options;

            if (typeof loading === 'object' && loading.hasOwnProperty('props')) {
                this.defaultLoading = loading;
            }

            this.state = {
                LazyComponent: null,
                loading: this.defaultLoading
            }
        }

        async componentDidMount() {
            const Module = await options.load();

            if (!this.unMounting) {
                this.setState({
                    LazyComponent: Module.default
                });
            }
        }

        componentWillUnmount() {
            this.unMounting = true;
        }

        render() {
            const { LazyComponent, loading } = this.state;

            return (
                <Fragment>
                    {LazyComponent
                        ? <LazyComponent {...this.props} />
                        : loading
                    }
                </Fragment>
            );
        }
    }
}
