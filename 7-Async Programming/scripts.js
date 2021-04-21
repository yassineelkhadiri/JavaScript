const result = document.getElementById('result');
let approval = 'not approved';


/*const getApproval = (callback) => {
    setTimeout(() => {
        approval = 'Approved';
        callback();
    },500)
}

getApproval(() => {
    result.textContent = approval;
});*/

const getApproval = (callback) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('Approved!');
        },500);
    });
}

async function setApprovalText() {
    const approvalPromise = getApproval();
    result.textContent = await approvalPromise;
 }

setApprovalText();

result.textContent = approval;