const players = [];

const tiers = [
    "HT1","LT1",
    "HT2","LT2",
    "HT3","LT3",
    "HT4","LT4",
    "HT5","LT5"
];

for(let i=1;i<=5000;i++){

    players.push({
        rank:i,
        name:"Player"+i,
        rating:5000-i,
        tier:tiers[Math.floor(Math.random()*tiers.length)]
    });

}

function render(list){

    const leaderboard =
    document.getElementById("leaderboard");

    leaderboard.innerHTML="";

    list.forEach(player=>{

        leaderboard.innerHTML += `
        <div class="player">
            <div class="rank">#${player.rank}</div>
            <div class="name">${player.name}</div>
            <div class="tier">${player.tier}</div>
        </div>
        `;

    });

}

render(players.slice(0,100));

document
.getElementById("search")
.addEventListener("input", e=>{

    const value =
    e.target.value.toLowerCase();

    if(value===""){
        render(players.slice(0,100));
        return;
    }

    const results =
    players.filter(player =>
        player.name
        .toLowerCase()
        .includes(value)
    );

    render(results);

});
