import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode () {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode () {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <>  
                {
                    !this.state.editMode
                    ? <div>
                        <span onDoubleClick={ this.activateEditMode.bind(this) }
                        >{this.props.status}</span>
                      </div>
                    : <div>
                        <input 
                            onBlur={ this.deactivateEditMode.bind(this) }
                            autoFocus={ true }
                            value={this.props.status} 
                        />
                      </div>
                }
                
                
            </>
        )
    }
}

export default ProfileStatus;