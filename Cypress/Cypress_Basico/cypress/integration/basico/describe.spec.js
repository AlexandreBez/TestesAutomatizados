/// <reference types="cypress" />

describe('Should group tests...', () => {
    
    describe('Should group more specifics tests...', () =>{
        it("A external test...", () => {

        })

        it.skip("A external test...", () => {

        })
    })
    
    it.only("A external test...", () => {

    })

    it("A external test...", () => {

    })
})