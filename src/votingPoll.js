import React, { Component, Fragment } from 'react';

const CM = (Party, vote) => {

    class NewCM extends Component {

        state = {
            voteCount: 0,
        }

        voteHandler = () => {
            this.setState({
                voteCount: this.state.voteCount + vote
            })
        }
        render() {
            return (
                <Party voteFor="CM"
                    hocVoteCount={this.state.voteCount}
                    hocVoteHandler={this.voteHandler}
                    {...this.props} />
            )
        }
    }

    return NewCM;

}

export default CM