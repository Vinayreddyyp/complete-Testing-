import React from 'react';
import { mount, configure } from 'enzyme';
import Note from './Note';
import  Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

const props = { note: {text: 'abc'}}
describe("render notes", () => {
   let note = mount(<Note {...props} className="notes"/>)

   it('render text', () => {
     expect(note.find('div').text()).toEqual(props.note.text);
   })

})