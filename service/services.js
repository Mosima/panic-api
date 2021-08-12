const divisionService = {
    getAllDivisions(db) {
        return db
            .select("*")
            .from("division")
            .then(rows => rows);
    }

}

const panicService = {
    insertPanic(db, records) {
        return db
        ("panic")
        .insert(records)
        .returning('*')
        .then(rows => rows);
    }

}

module.exports = {
    divisionService,
    panicService

};