class Bracket {

    bracketArray: { [key: string] : string} = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }

    flag(bracketStr: string) : boolean {
        for (let symb of bracketStr) {
            if (this.bracketArray.keys.includes(symb)) {
                return true
            }
            else {
                return false
            }
    }
    return false
}
}