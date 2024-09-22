function App() {
  return (
    <>
      <header>
        <img src="game-logo.png" alt="" />
        <h1>Tic-Tac-Toe</h1>
      </header>
      <main>
        <div id="game-container">
          <ol id="players">
            <li>
              <span className="player-name">Player 1</span>
              <span className="player-symbol">X</span>
            </li>
            <li>
              <span className="player-name">Player 2</span>
              <span className="player-symbol">O</span>
            </li>
          </ol>
          GAME BOARD
        </div>
      </main>
    </>
  );
}

export default App;
