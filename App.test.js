import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()})

it('El primer click posiciona una X', () => {  
    const appComponent = shallow(<App />);
    const appInstance = appComponent.instance();
    appInstance.playMove(0);
    appComponent.update()
    expect(appComponent.state().rows[0]).toBe("X")
});

it('El segundo click posiciona una O', () => {  
    const appComponent = shallow(<App />);
    const appInstance = appComponent.instance();
    appInstance.playMove(0);
    appInstance.playMove(1);
    expect(appComponent.state().rows[1]).toBe("O")
});

it('Detecta ganador en primera linea horizontal', () => {  
    const appComponent = shallow(<App />);
    const appInstance = appComponent.instance();
    appInstance.playMove(0);
    appInstance.playMove(3);
    appInstance.playMove(1);
    appInstance.playMove(4);
    appInstance.playMove(2);
    expect(appComponent.state().winner).toBe("X")
});

it('Detecta ganador en primera linea vertical', () => {  
    const appComponent = shallow(<App />);
    const appInstance = appComponent.instance();
    appInstance.playMove(1);
    appInstance.playMove(0);
    appInstance.playMove(2);
    appInstance.playMove(3);
    appInstance.playMove(4);
    appInstance.playMove(6);
    expect(appComponent.state().winner).toBe("O")
});

it('Detecta empate', () => {  
    const appComponent = shallow(<App />);
    const appInstance = appComponent.instance();
    appInstance.playMove(0);
    appInstance.playMove(1);
    appInstance.playMove(4);
    appInstance.playMove(2);
    appInstance.playMove(5);
    appInstance.playMove(3);
    appInstance.playMove(6);
    appInstance.playMove(8);
    appInstance.playMove(7);
    expect(appComponent.state().winner).toBe("Empate")
});

it('Reinicia el juego', () => {  
    const appComponent = shallow(<App />);
    const appInstance = appComponent.instance();
    appInstance.playMove(0);
    appInstance.playMove(1);
    appInstance.playMove(4);
    appInstance.playMove(2);
    appInstance.playMove(5);
    appInstance.playMove(3);
    appInstance.playMove(6);
    appInstance.playMove(8);
    appInstance.playMove(7);
    appInstance.resetBoard();
    expect(appComponent.state().winner).toBe(null)
});
