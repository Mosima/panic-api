const divisionService = {
    getAllDivisions(db) {
        return db
            .select("*")
            .from("division")
            .then(rows => rows);
    }

}

module.exports = {
    divisionService
};