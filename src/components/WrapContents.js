import React from "react";

const WrapContents = (WrappedComponent, options = {}) => {
    const HOC = class extends React.Component {
        render() {
            return (
                <WrappedComponent />
            );
        }
    };

    return (
        HOC
    );
};

export default WrapContents;