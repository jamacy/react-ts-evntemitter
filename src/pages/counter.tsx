import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { reducerType } from '../store';
import { asyncIncrementCount, decrementCount } from '../store/actions';

import BrotherA from '../component/brother'
import BrotherB from '../component/fraternal'


interface CounterProps {
    count: number;
    asyncIncrementCount: Function;
    decrementCount: Function;
}
const mapStateToProps = (state: reducerType) => ({ count: state.countReducer.count });
const mapDispatchToProps = { asyncIncrementCount, decrementCount };

//RouteComponentProps:路由库自带的api的类型定义
class Counter extends Component<RouteComponentProps & CounterProps, {}>{
    private increment = () => {
        const { asyncIncrementCount } = this.props;
        asyncIncrementCount(2);
    }
    private decrement = () => {
        const { decrementCount } = this.props;
        decrementCount(2);
    }
    public render() {
        const { count } = this.props;
        return (
            <div>
                <p>count：{count}</p>
                <Button onClick={this.increment}>按钮+2</Button>
                <Button onClick={this.decrement}>按钮-2</Button>

                <br/>
                <br/>
                <BrotherA />
                <br/>
                <br/>
                <BrotherB />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);