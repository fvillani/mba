import TestService from "../services/test.service.js";

async function getTests() {
    return await TestService.getTests();
}

export default getTests;
