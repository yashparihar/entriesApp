const entryReducer = (state = {

    entries: { "aa@gmail.com": { name: "Akash", phno: "9111111111", email: "aa@gmail.com" , hobbies:["Cricket"] }  }

}, action) => {

    switch (action.type) {

        case "ADD_ENTRY":
          
            state = {
                ...state,
                entries: Object.assign({}, state.entries, action.payload)

            }
            break;

        case "DELETE_ENTRY":
       

            state = {
                ...state,
                entries: Object.keys(state.entries).reduce((result, key) => {
                    if (key !== action.payload ) {
                        result[key] = state.entries[key];
                    }
                    return result;
                }, {})

            }
            break;

    }

    return state;
};

export default entryReducer;