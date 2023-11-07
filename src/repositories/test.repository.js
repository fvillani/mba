import Test from "../models/test.model.js";

async function getTests() {
    try {
        return await Test.findAll();
    } catch (err) {
        throw err;
    }
}

export default getTests;
