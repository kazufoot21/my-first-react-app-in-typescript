import React, {useState, useRef, useEffect} from 'react';

// type MySetStateAction = number | ((prevState: number) => number);
// type Dispatch = (value: MySetStateAction) => void;

export const Counter: React.FC<{}> = () => {
    const initialValue: any = 0;
    const [value, setValue] = useState<number>(initialValue);
    const increment = () => {
        setValue((prevState) => prevState + 1);
    };
    const decrement = () => {
        setValue((prevState) => prevState - 1);
    };
    const renderTimes = useRef<number>(0);

    useEffect(() => {
        renderTimes.current = renderTimes.current + 1;
    });

    const ref = useRef<HTMLInputElement>(null!);

    const focusInput = () => {
        ref.current.focus();
        // ref.current?.focus();
        // const current = ref.current;
        // if (current != null) current.focus();
    };

    return (
        <div>
            <div>value: {value}</div>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
            <div>
                this component was re-rendered {renderTimes.current} times!
                <input ref={ref} type="text" />
                <button onClick={focusInput}>Click Me!</button>
            </div>
        </div>
    );
};
