import React from "react";


export default class List extends React.Component {
    constructor(props) {
        super(props);

    }

    renderUsersList() {
        const { users, selected } = this.props;
        return (
            users.map((user, i) => {
                return (
                    <li key={i} className={selected === i ? 'active' : ''}>
                        <img src={user.avatar_url} />
                        {user.login}
                    </li>
                )
            })
        )
    }

    render() {

        return (
            <ul id="auto-select" className="auto-select-list">
                {this.renderUsersList()}
            </ul>
        )
    }

}