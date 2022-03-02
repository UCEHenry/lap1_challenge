const data = require("../data/data")

class Data {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.url = data.url;
    }

    static getAll() {
        const allResults = data.map(result => new Data(result));
        return allResults;
    }

    static findById(id) {
        try {
            const dataName = data.filter(result => result.id === id)[0];
            const info = new Data(dataName);
            return info;
        } catch (err) {
            throw new Error('That ID does not exist');
        }
    }

    static findByName(name) {
        try {
            const dataName = data.filter(result => result.name == name)[0];
            const info = new Data(dataName);
            return info;
        } catch (err) {
            throw new Error('That cohort does not exist');
        }
    }
}



module.exports = Data;