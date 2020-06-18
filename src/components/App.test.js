import React from 'react';
import App from './App';
import { mount, configure } from 'enzyme';
import  Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('App', ()=> {
   let app = mount(<App/>)

   it("redner app title", ()=> {
        console.log(app.debug());
      expect(app.find('h2').text()).toEqual('my name is not self')
   })

   it("renders the submit button", () => {
    expect(app.find('.btn').at(0).text()).toEqual('Submit')
   })

   it("renders the clear button", () => {
    expect(app.find('.btn').at(1).text()).toEqual('Clear')
   })

   describe("rednering forms", ()=> {

        it("create form components", () => {
            expect(app.find('Form').exists()).toBe(true)
        })
        it("create form components", () => {
        expect(app.find('FormControl').exists()).toBe(true)
        })
   })

   describe("when creating note", () =>{
       let notes =  'test note';

       beforeEach(() => {
           app.find('FormControl').simulate('change', {
               target: { value: notes }
           })
       })

       it("update the text", () => {
           expect(app.state().text).toEqual(notes)
       })

       describe("add notes", () => {
           beforeEach(() => {
               app.find('.btn').at(0).simulate('click')
           })

           it('add new notes to state', () => {
               console.log(app.state());
              expect(app.state().notes[0].text).toEqual(notes)
           })
       })
       describe("remove notes", () => {

        let note = [];
        beforeEach(() => {
            app.find('.btn').at(1).simulate('click')
        })

        it('clear notes', () => {
            console.log(app.state());
           expect(app.state().notes).toEqual(note)
        })
    })
   })

})
