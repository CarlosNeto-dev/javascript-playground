/**
 * 
 * @param {object} listOfStudentData -> A object with user's informatons.
 * @returns {number} -> Returns the student's avarage.
 */
export function studentFunction(listOfStudentData) {
    const listOfObjectData = [];
    
    for (let c = 0; c < listOfStudentData.length; c++) {
        let sumNumbers = 0;

        for (let i = 0; i < listOfStudentData[c].notas.length; i++) {
            sumNumbers += listOfStudentData[c].notas[i];
        }

        let gradeAvarage = sumNumbers / listOfStudentData[c].notas.length
        
        if (gradeAvarage >= 7) {
            listOfObjectData.push(`
            Nome: ${listOfStudentData[c].nome};
            Grade's average: ${gradeAvarage.toFixed(2)};
            Course: ${listOfStudentData[c].curso};
            ===================================
        `)
    }
  }

  return listOfObjectData.join("");
}
