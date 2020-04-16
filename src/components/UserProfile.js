import React from 'react';
import { connect } from 'react-redux';

class userProfile extends React.Component {
    render() {
        const user = this.props.user;
        if (!user) {
            return <div>Loading...</div>
        }
        return <div className="header">{user.name}</div>
    }; 
}

const mapStateToProps = (state, ownState) => {
    return {
        user: state.users.find(user => user.id === ownState.userId)
    };
};

export default connect(mapStateToProps, null)(userProfile);