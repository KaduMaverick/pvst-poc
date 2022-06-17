export const pivotreeHelloWorldSchema = {
    title: 'Pivotree Hello World',
    type: 'object',
    properties: {
        showComponent: {
            title:'Show component?',
            type: 'boolean',
            default: false
        },
        msg: {
            title: 'Say hello as you wish!',
            type: 'string',
            default: ''
        }
    }
}

//Using generics so we can pass the necessary itnerface when we call this component
export const pivotreeHelloWorldGetSchema = <T>(props: T) => {
    console.log(props);
    return {
        title: 'Pivotree Hello World',
        type: 'object',
        properties: {
            showComponent: {
                title:'Show component?',
                type: 'boolean',
                default: false
            },
            msg: {
                title: 'Say hello as you wish!',
                type: 'string',
                default: ''
            }
        }
    }
}