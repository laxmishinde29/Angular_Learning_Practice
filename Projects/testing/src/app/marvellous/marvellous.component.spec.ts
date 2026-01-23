import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvellousComponent } from './marvellous.component';

describe('MarvellousComponent', ()=>{

  // Testing fundamentals
  it('should return 1 if number is even', ()=>{
    let obj = new MarvellousComponent();

          const ret = obj.CheckEven(6);
          expect(ret).toBe(1);
      })
  
      it('should return 0 if number is Odd', ()=>{
        let obj = new MarvellousComponent();

          const ret = obj.CheckEven(7);
          expect(ret).toBe(0);
      })

  // Testing methods
  it('Should increment counter by 1 when we call incremennt method',()=>{
    let obj = new MarvellousComponent();

    obj.Increment();
    
    expect(obj.counter).toBe(1);
  });
  
  it('Should decrement counter by 1 when we call decrement method',()=>{
    let obj = new MarvellousComponent();

    obj.Decrement();
    
    expect(obj.counter).toBe(-1);
  });

  // Testing array
  it('should return all names of Marvellous Batches', ()=>{
    let obj = new MarvellousComponent();

      const ret = obj.Batches();
      expect(ret).toContain('PPA');
      expect(ret).toContain('Angular');
      expect(ret).toContain('LB');
      expect(ret).toContain('Python');
  });

  // Testing string
  it('should return name of student', ()=>{
    let obj = new MarvellousComponent();

          expect(obj.Display('Piyush')).toContain('Piyush welcome to Marvellous Infosystems');
      })
})
