// Install and enable this extension:
// https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf

token = "AAIa3ql7nf6Tks14myUgjnSEcJs4niyVIVs9wwLqqL_nrsFq"
async function getData(userName) {
    console.log("Supposed to work")
    const URL = 'https://dmoj.ca/api/v2/user/' + userName;
    return fetch(URL, {
        'Access-Control-Allow-Origin': '*',
        method: "GET",
        Authorization: "Bearer " + token
    })
        .then(res => res.json())
        .catch(err => alert(err))
}
function fetchUser() {
    getData(document.querySelector(".userInput").value).then(function(curUserData) {
        curUserData = curUserData.data.object
        console.log(curUserData)
        curEl = document.createElement("div")
        curEl.className = "currentUser"
        curEl.innerHTML = `
            <div class="user-username">` + curUserData.username +`</div>
            <div class="user-rating">Rating: ` + curUserData.rating +`</div>
            <div class="user-problems">Problems Solved: ` + curUserData.problem_count +`</div>
            <div class="user-points">Points: ` + Math.round(curUserData.performance_points) +`</div>
            <div class="user-raw-points">Raw Points: ` + Math.round(curUserData.points) +`</div>
        `
        // Rating color
        if (curUserData.rating < 1000) {
            curEl.querySelector(".user-username").style.color = "lightgray";
        } else if (curUserData.rating < 1300) {
            curEl.querySelector(".user-username").style.color = "lightgreen";
        } else if (curUserData.rating < 1600) {
            curEl.querySelector(".user-username").style.color = "blue";
        } else if (curUserData.rating < 1900) {
            curEl.querySelector(".user-username").style.color = "purple";
        } else if (curUserData.rating < 2400) {
            curEl.querySelector(".user-username").style.color = "yellow";
        } else {
            curEl.querySelector(".user-username").style.color = "red";
        } 
        
        document.querySelector(".currentUsers").append(curEl)
        document.querySelector(".userInput").value = ""
        document.querySelector(".userInput").focus()
    })
    
}