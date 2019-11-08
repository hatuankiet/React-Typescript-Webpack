import * as React from 'react';
import { Fragment } from 'react';

export class App extends React.Component<any, any>{

    constructor(props: {}) {
        super(props);
        this.state = {
            currentTask: "",
            tasks: []
        };
    }

    handleSubmit(e: any) {

    }

    render() {
        return (
            <Fragment>
                <div>
                    <h1>React Typescript Todo List</h1>
                </div>
                <button onClick={e => this.handleSubmit(e)} >Click</button>
                <form>
                    <input type="text" placeholder="Add a Task" />
                    <button type="button" >Add Task </button>
                </form>
            </Fragment>
        );
    }
}

