class NagyKepView{
    #kep;
    constructor(szuloElem, kep){
        this.#kep = kep;
        this.szuloElem = szuloElem;
        this.#htmlLetrehozasa();
        this.balGombElem = $("#balGomb");
        this.jobbGombElem = $("#jobbGomb");
        this.nagyIMGElem = $("#nagyIMG");
        this.balGombElem.on("click", ()=>{
            this.#esemenyLetrehozas("bal");
        })
        this.jobbGombElem.on("click", ()=>{
            this.#esemenyLetrehozas("jobb");
        })
    }

    nagyKepElemBeallit(kep){
        this.nagyIMGElem.attr({"src": kep});
    }

    #esemenyLetrehozas(esemenynev){
        const esemenyem = new CustomEvent(esemenynev);
        window.dispatchEvent(esemenyem);
    }

    #htmlLetrehozasa(){
        let txt = `<button id="balGomb">BAL</button>`;
        txt += `<div class="fokeptarolo"><img id="nagyIMG" src="${this.#kep}" alt="ez egy kép"></div>`;
        txt += `<button id="jobbGomb">JOBB</button>`;
        this.szuloElem.append(txt);
    }

} export default NagyKepView