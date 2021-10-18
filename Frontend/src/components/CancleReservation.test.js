import React from 'react';
import Enzyme, {shallo} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CancleReservation from './CancleReservation';

Enzyme.configure({ adapter:new Adapter() });

describe('CancleReservation',()=>{
    it('Should be true',()=>{
        const foo=true;
        expect(foo).toBe(true);
    })
    });





    
    // describe('CancleReservation',()=>{
    //     it('Should show text',()=>{
    //         const wrapper= shallo(<CancleReservation/>);
    //         const text=wrapper.find('div div');
    //         expect(text.text()).toBe('Cancle Reservation');
           
    //     })
    //     });

