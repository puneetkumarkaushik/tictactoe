import React, {Component} from 'react';
import Box from './Box';
import './Grid.css';

class Grid extends Component {
    constructor() {
        super();
        this.state = {
            winner: '',
            turn: 'X',
            boxes: [
                { index: 1, mark: ''},
                { index: 2, mark: ''},
                { index: 3, mark: ''},
                { index: 4, mark: ''},
                { index: 5, mark: ''},
                { index: 6, mark: ''},
                { index: 7, mark: ''},
                { index: 8, mark: ''},
                { index: 9, mark: ''},
            ]
        }
    }      
    
    changeTurn = () => {
        this.setState(state => {
            return {turn: (state.turn === 'X') ? 'O' : 'X'};
        });
    }

    verify = () => {
        let boxes = this.state.boxes;
        if((boxes[0].mark === boxes[1].mark && boxes[1].mark === boxes[2].mark && boxes[0].mark !== '')
            ||(boxes[3].mark === boxes[4].mark && boxes[4].mark === boxes[5].mark  && boxes[3].mark !== '')
            ||(boxes[6].mark === boxes[7].mark && boxes[7].mark === boxes[8].mark  && boxes[6].mark !== '')
            ||(boxes[0].mark === boxes[3].mark && boxes[3].mark === boxes[6].mark  && boxes[0].mark !== '')
            ||(boxes[1].mark === boxes[4].mark && boxes[4].mark === boxes[7].mark  && boxes[1].mark !== '')
            ||(boxes[2].mark === boxes[5].mark && boxes[8].mark === boxes[2].mark  && boxes[2].mark !== '')
            ||(boxes[0].mark === boxes[4].mark && boxes[4].mark === boxes[8].mark  && boxes[0].mark !== '')
            ||(boxes[2].mark === boxes[4].mark && boxes[4].mark === boxes[6].mark  && boxes[2].mark !== '')    
        ){
            this.updateWinner();
        }
        else if(boxes[0].mark !== '' 
                && boxes[1].mark !== ''
                && boxes[2].mark !== ''
                && boxes[3].mark !== ''
                && boxes[4].mark !== ''
                && boxes[5].mark !== ''
                && boxes[6].mark !== ''
                && boxes[7].mark !== ''
                && boxes[8].mark !== ''
                )
        {
            this.setState({winner: 'noone'});
        }
    }

    updateWinner = () => {
        (this.state.turn === 'X') ? this.setState({ winner: 'Cross' }) : this.setState({ winner: 'Circle' });
    }

    handleMark = index => {
        const boxes = this.state.boxes;
        const updatedBoxes = boxes.map(item => {
            if(item.index === index && item.mark === ''){
                item.mark = this.state.turn;
            }      
            return item;
        });

        this.setState({ boxes : updatedBoxes });
        this.verify();
        this.changeTurn();
    }

    reset = () => {
        this.setState({winner: ''});

        let boxes = this.state.boxes;
        boxes.map(box => box.mark = '');
        this.setState({boxes});
    }

    render() {
        if(this.state.winner === 'noone') {
            return (
                <div class="container">
                    <div className='grid'>
                        {this.state.boxes.map((box) => (
                            <Box 
                                key = {box.index}
                                index = {box.index} 
                                mark = {box.mark}
                                onMark = {() => {}}
                            />
                        ))}
                    </div>
                    <span>Draw!</span>
                    <button onClick={this.reset}>New Game</button>
                </div>
            )
        }
        else if(this.state.winner !== '') {
            return (
                <div class="container">
                    <div className='grid'>
                        {this.state.boxes.map((box) => (
                            <Box 
                                key = {box.index}
                                index = {box.index} 
                                mark = {box.mark}
                                onMark = {() => {}}
                            />
                        ))}
                    </div>
                    <span>{this.state.winner} wins</span>
                    <button onClick={this.reset}>New Game</button>
                </div>
            )
        }
        else {
            return (
                <div>
                    <div className='grid'>
                        {this.state.boxes.map((box) => (
                            <Box 
                                key = {box.index}
                                index = {box.index} 
                                mark = {box.mark}
                                onMark = {this.handleMark}
                            />
                        ))}
                    </div>
                    <span>Turn : {this.state.turn}</span>
                </div>
            )
        }
    }
}

export default Grid;
