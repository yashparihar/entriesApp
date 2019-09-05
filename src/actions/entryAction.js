export function addEntry(data) {
    let payload_detail = {};

    payload_detail[data.email] = data;

    return {
        type: "ADD_ENTRY",
        payload: payload_detail
    }
}


export function deleteEntry(emailid) {

    return {
        type: "DELETE_ENTRY",
        payload: emailid
    }
}
