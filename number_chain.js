class NumberChain{

    constructor(){
        this._numbers = []
    }
    addNumber(y,x){
        let number = [y,x]
        this._numbers.push(number)
    }
    clear(){
        this._numbers = []
    }
    delete(){
        this._numbers.pop()
    }
    get numbers(){
        return this._numbers
    }
}

