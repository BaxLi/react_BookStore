import React from 'react'

const compose = (...funcs) => (comp)=>{
    return funcs.reduceRight(
        (wrapped, f)=>f(wrapped), comp)
    )