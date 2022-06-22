// code your solution here
let saturdayFun = (activity = 'roller-skate') => {
    return `This Saturday, I want to ${activity}!`;
}

let mondayWork = (activity = 'go to the office') => {
    return `This Monday, I will ${activity}.`
}

let wrapAdjective = (activity = '*') => {
    return (wad = 'special') => {
        return `You are ${activity}${wad}${activity}!`
    }
}