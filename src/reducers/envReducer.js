export default function changePage(state=[], action){
    switch(action.type){
        case 'PAGE_CHANGE':
            return [action.pledgeClass, action.marshal, action.pledges];
        default:
            return state;
    }
}