export const setStyles = (blockClass: string | undefined, cssName: string | string[]) => {
    if (!blockClass) {
        if(Array.isArray(cssName)) return cssName.reduce((acc, current) => acc += `${current} vtex-${current} `, ''); 

        return `${cssName} vtex-${cssName}`;
    }

    if(Array.isArray(cssName)) return cssName.reduce((acc, current) => acc += `${current} vtex-${current} vtex-${current}--${blockClass} ${current}--${blockClass} `, '');

    return `${cssName} vtex-${cssName}--${blockClass} ${cssName}--${blockClass}`;
}