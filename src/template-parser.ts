const parseHandlebar = (template: string) => {
    return template.replace(/{{/g, '{').replace(/}}/g, '}');
}

const fillTemplate = (template: string, data: { [key: string]: string }) => {
    const keys = Object.keys(data);
    console.log("keys", keys);

    keys.forEach(key => {
        const regex = new RegExp(`{{${key}}}`, 'g');
        template = template.replace(regex, data[key]);
 
    });

    return template;
}

export { parseHandlebar, fillTemplate };