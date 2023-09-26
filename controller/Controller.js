import Model from "../model/Model.js"
import NagyKepView from "../view/NagyKepView.js";

class Controller{
    constructor(){
        const MODEL = new Model();
        const NAGYKEP = new NagyKepView($(".nagykep"), MODEL.getAktualisKep());
        $(window).on("bal",()=>{
            MODEL.bal();
            let aktualisKep = MODEL.getAktualisKep();
            NAGYKEP.nagyKepElemBeallit(aktualisKep);
        })
        $(window).on("jobb",()=>{
            MODEL.jobb();
            let aktualisKep = MODEL.getAktualisKep();
            NAGYKEP.nagyKepElemBeallit(aktualisKep);
        })
    }
} export default Controller