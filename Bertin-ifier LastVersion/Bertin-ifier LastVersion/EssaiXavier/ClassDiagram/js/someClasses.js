/**
 * Created by lepallex on 19/01/15.
 */

data = {};

data.umlClasses = [];
data.umlLinks = [];

league = {
    key : "League",
    name : "League",
    color:"blue",
    taille: 1,
    attributes : [

    ],
    operations : [
        { name : "getTournamentStyle", returnType : "TournamentStyle" }
    ]
};

tournamentStyle = {
    key : "TournamentStyle",
    name : "TournamentStyle",
    priority : 5,
    difficulty : 1,
    color:"blue",
    taille: 2,
    attributes : [

    ],
    operations : [
        { name : "planRounds",
            parameters : [
                { name : "tournament", type : "Tournament" }
            ],
            returnType : "List"
        },
        { name : "legalNumPlayers",
            parameters : [
                { name : "n", type : "int" }
            ],
            returnType : "boolean"
        }
    ]
};

tournament = {
    key : "Tournament",
    name : "Tournament",
    priority : 9,
    difficulty : 3,
    color:"green",
    taille: 3,
    attributes : [
        { name : "name" , type : "-String", visibility: "private" },
        { name : "start" , type : "-String", visibility:"private"},
        { name : "end" , type : "+String", visibility:"public" }
    ],
    operations : [
        { name : "acceptPlayer", returnType : ""},
        { name : "removePlayers", returnType : ""},
        { name : "plan", returnType : ""}
    ]
};

player = {
    key : "Player",
    name : "Player",
    priority : 7,
    difficulty : 4,
    color:"red",
    taille: 4,
    attributes : [
        { name : "name" , type : "-String", visibility:"private" },
        { name : "email" , type : "+String", visibility:"public" }
    ],
    operations : [
        {
            name : "notify",
            parameters : [
                { name : "player", type : "Player" },
                { name : "message", type : "Message" }
            ],
            returnType : ""
        },
        {
            name : "getMaches",
            parameters : [
                { name : "tournament", type : "Tournament" }
            ],
            returnType : ""
        }
    ]
};

match = {
    key : "Match",
    name : "Match",
    priority : 7,
    difficulty : 7,
    color:"red",
    taille: 5,
    attributes : [
        { name : "start" , type : "-String", visibility:"private"},
        { name : "status" , type : "+String", visibility:"public"},
        { name : "score" , type : "-String", visibility:"private" }
    ],
    operations : [
        {
            name : "playMove",
            parameters : [
                { name : "player", type : "Player" },
                { name : "move", type : "Move" }
            ],
            returnType : ""
        },
        {
            name : "getMoves",
            returnType : "List"
        }
    ]
};

round = {
    key : "Round",
    name : "Round",
    priority : 7,
    difficulty : 9,
    color:"green",
    taille: 1,
    attributes : [
    ],
    operations : [
        { name : "plan", returnType : ""},
        { name : "getPreviousRound", returnType : "Round"},
        { name : "isPlanned", returnType : "boolean"},
        { name : "isCompleted", returnType : "boolean"}
    ]
};



addUmlClasses(league, tournamentStyle, tournament, player, match, round);

function addUmlClasses () {
    for (var i=0;i<arguments.length;i++) {
        arguments[i].category="umlClass";
        data.umlClasses.push(arguments[i]);
    }

}

function addAgregation (container, contained, leftLabel, rightLabel) {
    data.umlLinks.push({from:container.key, to:contained.key,left:leftLabel,right:rightLabel,category:"agregation"});
}

function addAssociation (leftElement, rightElement, leftLabel, rightLabel) {
    data.umlLinks.push({from:leftElement.key, to:rightElement.key,left:leftLabel,right:rightLabel,category:"association"});
}

addAssociation(league,tournamentStyle,"1","*");
addAgregation(tournament,league,"","");
addAgregation(player,tournament,"players *","tournaments *");
addAgregation(round,match,"1","matches *");
addAgregation(tournament,round,"{ordered}","*");
addAssociation(player,match,"","players *");

/*customer =
 {
 key : "Customer",
 name : "Customer",
 attributes : [
 { name : "FirstName" , type : "String" },
 { name : "LastName" , type : "String" },
 { name : "Address" , type : "String" },
 { name : "BirthDay" , type : "Long" }
 ],
 operations : [
 { name : "computeAge", returnType : "Int" },
 { name : "computeDistanceFrom",
 parameters : [
 { name : "from", type : "String" },
 { name : "or", type : "String" }
 ],
 returnType : "Int" }
 ]
 ,
 category : "umlClass"
};
*/