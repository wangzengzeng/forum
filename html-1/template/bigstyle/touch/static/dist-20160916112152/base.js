function go(n) {
    window.location = n
}
function has_next_page(n, t, i, o) {
    if (i > o) return ! 1;
    var a = Math.ceil(t / i);
    return a > n
}