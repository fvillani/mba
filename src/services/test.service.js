import TestRepository from "../repositories/test.repository.js";

async function getTests() {
    return await TestRepository.getTests();
}

export default getTests;
