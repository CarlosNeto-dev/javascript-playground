/**
 * Main class of exercise 01;
 * Get the height and gender from a group to get specific informations.
 */

export class PeopleData {
    
    /** 
     * The main constructor of the class.
     * 
     * @param {Array<number>} height -> The first parameter of the constructor;
     * @param {Array<string>} gender -> The second parameter of the constructor;
     */ 
    constructor(height, gender) {
        this.height = height;
        this.gender = gender;
    }

    /**
     * 
     * @returns {number} -> The highest height of the group.
     */
    getHiggerHeight() {
        return Math.max(...this.height);
    }


    /**
     * 
     * @returns {number} - The lowest height of the group.
     */
    getLowerHeight() {
        return Math.min(...this.height);
    }

    
    /**
     * 
     * @param {Array<number>} listOfMasculineHeight -> The array of masculine heights. 
     * @returns {number} -> The average of masculine heights.
     */
    getAverageHeight(listOfMasculineHeight) {
        let sum = 0;

        for (const masculineHeight of listOfMasculineHeight) {
            sum += masculineHeight;
        }

        return sum / listOfMasculineHeight.length;
    }


    /**
     * 
     * @returns {number} -> The lenght of the array.
     */
    quantityGenderFeminine() {
        return this.gender.length;
    }
}