/* index.js */
// 0 for dead
const squares = Array(9).fill(0);

let Square = (props) =>
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>

class Board extends React.Component {
    renderSquare(i) {
            <Square
                value={this.props.squares[i]}
                onClick={() =>this.props.onClick(i)}
            />
    }
    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    handleClick(i) {
        squares[i] = this.state.alive ? '1' : '0';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            alive: !this.state.alive,
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            xIsNext: true,
        };
    }

    render() {
           

           

    return (
        <div className="game">
            
            <button>Step</button>
            <div className="game-board">
            <Board
                squares={squares}
            />
            </div>
        </div>
    );
    }
}

ReactDOM.render(
    <Game />, document.getElementById('root')
);
