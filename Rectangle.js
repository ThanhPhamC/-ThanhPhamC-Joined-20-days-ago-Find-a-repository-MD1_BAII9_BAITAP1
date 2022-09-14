class Rectangle {
 dai;
 rong;

    constructor(dai, rong) {
        this.dai = dai;
        this.rong = rong;
    }
    setDai(dai){
        this.dai=dai
    }
    getDai(){
        return this.dai
    }
    setRong(rong){
        this.rong=rong
    }
    getRong(){
        return this.rong
    }
    getDientich(){
        return this.dai*this.rong
    }
    getChuvi(){
        return 2*(this.dai+this.rong)
    }

}