import React from "react";
import { connect } from "react-redux";
import AutoSelect from './AutoSelect'
export class MainComponent extends React.Component {

    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.onUserSelect = this.onUserSelect.bind(this);
    }

    onInputChange(e) {
        this.props.dispatch({
            type: 'SEARCH_USERS',
            query: e.target.value,
        });
    }
    onUserSelect(e) {
        const { selected, users } = this.props;
        let list =  document.getElementById('auto-select')
        if (e.keyCode === 38 && selected > 0) {
            this.props.dispatch({
                type: 'SELECT_USERS',
                selected: selected - 1,
            });
            list.scrollTop -= 50;
        } else if (e.keyCode === 40 && users && selected < users.length - 1) {
            this.props.dispatch({
                type: 'SELECT_USERS',
                selected: selected + 1,
            });
            list.scrollTop += 50;
        }

        if (users && selected < users.length - 1 && selected < users.length - 1 && e.keyCode === 13) {
            this.props.dispatch({
                type: 'SELECTED_USERS',
                selectedItem: users[selected],
            });
        }
       
    }
    // render
    render() {
        return (
            <div className="auto-select">
                <AutoSelect {...this.props}
                    onInputChange={this.onInputChange}
                    onUserSelect={this.onUserSelect}
                />
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        users: state.users.user,
        selected: state.users.selected
    };
}
export default connect(mapStateToProps)(MainComponent);