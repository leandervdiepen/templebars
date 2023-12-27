import {expect, test} from 'vitest'
import {hello} from '../src/main'
import {fillTemplate, parseHandlebar} from "../src/template-parser";

test('hello', () => {
  expect(hello('world')).toBe('Hello there, world!')
})

test('template', () => {
    const template = '<div>{{name}}</div>';
    const expected = '<div>{name}</div>';
    expect(parseHandlebar(template)).toBe(expected);
    }
)

test("fill template", () => {
    const template = '<div>{{name}}</div>';
    const expected = '<div>John</div>';
    expect(fillTemplate(template, {name: "John"})).toBe(expected);
})

test("fill template with multiple variables", () => {
    const template = '<div>{{name}} {{surname}}</div>';
    const expected = '<div>John Smith</div>';
    expect(fillTemplate(template, {name: "John", surname: "Smith"})).toBe(expected);
})