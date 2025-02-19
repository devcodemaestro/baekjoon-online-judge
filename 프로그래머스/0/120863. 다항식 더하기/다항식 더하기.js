function solution(polynomial) {
    let arr = polynomial.split(" + ");
    let xCount = 0;
    let count = 0;

    for (let term of arr) {
        if (term.includes("x")) {
            let num = term.split("x")[0] || "1"; // x만 있는 경우 기본값 "1"
            xCount += Number(num);
        } else {
            count += Number(term);
        }
    }

    let xPart = xCount > 1 ? `${xCount}x` : (xCount === 1 ? "x" : "");
    let countPart = count ? `${count}` : "";

    return xPart && countPart ? `${xPart} + ${countPart}` : xPart || countPart;
}