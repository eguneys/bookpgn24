import { For, Match, Switch } from 'solid-js'
import './App.css'
import './theme.css'

function App() {

  return (
    <>
      <div class='section'>

        <h1> Rare Lines </h1>
        <h2> <span class="moves">3. e3</span> and <span class='moves'> 4. Bd3</span> </h2>

        <h3> Variation Index </h3>

        <h4 class='moves underline'> 1.d4 d5 2. c4 c6 3. e3 Nf6 4.Bd3 </h4>
        <h4 class='moves'> 4... e5! </h4>

        <ul class='align-left'>
        <li><h4> A) <span class='moves'>5. Ne2</span> </h4></li>
        <li><h4> B) <span class='moves'>5. dxe5</span> </h4></li>
        <li><h4> C) <span class='moves'>5. Nc3</span> </h4></li>
        </ul>

        <br/>
        <br/>
        <div class='two-column'>
          <div class='col1'>
            <p class='align-left'>
              <span class='moves'>1.d4 d5 2.c4 c6 3.e3 Nf6</span>
              <br/>
              <span>With this 3.e3 move order Black gains   the additional option of 3...Bf5.</span>
            </p>
            <p class='align-left'>
              <span class='moves'>1.d4 d5 2.c4 c6 3.e3 Nf6</span>
              <br/>
              <span>With this 3.e3 move order Black gains   the additional option of 3...Bf5.</span>
            </p>
            <p class='align-left'>
              <span class='moves'>1.d4 d5 2.c4 c6 3.e3 Nf6</span>
              <br/>
              <span>With this 3.e3 move order Black gains   the additional option of 3...Bf5.</span>
            </p>
          </div>
          <div class='col2'>
            <p class='align-left'>
              <span class='moves'>1.d4 d5 2.c4 c6 3.e3 Nf6</span>
              <br/>
              <span>With this 3.e3 move order Black gains   the additional option of 3...Bf5.</span>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
