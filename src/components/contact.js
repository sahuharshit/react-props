import React from 'react';

class ContactList extends React.Component{
    render(){
        return(
            <div>
                {this.props.name} the roll no :::::: {this.props.roll}
            </div>
        )
    }
}
export default ContactList;