import React, { useState } from "react"

export const useCounter = (init) => {
    const {initialValue, minValue,maxValue} = init;
    // console.log(initialValue, minValue,maxValue)

    const [count, setCount] = useState(initialValue)


    const incCount = (value) => {
        if(count >= maxValue){
            return false;
        }else{
           value ? setCount(prev => prev+value) : setCount(prev => prev+1)
        }

    }

    const decCount = (value) => {
        if(count <= minValue){
            return false;
        }else{
            value ? setCount(prev => prev-value) : setCount(prev => prev-1)
        }

    }

    return {count,incCount,decCount}

};
