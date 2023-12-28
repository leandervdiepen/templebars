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

test("fill complex html structure with multiple variables", () => {
    const template = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>{{title}}</title></head><body><h1>{{hTitle}}</h1><h2>{{subtitle}}</h2><div>{{name}} {{surname}}</div></body></html>';
    const expected = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Hello</title></head><body><h1>Hello</h1><h2>World</h2><div>John Smith</div></body></html>';
    expect(fillTemplate(template, {name: "John", surname: "Smith", title: "Hello", hTitle: "Hello", subtitle: "World"})).toBe(expected);
})

test("fill template with multiple variables and multiple occurrences", () => {
    const template = '<div>{{name}} {{surname}} {{name}} {{surname}}</div>';
    const expected = '<div>John Smith John Smith</div>';
    expect(fillTemplate(template, {name: "John", surname: "Smith"})).toBe(expected);
})
