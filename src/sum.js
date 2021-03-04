export const sum = (a,b) => {
    if(!a && !b) return 0;
    if(!a) return b;
    if(!b) return a;
    return a+b;
}
