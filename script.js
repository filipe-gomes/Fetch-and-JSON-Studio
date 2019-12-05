window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
      let json = response.json();
      json.then(function(json){
        json = json.sort((a,b) => a.hoursInSpace - b.hoursInSpace);
        const container = document.getElementById("container");
        const footer = document.getElementById("footer")
        let astronauts = ""
        for (let i = 0; i < json.length; i++) {
            astronauts += 
            `
            <div class="astronaut">
                <div class="bio">
                    <h3>${json[i].firstName + " " + json[i].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${json[i].hoursInSpace}</li>
                        <li style="color:${json[i].active ? "green" : "black"}">Active: ${json[i].active}</li>
                        <li>Skills: ${json[i].skills}</li>
                    </ul>
                </div>
                <img class="avatar" src="${json[i].picture}">
            </div>
            `
        }
        container.innerHTML = astronauts
        footer.innerHTML = `
        <h3>Number of Astronauts: ${json.length}</h3>
        `
      })
    })
  })// TODO: add code here