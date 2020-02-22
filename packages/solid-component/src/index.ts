//import { register, compose } from 'component-register';
import { customElement } from 'solid-element';
import HelloWorld from './components/hello-world';

// Register web component
//compose(register('solid-hello-world'))(HelloWorld);

customElement('solid-hello-world', HelloWorld);