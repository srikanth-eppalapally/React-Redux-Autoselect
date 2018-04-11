import React from "react";
import List from './List';
export default class AutoSelect extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        }
        this.openMenu = this.openMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    closeMenu() {
        this.setState({
            menuOpen: false
        })
    }
    openMenu() {
        this.setState({
            menuOpen: true
        })
    }

    render() {
        const { onInputChange, users, onUserSelect } = this.props;
        const { menuOpen } = this.state;
        return (
            <div className="auto-select">
                <input type="text" className="form-control" onBlur={this.closeMenu} onFocus={this.openMenu} onChange={(e) => onInputChange(e)} onKeyDown={(e) => onUserSelect(e)} />
                <div className="auto-select-section">
                    {users && menuOpen && <List {...this.props}  {...this.state} />}
                </div>
            </div>
        );
    }
}
