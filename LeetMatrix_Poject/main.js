document.addEventListener("DOMContentLoaded", function() {

    const searchButton = document.getElementById("search-btn");
    const usernameInput = document.getElementById('user-input');
    const statsContainer = document.querySelector(".stats-container");
    const easyProgressCircle = document.querySelector(".easy-progress")
    const mediumProgressCircle = document.querySelector(".medium-progress")
    const hardProgressCircle = document.querySelector(".hard-progress");

    const easyLabel = document.getElementById("easy-label");
    const mediumLabel = document.getElementById("medium-label");
    const hardLabel = document.getElementById("hard-label");

    const cardStatsContainer = document.querySelector(".stats-card")


 
    // return true or flase based on a regex
    function validateUsername(username) {
        if(username.trim() === ""){
            alert("Username should not be empty")
            return false;
        }

        const regex = /^[a-zA-Z0-9_]{3,16}$/;
        const isMatching = regex.test(username);
        if(!isMatching) {
            alert("Invalid username");
        }
        return isMatching;

    }

    async function fetchUserDetails(username){

        try{
            searchButton.textContent = "Searching...";
            searchButton.disabled = true;

            const poxyUrl = 'https://cors-anywhere.herokuapp.com/'

            const targetUrl = 'https://leetcode.com/graphql/';

            //concatinate url: https://cors-anywhere.herokuapp.com/https://leetcode.com/graphql/


            const myHeaders = new Headers();
            myHeaders.append("content-type", "application/json");
    
            const graphql = JSON.stringify({
                query: "\n    query userSessionProgress($username: String!) {\n  allQuestionsCount {\n    difficulty\n    count\n  }\n  matchedUser(username: $username) {\n    submitStats {\n      acSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n      totalSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n    }\n  }\n}\n    ",
                variables: { "username": `${username}` }
            })
    
            const requestOption = {
                method: "POST",
                headers: myHeaders,
                body: graphql,
                redirect: "follow"
            };
    
            const response = await fetch(poxyUrl+targetUrl, requestOption);
    
            if(!response.ok) {
                throw new Error("Unable to fetch the user details")
            }
            const Parseddata = await response.json();
            console.log("Loggin data", Parseddata);


            displayUserData(Parseddata);
        }
        catch(error){
            console.error("Error fetching data:", error);
            statsContainer.innerHTML = '<p>No data Found</p>';

        }
        finally{
            searchButton.textContent = "Search";
            searchButton.disabled = false;
            

        }


    }

    function updateProgress(solved,total, label, circle) {
        const progressDegree = (solved/total)*100;
        circle.style.setProperty("--progress-degree", `${progressDegree}%`);

        console.log("Updating Progress: Solved:", solved, "Total:", total); // Debugging


        label.textContent = `${solved}/${total}`
        
    }

    function displayUserData(Parseddata) {

        const totalQues = Parseddata.data.allQuestionsCount[0].count;
        const totalEasyQues = Parseddata.data.allQuestionsCount[1].count;
        const totalMediumQues = Parseddata.data.allQuestionsCount[2].count;
        const totalHardQues = Parseddata.data.allQuestionsCount[3].count;


        const solvedTotalQues = Parseddata.data.matchedUser.submitStats.acSubmissionNum[0].count;
        const solvedTotalEasyQues = Parseddata.data.matchedUser.submitStats.acSubmissionNum[1].count;
        const solvedTotalMediumQues = Parseddata.data.matchedUser.submitStats.acSubmissionNum[2].count;
        const solvedTotalHardQues = Parseddata.data.matchedUser.submitStats.acSubmissionNum[3].count;

        updateProgress(solvedTotalEasyQues,totalEasyQues,easyLabel,easyProgressCircle);

        updateProgress(solvedTotalMediumQues, totalMediumQues, mediumLabel, mediumProgressCircle);



        updateProgress(solvedTotalHardQues,totalHardQues,hardLabel,hardProgressCircle);




        const cardsData = [
            {label: "Overall Submissions", value:Parseddata.data.matchedUser.submitStats.totalSubmissionNum[0].submissions },
            {label: "Overall Easy Submissions", value:Parseddata.data.matchedUser.submitStats.totalSubmissionNum[1].submissions },
            {label: "Overall Medium Submissions", value:Parseddata.data.matchedUser.submitStats.totalSubmissionNum[2].submissions },
            {label: "Overall Hard Submissions", value:Parseddata.data.matchedUser.submitStats.totalSubmissionNum[3].submissions },
        ];

        console.log("card ka data: " , cardsData);

        cardStatsContainer.innerHTML = cardsData.map(
            data => 
                    `<div class="card">
                    <h4>${data.label}</h4>
                    <p>${data.value}</p>
                    </div>`
        ).join("")


        

    }

   


    searchButton.addEventListener('click', function() {
        const username = usernameInput.value;
        console.log("Loggin username :", username);
        if(validateUsername(username)){
            fetchUserDetails(username);

        }

    })
})