/*
Staat in txt bestand omdat google geen .js toelaat

*/



let introdone = false

data = {
    "games": {
        "round-1": {
            "game-1": {
                "fteam": 1,
                "steam": 2,
                "result": {
                    "1": 2,
                    "2": 3
                }
            },
            "game-2": {
                "fteam": 3,
                "steam": 4,
                "result": {
                    "3": 2,
                    "4": 0
                }
            },
            "game-3": {
                "fteam": 5,
                "steam": 6,
                "result": -1
            },
            "game-4": {
                "fteam": 7,
                "steam": 8,
                "result": -1
            },
            "game-5": {
                "fteam": 9,
                "steam": 10,
                "result": -1
            },
            "game-6": {
                "fteam": 11,
                "steam": 12,
                "result": -1
            },
            "game-7": {
                "fteam": 13,
                "steam": 14,
                "result": -1
            },
            "game-8": {
                "fteam": 15,
                "steam": 16,
                "result": -1
            },
            "game-9": {
                "fteam": 17,
                "steam": 18,
                "result": -1
            },
            "game-10": {
                "fteam": 19,
                "steam": 20,
                "result": -1
            },
            "game-11": {
                "fteam": 21,
                "steam": 22,
                "result": -1
            },
            "game-12": {
                "fteam": 23,
                "steam": 24,
                "result": -1
            },
            "game-13": {
                "fteam": 25,
                "steam": 26,
                "result": -1
            },
            "game-14": {
                "fteam": 27,
                "steam": 28,
                "result": -1
            },
            "game-15": {
                "fteam": 29,
                "steam": 30,
                "result": -1
            },
            "game-16": {
                "fteam": 31,
                "steam": 32,
                "result": -1
            }
        },
        "round-2": {
            "game-1": {
                "fteam": 2,
                "steam": 3,
                "result": -1
            },
            "game-2": {
                "fteam": -1,
                "steam": -1,
                "result": -1
            },
            "game-3": {
                "fteam": -1,
                "steam": -1,
                "result": -1
            },
            "game-4": {
                "fteam": -1,
                "steam": -1,
                "result": -1
            },
            "game-5": {
                "fteam": -1,
                "steam": -1,
                "result": -1
            },
            "game-6": {
                "fteam": -1,
                "steam": -1,
                "result": -1
            },
            "game-7": {
                "fteam": -1,
                "steam": -1,
                "result": -1
            },
            "game-8": {
                "fteam": -1,
                "steam": -1,
                "result": -1
            }
        },
        "round-3": {
            "game-1": {
                "fteam": -1,
                "steam": -1,
                "result": -1
            },
            "game-2": {
                "fteam": -1,
                "steam": -1,
                "result": -1
            },
            "game-3": {
                "fteam": -1,
                "steam": -1,
                "result": -1
            },
            "game-4": {
                "fteam": -1,
                "steam": -1,
                "result": -1
            }
        },
        "round-4": {
            "game-1": {
                "fteam": -1,
                "steam": -1,
                "result": -1
            },
            "game-2": {
                "fteam": -1,
                "steam": -1,
                "result": -1
            }
        },
        "round-5": {
            "game-1": {
                "fteam": -1,
                "steam": -1,
                "result":-1,
                "winner": -1
            },
            "game-2":{
                "fteam": -1,
                "steam": -1,
                "result":-1,
                "winner": -1
            }
        }
    }
}
teams = {
    "1":{"name":"De coole mannen"},
    "2":{"name":"De sprinters"},
    "3":{"name":"De Makkers"},
    "4":{"name":"Microsoft Teams"},
    "5":{"name":"De speed flippers"},
    "6":{"name":"Neven"},
    "7":{"name":"Martijn-Fanboys"},
    "8":{"name":"Lisanne-Fanboys"},
    "9":{"name":"Flipper Mannen"},
    "10":{"name":"Vliegende auto's"},
    "11":{"name":"Marlicia"},
    "12":{"name":"Hutsy"},
    "13":{"name":"John Wick"},
    "14":{"name":"JelleTryhards"},
    "15":{"name":"4 Wheels"},
    "16":{"name":"Runners"},
    "17":{"name":"Marko Fans"},
    "18":{"name":"Snelle jongens"},
    "19":{"name":"Raket vrouwen"},
    "20":{"name":"Musties"},
    "21":{"name":"Triple team"},
    "22":{"name":"Troostprijzen"},
    "23":{"name":"Ez Games"},
    "24":{"name":"Year of summer"},
    "25":{"name":"Fijn weekend"},
    "26":{"name":"Teamworks"},
    "27":{"name":"Boomers"},
    "28":{"name":"Bijna weekend"},
    "29":{"name":"Generalen"},
    "30":{"name":"Octane gang"},
    "31":{"name":"Flip resetters"},
    "32":{"name":"Kickoff"}
}




function getTeamName(teamnum){
    
    return teams[teamnum.toString()].name
}


function getScore(teamnum, roundnum, gamenum){
    let score = data.games["round-" + roundnum]["game-" + gamenum].result[teamnum.toString()]
    //Als de score undefined is dat geef ik een empty string terug zodat de score leeg blijft
    
    if (score == null){
        return ""
    }

    return score

}



function getFormatted(teamnum, roundnum, gamenum){
    return `${getTeamName(teamnum)} <span class="score">${getScore(teamnum,roundnum,gamenum)}</span>`
    
}




//upd = window.setInterval(updateBracket, 2000)

async function updateBracket(){
        fetch("http://localhost:3000/data").then(data=>data.json()).then(data1=> data=data1 ).then(data => {
            console.log(data)
            var round_count = 0
            for (var roundname in data.games){
                round_count ++
                if (!data.games.hasOwnProperty(roundname)){continue;}
                let round = data.games[roundname]
                game_count = 0
            
                for(var gamename in round){
                    game = round[gamename]
                    game_count++
                    
                    //Zet de data in elk vakje, vakjes hebben een id van : r{rondenummer}g{gamenummer}t{team 1 of 2}


                    document.getElementById(`r${round_count.toString()}g${game_count.toString()}t1`).innerHTML = (game.fteam == -1 ? "" : getFormatted(game.fteam, round_count, game_count))
                    document.getElementById(`r${round_count.toString()}g${game_count.toString()}t2`).innerHTML = (game.steam == -1 ? "" : getFormatted(game.steam, round_count, game_count))
                }
            }
            console.log("updating winners with")
            console.log(data)
            updateWinners(data)
        })
}

async function tempupdate(){
    var round_count = 0
            for (var roundname in data.games){
                round_count ++
                if (!data.games.hasOwnProperty(roundname)){continue;}
                let round = data.games[roundname]
                game_count = 0
            
                for(var gamename in round){
                    game = round[gamename]
                    game_count++
                    
                    //Zet de data in elk vakje, vakjes hebben een id van : r{rondenummer}g{gamenummer}t{team 1 of 2}


                    document.getElementById(`r${round_count.toString()}g${game_count.toString()}t1`).innerHTML = (game.fteam == -1 ? "" : getFormatted(game.fteam, round_count, game_count))
                    document.getElementById(`r${round_count.toString()}g${game_count.toString()}t2`).innerHTML = (game.steam == -1 ? "" : getFormatted(game.steam, round_count, game_count))
                }
            }
            console.log("updating winners with")
            console.log(data)
            updateWinners(data)
        
}

function updateWinners(data){
    console.log(data)
    for (var gameindex in data.games["round-5"]){
        let game = data.games["round-5"][gameindex]

        console.log(game.winner)
        if(game.winner > 0){
            let winnernum = game.winner
            let winner_in_game_index = data.games["round-5"][gameindex].fteam == game.winner ? 1: 2


            console.log(`r5g${gameindex.slice(5)}t${winner_in_game_index}`)
            document.getElementById(`r5g${gameindex.slice(5)}t${winner_in_game_index}`).classList.add("winner-style")
        }
    }
    if (!introdone){
        introAnimation()

    }
}

async function introAnimation(){
    let all_items = Array.from(document.getElementsByClassName("team"))
    let count = 0
    while (all_items.length != 0){
        count++
        const index = Math.floor(Math.random() * all_items.length)
        const item = all_items[index];
        console.log(item)
        all_items.splice(index, 1)
        setTimeout(() => {
            item.classList.add("fade-in-animation")
            console.log("Now")
            
        }, count*30);
    }
}


setTimeout(() => {
    
tempupdate()
}, 1800);




