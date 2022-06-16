import React, { Fragment } from 'react'; 
import PivotreeHelloWorld from './PivotreeHelloWorld';
import { PivotreeHelloWorldDefaultProps } from './modules/defaultProps';
import { pivotreeHelloWorldSchema, 
    //pivotreeHelloWorldGetSchema 
} from './modules/schema';
import { PivotreeHelloWorldWrapperProps } from './interfaces';
import { DEFAULT_MESSAGE } from './constants';

const PivotreeHelloWorldWrapper = (props: PivotreeHelloWorldWrapperProps) => {
    /**
     * This should be a logical component
    */

    const { showComponent, msg, blockClass } = props;

    if(!showComponent) return <Fragment/>

    return <PivotreeHelloWorld msg={msg || DEFAULT_MESSAGE} blockClass={blockClass}/>
}

PivotreeHelloWorldWrapper.defaultProps = PivotreeHelloWorldDefaultProps;
PivotreeHelloWorldWrapper.schema = pivotreeHelloWorldSchema;
//We can do it like this if you need to get the props
//PivotreeHelloWorldWrapper.getSchema = (props:PivotreeHelloWorldWrapperProps) => pivotreeHelloWorldGetSchema<PivotreeHelloWorldWrapperProps>(props);


export default PivotreeHelloWorldWrapper;

