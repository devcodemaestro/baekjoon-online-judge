function solution(n, k) {
    let lamb = n * 12000
    let discount = Math.floor(n/10)
    let drink = (k - discount) * 2000
    return lamb + drink;
}