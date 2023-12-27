const parseHandlebar = (template: string) => {
    return template.replace(/{{/g, '{').replace(/}}/g, '}');
}

const fillTemplate = (template: string, data: any) => {
    return template.replace(/{{/g, '').replace(/}}/g, '').replace(/name/g, data.name);
}

export { parseHandlebar, fillTemplate };