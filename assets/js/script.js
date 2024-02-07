
const API_KEY ="Dp06FlrK2q_1PUsIsONOevdCvpI"
const API_URL ="https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById ("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus (e));

document.getElementById("submit").addEventListener("click", e => postForm(e));

//function to make the request
async function getStatus(e) {
    const queryString = `${API_URL}?api_key=${API_KEY}`;
    const response = await fetch(queryString);
    const data = await response.json();
    if (response.ok) {
        displayStatus(data);

    } else {
        throw new Error(data.error)
    }
}

//function to display the data
function displayStatus(data) {

    let heading = "API Key Status";
    let results = `<div>key is valid until </div>`;
    results += `<div class="key-status">${data.expiry}</div>`;

    document.getElementById("resultsModalTitle").innerText = heading;
    document.getElementById("results-content").innerHTML = results;
    resultsModal.show();

}

async function postForm(e) {

    const form = new FormData(document.getElementById("checksform"));

    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Authorization": API_KEY,
        },
        body: form,
    });

}