const result = document.getElementById('result');
let approval = 'not approved';

const getApproval = (callback) => {
    setTimeout(() => {
        approval = 'Approved';
        callback();
    },500)
}

getApproval(() => {
    result.textContent = approval;
});
result.textContent = approval;