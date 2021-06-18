/*
Staat in txt bestand omdat google geen .js toelaat

*/



let introdone = false

data = {
    "games":{
        "round-1":{
            "game-1":{
                "fteam": 1,
                "steam": 2,
                "result": -1
            },
            "game-2":{
                "fteam": 3,
                "steam": 4,
                "result": -1
            },
            "game-3":{
                "fteam": 5,
                "steam": 6,
                "result": -1
            },
            "game-4":{
                "fteam": 7,
                "steam": 8,
                "result": -1
            },
            "game-5":{
                "fteam": 9,
                "steam": 10,
                "result": -1
            },
            "game-6":{
                "fteam": 11,
                "steam": 12,
                "result": -1
            },
            "game-7":{
                "fteam": 13,
                "steam": 14,
                "result": -1
            },
            "game-8":{
                "fteam": 15,
                "steam": 16,
                "result": -1
            },
            "game-9":{
                "fteam": 17,
                "steam": 18,
                "result": -1
            },
            "game-10":{
                "fteam": 19,
                "steam": 20,
                "result": -1
            },
            "game-11":{
                "fteam": 21,
                "steam": 22,
                "result": -1
            },
            "game-12":{
                "fteam": 23,
                "steam": 24,
                "result": -1
            },
            "game-13":{
                "fteam": 25,
                "steam": 26,
                "result": -1
            },
            "game-14":{
                "fteam": 27,
                "steam": 28,
                "result": -1
            },
            "game-15":{
                "fteam": 29,
                "steam": 30,
                "result": -1
            },
            "game-16":{
                "fteam": 31,
                "steam": 32,
                "result": -1
            }

        },
        "round-2":{
            "game-1":{
                "fteam":-1,
                "steam":-1,
                "result": -1
            },
            "game-2":{
                "fteam":-1,
                "steam":-1,
                "result": -1
            },
            "game-3":{
                "fteam":-1,
                "steam":-1,
                "result": -1
            },
            "game-4":{
                "fteam":-1,
                "steam":-1,
                "result": -1
            },
            "game-5":{
                "fteam":-1,
                "steam":-1,
                "result": -1
            },
            "game-6":{
                "fteam":-1,
                "steam":-1,
                "result": -1
            },
            "game-7":{
                "fteam":-1,
                "steam":-1,
                "result": -1
            },
            "game-8":{
                "fteam":-1,
                "steam":-1,
                "result": -1
            }
        },
        "round-3":{
            "game-1":{
                "fteam":-1,
                "steam":-1,
                "result": -1
            },
            "game-2":{
                "fteam":-1,
                "steam":-1,
                "result": -1
            },
            "game-3":{
                "fteam":-1,
                "steam":-1,
                "result": -1
            },
            "game-4":{
                "fteam":-1,
                "steam":-1,
                "result": -1
            }
        },
        "round-4":{
            "game-1":{
                "fteam":-1,
                "steam":-1,
                "result": -1
            },
            "game-2":{
                "fteam":-1,
                "steam":-1,
                "result": -1
            }
        },
        "round-5":{
            "game-1":{
                "fteam":-1,
                "steam": -1,
                "result":-1,
                "winner": -1
            },
            "game-2":{
                "fteam":-1,
                "steam":-1,
                "result":-1,
                "winner": -1
            }
        }
        
    }
}
teams = {
    "1": {"name":"Team Rocket"},
    "2": {"name":"S.B.V. Excelsior"},
    "3": {"name":"DeVluggeMennen"},
    "4": {"name":"Mr Bean Fanclub"},
    "5": {"name":"Default Boys"},
    "6": {"name":"FC Bal Op Je Muil"},
    "7": {"name":"Sexy guys"},
    "8": {"name":"AC ILAN"},
    "9": {"name":"Moonlight"},
    "10":{"name":"Aurora"},
    "11":{"name":"Team Cheezy"},
    "12":{"name":"Yoink"},
    "13":{"name":"Reünie"},
    "14":{"name":"Vraagtekenclan"},
    "15":{"name":"Wasbeer Inc"},
    "16":{"name":"IceWolves Esport"},
    "17":{"name":"Ik wil fietsen!"},
    "18":{"name":"Team TOTO"},
    "19":{"name":"European Peeps"},
    "20":{"name":"Happeteee"},
    "21":{"name":"Pog"},
    "22":{"name":"Above"},
    "23":{"name":"De bunanen"},
    "24":{"name":"Poestovenaar"},
    "25":{"name":"Sacret"},
    "26":{"name":"POLSKA GUROM"},
    "27":{"name":"Doe Team"},
    "28":{"name":"Snuiterkruid"},
    "29":{"name":"Kip eten"},
    "30":{"name":"AYS"},
    "31":{"name":"Ventjes"},
    "32":{"name":"Rexcellent"}
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




upd = window.setInterval(updateBracket, 2000)

async function updateBracket(){
    data = await fetch("https://litdrumrmees.site/data").then(data1=> data1.json())
    if(data== null){
        console.warn("Could not fetch data")
        return;
    }
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
    for (var gameindex in data.games["round-5"]){
        let game = data.games["round-5"][gameindex]

        if(game.winner > 0){
            let winnernum = game.winner
            let winner_in_game_index = data.games["round-5"][gameindex].fteam == game.winner ? 1: 2


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
        all_items.splice(index, 1)
        setTimeout(() => {
            item.classList.add("fade-in-animation")
            
        }, count*30);
    }
}


updateBracket()



