export default function changePage(state=[], action){
    switch(action.type){
        case 'PAGE_CHANGE':
            return {currentPage: action.page};
        default:
            return state;
    }
}