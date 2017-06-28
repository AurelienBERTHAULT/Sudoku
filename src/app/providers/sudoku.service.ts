import { EventEmitter, Inject } from '@angular/core';

export class SudokuService {

    /*public messageForAllBoxes = new EventEmitter();

    public allBoxes = [];

    constructor(@Inject('columnService') private _columnServiceFactory){}

    handleResolvedBox(){
        this.resolveColumns();
        // Pour chaque ligne de la grille
            // On récupère les valeurs trouvées
            // On retire ces valeurs des valeurs possibles des cases non résolues
            // On récupère les valeurs possibles des cases non résolues
            // Si une des valeurs est possible que pour une case, on lui assigne
        // Pour chaque bloc de la grille
            // On récupère les valeurs trouvées
            // On retire ces valeurs des valeurs possibles des cases non résolues
            // On récupère les valeurs possibles des cases non résolues
            // Si une des valeurs est possible que pour une case, on lui assigne
        // Si une case a changée, on recommence
    }

    initColumns() {
        this['columns'] = [];

        for(let n = 1; n < 10; n++){
            this['columns'].push({
                boxes: [
                    {
                        possibleValues: []
                    }
                ]
            });
        }

    }

    registerTheBox(box) {
        console.log('The box ' + box.name + ' has been registered');
        this.allBoxes.push(box.name);
    }

    removePossibleValues(){
        
    }

    removePossibleValue(){

    }

    resolveColumn(column){
        this.resolveColumnWithFoundValues(column);
        // On récupère les valeurs possibles des cases non résolues
        let possibleValues = [];
        column.boxes.forEach((box, index, boxes) => {
            if(box.possibleValues.length != 1){
                possibleValues = possibleValues.concat(box.possibleValues);
            }
        })
        // On les trie
        possibleValues.sort();
        for(let n = 0, prev = 0; n < possibleValues.length; n++){
            if(this.foundValues.includes(concatenatedArray[n])){}
            else if(frequency.hasOwnProperty(concatenatedArray[n])){
                frequency[concatenatedArray[n]] = frequency[concatenatedArray[n]] + 1;
            } else {
                frequency[concatenatedArray[n]] = 1;
            }
        }
        // Si une des valeurs est possible que pour une case, on lui assigne
    }

    resolveColumns(){
        // Pour chaque colonne de la grille
        this['columns'].forEach((column, index, columns) => {
            this.resolveColumn(column);
        });
    }

    resolveColumnWithFoundValues(column){
        let foundValues = this.retrieveFoundValues(column);
        // On retire ces valeurs des valeurs possibles des cases non résolues
        column.boxes.forEach((box, index, boxes) => {
            if(box.possibleValues.length != 1){
                foundValues.forEach((value, index, values) => {
                    let valueIndex = box.possibleValues.indexOf(value);
                    if(valueIndex != -1){
                        box.possibleValues.splice(valueIndex, 1);
                    }
                });
            }
        })
    }

    retrieveFoundValues(column){
        let foundValues = [];
        // On récupère les valeurs trouvées
        column.boxes.forEach((box, index, boxes) => {
            if(box.possibleValues.length == 1){
                foundValues.push(box.possibleValues[0]);
            }
        })
        return foundValues;
    }

    sendMessageToAllBoxesInTheBlock(data) {
        this.messageForAllBoxes.emit(data);
    }

    sendMessageToTheBox(box, data) {
        this['messageForCell' + box].emit(data);
    }*/
}