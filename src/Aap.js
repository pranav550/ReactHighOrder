import React, { Component, Fragment } from 'react';
import CM from "./votingPoll";
class AAP extends Component {

    // state = {
    //     voteCount: 0,
    // }

    // voteHandler = () => {
    //     this.setState({
    //         voteCount: this.state.voteCount + 1
    //     })
    // }

    render() {
        return (
            <Fragment>
                <h1>AAP {this.props.voteFor} Candidate : {this.props.candidate}</h1>
                <h2 onMouseOver={this.props.hocVoteHandler}>Total Vote:{this.props.hocVoteCount}</h2>
            </Fragment>
        )
    }
}

export default CM(AAP, 5)