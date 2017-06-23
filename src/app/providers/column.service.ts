import { EventEmitter } from '@angular/core';

export class ColumnService {

    /**
     * The column number
     */
    public number: number;

    /**
     * A message for all boxes in the column
     */
    public messageForAllBoxesInTheColumn = new EventEmitter();


    /**
     * The states of the boxes in the column
     */
    public statesOfBoxes = {};

    public foundValues = [];

    /**
     * The service constructor
     */
    constructor(){
        return this;
    }

    calculateTheFrequency() {
        let concatenatedArray = [];
        let frequency = {};

        for(let boxName in this.statesOfBoxes){
            if(this.statesOfBoxes[boxName].length != 1){
                concatenatedArray = concatenatedArray.concat(this.statesOfBoxes[boxName]);
            }
        } 

        console.log(JSON.stringify(concatenatedArray));

        concatenatedArray.sort();

        for(let n = 0, prev = 0; n < concatenatedArray.length; n++){
            if(this.foundValues.includes(concatenatedArray[n])){}
            else if(frequency.hasOwnProperty(concatenatedArray[n])){
                frequency[concatenatedArray[n]] = frequency[concatenatedArray[n]] + 1;
            } else {
                frequency[concatenatedArray[n]] = 1;
            }
        }

        for(let possibleValue in frequency){
            // If a possible value has been found only once
            if(frequency[possibleValue] == 1){
                this.sendMessageToAllBoxesInTheColumn({
                    message: 'The box with the following possible value is resolved',
                    value: possibleValue
                });
            }
        };
    }

    handleBoxChange(box) {
        console.log('la box ' + box.name + ' a changée')
        this.statesOfBoxes[box.name] = box.possibleValues;
        console.log(JSON.stringify(this.statesOfBoxes));

        if(box.possibleValues.length == 1){
            this.foundValues.push(box.possibleValues[0]);
            this.sendMessageToAllBoxesInTheColumn({
                message: 'The following value has been discovered in the column',
                value: box.possibleValues[0]
            })
        } else {
            this.calculateTheFrequency();
        }
    }

    registerTheBox(box) {
        this.statesOfBoxes[box.name] = box.possibleValues;
    }

    sendMessageToAllBoxesInTheColumn(data) {
        this.messageForAllBoxesInTheColumn.emit(data);
    }

    sendMessageToTheBox(box, data) {
        this['messageForCell' + box].emit(data);
    }

    setNumber(number){
        this.number = number;
        return this;
    }
}