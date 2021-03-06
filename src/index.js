const numOneToThirteen = (num) => {
    const numbers = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
        ten: 10,
        eleven: 11,
        twelve: 12,
        thirteen: 13,
    };

    for (let i in numbers) {
        if (num === numbers[i]) {
            return i;
        }
    }
};

const fourteenToNinetyNine = (num) => {
    const numbers = {
        twenty: 2,
        thirty: 3,
        forty: 4,
        fifty: 5,
        sixty: 6,
        seventy: 7,
        eighty: 8,
        ninety: 9,
    };
    const arr = String(num).split("");
    if (num === 15) {
        return `fifteen`;
    } else if (num === 18) {
        return `eighteen`;
    } else if (num < 20) {
        return `${numOneToThirteen(Number(arr[1]))}teen`;
    } else if (num >= 20) {
        for (let i in numbers) {
            if (Number(arr[0]) === numbers[i] && Number(arr[1]) !== 0) {
                return `${i} ${numOneToThirteen(Number(arr[1]))}`;
            } else if (Number(arr[0]) === numbers[i] && Number(arr[1]) === 0) {
                return i;
            }
        }
    }
    return arr;
};

const hundreds = (num) => {
    const arr = String(num)
            .split("")
            .map((x) => Number(x)),
        twoLastDig = Number(arr.slice(-2).join(""));
    console.log(arr);
    if (arr[1] === 0 && arr[2] === 0) {
        return `${numOneToThirteen(arr[0])} hundred`;
    } else if (twoLastDig <= 13 && twoLastDig !== 0) {
        console.log("this");
        return `${numOneToThirteen(arr[0])} hundred ${numOneToThirteen(
            twoLastDig
        )}`;
    } else
        return `${numOneToThirteen(arr[0])} hundred ${fourteenToNinetyNine(
            twoLastDig
        )}`;
};

module.exports = function toReadable(number) {
    if (number <= 13) {
        return numOneToThirteen(number);
    } else if (number <= 99) {
        return `${fourteenToNinetyNine(number)}`;
    } else if (number < 1000) {
        return hundreds(number);
    }
};
