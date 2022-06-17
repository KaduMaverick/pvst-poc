export interface PivotreeHelloWorldProps {
    msg: string;
    blockClass?: string;
}

export interface PivotreeHelloWorldWrapperProps extends PivotreeHelloWorldProps {
    showComponent: boolean;
}