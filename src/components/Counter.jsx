import { useState } from 'react';
import { HStack, Button, Text } from '@chakra-ui/react';

const Counter = ({initialCount = 1, onChange }) => {
    const [count, setCount] = useState(initialCount);

    const handleIncrement = () => {
        setCount(count + 1);
        onChange && onChange(count + 1);
    };

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count-1);
            onChange && onChange(count - 1);
        }
    };

  return (
    <HStack>
        <Button size="sm" onClick={handleDecrement} disabled={count === 0}>-</Button>
        <Text>{count}</Text>
        <Button size="sm" onClick={handleIncrement} >+</Button>
    </HStack>
  );
};
export default Counter;
