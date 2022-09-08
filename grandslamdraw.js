console.log("______________________________________________javascript____________________________________________________")
tennis=[
    {player:'sania mirza',        id:121,  rank:1,   "no of matches":650},
    {player:'serena williams',    id:131,  rank:2,   "no of matches":766},
    {player:'ankita raina',       id:141,  rank:3,   "no of matches":760},
    {player:'nirupamasanjeev',    id:151,  rank:4,   "no of matches":560},
    {player:'martina navratilova',id:161,  rank:5,   "no of matches":500},
    {player:'maria sharapova',    id:171,  rank:6,   "no of matches":450},
    {player:'naomi osaka',        id:181,  rank:7,   "no of matches":300},
    {player:'chris evert',        id:191,  rank:8,   "no of matches":550}
    ]
    round1=[]
    for(i=0;i<tennis.length/2;i++){
    match={}
    match['player']=tennis[i].player,
    match['opponentplayer']=tennis[tennis.length-1-i].player
    round1.push(match)
    }
  // console.log(round1)
   slot1=[]
   slot2=[]
   for(i in round1){
       if(i%2==0){
        slot1.push(round1[i])
       }
       else{
        slot2.push(round1[i])
       }
   }  
   slot2.reverse()
   rightrivalry=[]
   for(i of slot2){ 
       slot1.push(i)
    }
   console.log(slot1)
   
   function rank(playername){
    rankof=0
    tennis.forEach(element=>{
       if(element.player==playername){
          rankof=element.rank
       }
     })
     return rankof
   }
   function percentage(player,opponentplayer){
    a=rank(player)
    b=rank(opponentplayer)
    c=Math.round(100/(Math.abs(a-b)+1))
    b=c
    a=100-b
   chance_per=[]
   for(j=1;j<=100;j++){
    if(j<=a){
        chance_per.push(player)
    }
    else{
        chance_per.push(opponentplayer)
    }
   }
   chancetowin=Math.floor(Math.random()*100)
   win=chance_per[chancetowin]
   return win
   }
   round = 1
matchOrder = []
function winner() {
    winners=[]
    winnerList=[]
    for(i of slot1){
        winners.push(percentage(i.player,i.opponentplayer))
    }
    for (i=0;i<slot1.length;i++) {
        schedule = {}
        schedule["Round"] = round
        schedule["player"] = slot1[i].player
        schedule["opponentplayer"] =slot1[i].opponentplayer
        schedule["Winner"]=winners[i]
        matchOrder.push( schedule)
    }
    for(i=0;i<winners.length;i=i+2){
        schedule={}
        schedule["player"]=winners[i]
        schedule["opponentplayer"]=winners[i+1]
        winnerList.push(schedule)
    }
    slot1=winnerList
    if(slot1.length!=1){
        round++
        winner()
    }
    else{
       for(i of slot1){
        schedule={}
        schedule["Round"]="Final"
        schedule["player"]=i.player
        schedule["opponentplayer"]=i.opponentplayer
        schedule["Winner"]=percentage(i.player,i.opponentplayer)
        matchOrder.push(schedule)
       }
    }
}
winner()
console.table(matchOrder)
interface Tournament {
    player: string,
    id: number;
    rank: number,
    noOfMathches: number
}
interface Match {
    player: string,
    opponentplayer: string
}
interface Schedule {
    round: string | number,
    player: string,
    opponentplayer: string,
    winner: string
}
const tennis: Tournament[] = [
    { player: "sania mirza", id: 121, rank: 1, noOfMathches: 650 },
    { player: "serena williams", id: 131, rank: 2, noOfMathches: 766 },
    { player: "ankita raina", id: 141, rank: 3, noOfMathches: 760 },
    { player: "nirupamasanjeev", id: 151, rank: 4, noOfMathches: 560 },
    { player: "martina navratilova", id: 161, rank: 5, noOfMathches: 500 },
    { player: "maria sharapova", id: 171, rank: 6, noOfMathches: 450 },
    { player: "naomi osaka", id: 181, rank: 7, noOfMathches: 300 },
    { player: "chris evert", id: 191, rank: 8, noOfMathches: 550 }
]
let round1 = []
for (let i = 0; i < tennis.length / 2; i++) {
    let match: any = {}
    match["player"] = tennis[i].player,
        match["opponentplayer"] = tennis[tennis.length - 1 - i].player
    round1.push(match)
}
// console.log(round1)
let slot1: any = []
let slot2 = []
for (let i = 0; i < round1.length; i++) {
    if (i % 2 == 0) {
        slot1.push(round1[i])
    }
    else {
        slot2.push(round1[i])
    }
}
slot2.reverse()
let rightrivalry = []
for (let i of slot2) {
    slot1.push(i)
}
console.log(slot1)

function rank(playername: string) {
    let rankof = 0
    tennis.forEach(element => {
        if (element.player == playername) {
            rankof = element.rank
        }
    })
    return rankof
}
function percentage(player: string, opponentplayer: string) {
    let a = rank(player)
    let b = rank(opponentplayer)
    let c = Math.round(100 / (Math.abs(a - b) + 1))
    b = c
    a = 100 - b
    let chance_per = []
    for (let j = 1; j <= 100; j++) {
        if (j <= a) {
            chance_per.push(player)
        }
        else {
            chance_per.push(opponentplayer)
        }
    }
    let chancetowin = Math.floor(Math.random() * 100)
    let win = chance_per[chancetowin]
    return win
}
let round = 1
let matchOrder: Schedule[] = []
function winner() {
    let winners = []
    let winnerList = []
    for (let i of slot1) {
        winners.push(percentage(i.player, i.opponentplayer))
    }
    for (let i = 0; i < slot1.length; i++) {
        let schedule: Schedule = { round: "", player: "", opponentplayer: "", winner: "" }
        schedule["round"] = round
        schedule["player"] = slot1[i].player
        schedule["opponentplayer"] = slot1[i].opponentplayer
        schedule["winner"] = winners[i]
        matchOrder.push(schedule)
    }
    for (let i = 0; i < winners.length; i = i + 2) {
        let schedule: Match = { player: "", opponentplayer: "" }
        schedule["player"] = winners[i]
        schedule["opponentplayer"] = winners[i + 1]
        winnerList.push(schedule)
    }
    slot1 = winnerList
    if (slot1.length != 1) {
        round++
        winner()
    }
    else {
        for (let i of slot1) {
            let schedule: Schedule = { round: "", player: "", opponentplayer: "", winner: "" }
            schedule["round"] = "Final"
            schedule["player"] = i.player
            schedule["opponentplayer"] = i.opponentplayer
            schedule["winner"] = percentage(i.player, i.opponentplayer)
            matchOrder.push(schedule)
        }
    }
}
winner()
console.log(matchOrder)