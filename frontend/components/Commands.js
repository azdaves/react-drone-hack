import styled from 'styled-components';
import socket from '../socket';

const CommandGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.25fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  border: 1px solid black;
  grid-gap: 3px;
  button {
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.05);
    border: 0;
    background: #fe2c70;
    border: 4px solid transparent;
    color: white;
    font-size: 1rem;
    position: relative;
    &:active {
      top: 2px;
    }
    &:focus {
      outline: 0;
      border-color: #ffc600;
    }
    &.takeoff {
      background: #41c7ff;
    }
    &.land {
      background: #00ff00;
    }
    &.emergency {
      background: orange;
      text-transform: uppercase;
      color: black;
    }
    &.rotate {
      background: #00fff9;
      color: black;
    }
    &.height {
      background: #fff;
      color: black;
    }
    span.symbol {
      display: block;
      font-size: 2rem;
      font-weight: 400;
    }
  }
  .center {
    display: grid;
    grid-gap: 3px;
    grid-template-columns: 1fr 1fr;
    button:last-child {
      grid-column: span 2;
    }
  }
  h2 {
    grid-column: 1 / -1;
    background: #ffc600;
    margin: 0;
    font-size: 1rem;
    text-align: center;
    padding: 0.5rem;
    color: black;
  }
`;

function sendCommand(command) {
  return function() {
    console.log(`Sending the command ${command}`);
    socket.emit('command', command);
  };
}
const Commands = () => (
  <CommandGrid>
  <button onClick={sendCommand('ccw 90')}>90 Degree CCW</button>
  <button onClick={sendCommand('cw 90')}>90 Degree CW</button>
    <button onClick={sendCommand('takeoff')}>Take Off</button>
    <button onClick={sendCommand('land')}>Land</button>
    <button onClick={sendCommand('up 50')}>Up 50cm</button>
    <button onClick={sendCommand('down 50')}>Down 50cm</button>
    <button onClick={sendCommand('right 120')}>Right 120cm</button>
    <button onClick={sendCommand('right 50')}>Right 50cm</button>
    <button onClick={sendCommand('left 120')}>left 120cm</button>
    <button onClick={sendCommand('left 50')}>Left 50cm</button>
    <button onClick={sendCommand('forward 50')}>forward 50cm</button>
    <button onClick={sendCommand('forward 100')}>forward 100cm</button>
    <button onClick={sendCommand('back 50')}>back 50cm</button>
    <button onClick={sendCommand('back 100')}>back 100cm</button>
    <button onClick={sendCommand('land')}>Land</button>
    <button onClick={sendCommand('flip l')}>Flip Left!</button>
    <button onClick={sendCommand('flip r')}>Flip Right!</button>
    <button onClick={sendCommand('flip f')}>Flip Forward!</button>
    <button onClick={sendCommand('flip b')}>Flip Back!</button>
    <button onClick={sendCommand('emergency')}>emergency</button>
    {/* <button onClick={sendCommand('go 20 50 150 30')}>GO!</button>
    <button onClick={sendCommand('curve 100 100 100 150 250 350 50')}>
      Curve!
    </button> */}
    </CommandGrid>
);

export default Commands;
