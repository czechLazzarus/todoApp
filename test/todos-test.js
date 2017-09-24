import deepFreeze from 'deep-freeze';
import chai from 'chai';
import chaiArrays from 'chai-arrays';
import {expect} from 'chai';
import {todos} from '../src/Reducers/Todos'

chai.use(chaiArrays);

describe('todos reducer', () => {
    it('testAddTodo', () => {
        const stateBefore = [];
        const action = {
            type: "ADD_TODO",
            id: 1,
            title: "Learn Redux"
        };
        const stateAfter = [
            {
                id: 1,
                title: "Learn Redux",
                complete: false
            }
        ];

        deepFreeze(action);
        deepFreeze(stateBefore);

        expect(todos(stateBefore, action)).to.be.deep.eql(stateAfter);
    });

    it('testRemoveTodo', () => {
        const stateBefore = [
            {
                id: 0,
                title: "Learn Redux",
                complete: false
            }
        ];
        const action = {
            type: "REMOVE_TODO",
            id: 0,
            title: "Learn Redux"
        };
        const stateAfter = [];

        deepFreeze(action);
        deepFreeze(stateBefore);

        expect(todos(stateBefore, action)).to.be.deep.eql(stateAfter);
    });

    it(' testToggleTodo', () => {
        const stateBefore = [
            {
                id: 0,
                title: "Learn Redux",
                complete: false
            },
            {
                id: 1,
                title: "Go shopping",
                complete: false
            }
        ];
        const action = {
            type: "TOGGLE_TODO",
            id: 1
        };
        const stateAfter = [
            {
                id: 0,
                title: "Learn Redux",
                complete: false
            },
            {
                id: 1,
                title: "Go shopping",
                complete: true
            }
        ];

        deepFreeze(action);
        deepFreeze(stateBefore);

        expect(
            todos(stateBefore, action)
        ).to.be.deep.eql(stateAfter);

    });
});