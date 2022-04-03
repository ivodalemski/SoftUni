function followerS(input) {
    let followers = {};
    while (input[0] != "Log out") {
        let tokens = input.shift().split(": ");
        let command = tokens[0];
        if (command == "New follower") {
            let name = tokens[1];
            if (!followers.hasOwnProperty(name)) {
                followers[name] = {
                    likes: 0,
                    comments: 0
                }
            }
        } else if (command == "Like") {
            let name = tokens[1];
            let count = Number(tokens[2]);
            if (!followers.hasOwnProperty(name)) {
                followers[name] = {
                    likes: count,
                    comments: 0
                }
            } else {
                followers[name].likes += count;
            }
 
        } else if (command == "Comment") {
            let name = tokens[1];
            if (!followers.hasOwnProperty(name)) {
                followers[name] = {
                    likes: 0,
                    comments: 1
                }
            } else {
                followers[name].comments += 1;
            }
        } else {
            let name = tokens[1];
            if (followers.hasOwnProperty(name)) {
                delete followers[name];
            } else {
                console.log(`${name} doesn't exist.`)
            }
        }
 
    }
    let arr = Object.keys(followers);
    let count = 0;
    for (let el of arr) {
        count++;
    }
    console.log(`${count} followers`);
    let res = Object.entries(followers)
    for (let el in res) {
        let total = res[el][1].comments + res[el][1].likes
        console.log(`${res[el][0]}: ${total}`);
    }
 
}