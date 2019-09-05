import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/App.css";

//CONNECT REDUX WITH REACT APP WHICH DISPATCHING STATE AND ACTION TO PROPS
import { connect } from 'react-redux';

//IMPORT ACTION
import { addEntry, deleteEntry  } from '../actions/entryAction';

//IMPORTING REACT ROUTER DEPENDENCY
// import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt } from 'react-router-dom';

// import Route from 'react-router-dom/Route';

import { FormPanel } from '../components/formPanel';
import { ListPanel } from '../components/listPanel';

class AppContainer extends React.Component {

    constructor() {
        super();
    
    }

    render() { 
        return (
            <div className="container"> 
                <div className="row containerele" >
                    <FormPanel addEntry={this.props.add_entry} 
                   />
                    <ListPanel entries={this.props.entry.entries}
                     deleteEntry={this.props.delete_entry}
                     />
                </div>
            </div>
        );
    }
}

//GETS STATES PASSED FROM PROVIDER
//STATE PASSED FROM REDUX AS WE WRAP THIS COMP AROUNF PROVIDER
const mapStateToProps = (state) => {

    return {
        entry: state.entry
    }
}
// //THIS POPULATED IN THE COMPONENTS PROPS

// //DISPATCH ACTION
const mapDispatchToProps = (dispatch) => {
    return {

        add_entry: (payload) => {
            dispatch(addEntry(payload));
        },
        delete_entry: (emailid) => {
            dispatch(deleteEntry(emailid));
        }

    };
};


export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

//CONNECT BOTH PROPS AND DISPATCH ACTION