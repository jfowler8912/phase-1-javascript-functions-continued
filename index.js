// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective (param1 = '*') {
    return function innerFunction(parameter = "special"){
        return `You are ${param1}${parameter}${param1}!`
    }
}

// const egregiouslyNestedArray = [
//     "How",
//     ["deep", ["can", ["we", ["go", ["?"], "Pretty"], "dang"], "deep,"], "it"],
//     "seems.",
//   ];