export default function getMemebers(json) {
    var blob = JSON.stringify(json);
    var myRe = /pokemon-species\/(\d+)\//g;
    var currMatch;
    var members = [];
    while ((currMatch = myRe.exec(blob)) !== null) {
        members.push(currMatch[1]);
    }
    return members.reverse();
}