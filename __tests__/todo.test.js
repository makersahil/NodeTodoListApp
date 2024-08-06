const request = require('supertest');
const app = require('../app');

describe('GET /todo', () => {
    test('Gettting todo list items!', async () => {
        const response = await request(app)
            .get('/todo')
            .expect('Content-Type', /json/)
            .expect(200);
    });

    test('Marking a task as complete', async () => {
        const response = await request(app)
            .get('/todo/complete/100')
            .expect(302);
    });
});

describe('POST /todo', () => {
    test('Adding a task', async () => {
        const response = await request(app)
            .post('/todo').send({
                task: "Test Task",
                desc: "Test Desc"
            }).expect(302);
    });
});

describe('DELETE /todo', () => {
    test('Deleting a task', async () => {
        const response = await request(app)
            .delete('/todo/100')
            .expect(302);
    });
});