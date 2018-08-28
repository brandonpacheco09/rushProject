export function envAction(pledgeClass, marshal, pledges = []){
    return {type: 'PAGE_CHANGE', pledgeClass, marshal, pledges}
}