function solution(survey, choices) {
    const getPoint = (num) => {
        if (num === 1 || num === 7) {
            return 3;
        } else if (num === 2 || num === 6) {
            return 2;
        } else if (num === 3 || num === 5) {
            return 1;
        }
        return 0;
    }
    
    const ref = {
        "R": 0, "T": 0,
        "C": 0, "F": 0,
        "J": 0, "M": 0,
        "A": 0, "N": 0,
    }
    
    let answer = '';
    for (let i = 0; i < survey.length; i++) {
        const [firstItem, secondItem] = survey[i].split("");
        const choice = choices[i];
        const point = getPoint(choice);
        if (choice < 4) {
            ref[firstItem] += point;
        } else if (choice > 4) {
            ref[secondItem] += point;
        }  
    }
    
    if (ref["R"] >= ref["T"]) answer += "R";
    else answer += "T";
    if (ref["C"] >= ref["F"]) answer += "C";
    else answer += "F";
    if (ref["J"] >= ref["M"]) answer += "J";
    else answer += "M";
    if (ref["A"] >= ref["N"]) answer += "A";
    else answer += "N";
    
    return answer;
}