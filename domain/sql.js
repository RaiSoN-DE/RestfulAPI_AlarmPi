class Data {

    constructor(temp,smoke,power) {
        this.id=0;
        this.temp=temp;
        this.smoke=smoke;
        this.power=power;
    }

    getAddDataSQL() {
        let sql = `INSERT INTO DATA(temp, power, smoke) \
                   VALUES('${this.temp}',${this.power},${this.smoke})`;
        return sql;
    }

    static getDataByIdSQL(id) {
        let sql = `SELECT * FROM DATA WHERE ID = ${id}`;
        return sql;
    }

    static deleteProductByIdSQL(id) {
        let sql = `DELETE FROM DATA WHERE ID = ${id}`;
        return sql;
    }

    static getAllDataSQL() {
        let sql = `SELECT * FROM DATA`;
        return sql;
    }

    static getLatestDataSQL() {
        let sql = `SELECT * FROM DATA ORDER BY TIMESTAMP ASC LIMIT 10`
        return sql;
    }


}

export default Data;