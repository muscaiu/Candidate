

(question_1 = () => {
    let items = [180303, 353, 'Delete Me', 561, 684212]
    let new_items = []
    removeItem = (value) => {
        new_items = items.filter(item => item !== value)
    }
    removeItem('Delete Me')
    console.log(`q1: ${new_items}`)
})();


(question_2 = () => {
    const names = ["Cacambo", "Candide", "Cunegonde", "Farmer", "Martin", "Pangloss"]
    let names_sorted = names.sort()
    console.log(`q2: ${names_sorted}`)
})();


(question_3 = () => {
    const integers = [180303, 353, 46543, 561, 684212]
    sortNumber = (a, b) => {
        return a - b
    }
    let sorted_integers = integers.sort(sortNumber)
    console.log(`q2: ${sorted_integers}`)
})();


(question_4 = () => {
    const strings = ['jesse_eisenberg', 'rooney_mara', 'andrew_garfield', 'dustin_fitzsimons']
    let strings_refactored = strings.map((item) => {
        return item
            .replace(/_/g, " ")
            .replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
    })
    console.log(`q4: ${strings_refactored}`)
})();


(question_5 = () => {
    let myObj = ('province',
        [
            { city: "Joliette", province: "QC" },
            { city: "Sudbury", province: "QC" },
            { city: "Campbell River", province: "BC" }
        ])

    checkString = (str) => {
        let isMissingValue = false

        for (var i = 0; i < myObj.length; i++) {
            if (!myObj[i][str]) {
                isMissingValue = true;
                break;
            }
        }
        return isMissingValue
    }
    checkString('province') ? console.log(`q5: false`) : console.log(`q5: true`)
})();
