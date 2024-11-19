'use client';
import React from 'react';
import { useSelector } from 'react-redux';

const Count = () => {
    const count = useSelector((state:any) => state.counter.value); 

    return (
        <div>count : {count}</div>
    )
}

export default Count;