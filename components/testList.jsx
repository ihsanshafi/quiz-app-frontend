import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const TestList = () => {
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Assuming you have an array of saved tests
    const savedTests = [
        { id: 1, name: 'Test 1', url: '/test/1' },
        { id: 2, name: 'Test 2', url: '/test/2' },
        { id: 3, name: 'Test 3', url: '/test/3' },
    ];

    const handleButtonClick = (url) => {
        if (isMounted) {
            router.push(url);
        }
    };

    const styles = {
        container: {
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
        },
        header: {
            fontSize: '24px',
            marginBottom: '10px',
        },
        list: {
            listStyleType: 'none',
            padding: 0,
        },
        listItem: {
            marginBottom: '10px',
        },
        button: {
            padding: '10px 20px',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.header}>Saved Tests</h2>
            <ul style={styles.list}>
                {savedTests.map(test => (
                    <li key={test.id} style={styles.listItem}>
                        <button style={styles.button} onClick={() => handleButtonClick(test.url)}>
                            {test.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TestList;