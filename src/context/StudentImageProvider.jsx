import React, { createContext, useEffect, useState } from 'react';
import storage from '../firebase';
import { getDownloadURL, ref, listAll } from 'firebase/storage';
export const StudentImageContext = createContext();
function StudentImageProvider({ children }) {
    const [studentImageUrls, setStudentImageUrls] = useState({});

    const fetchImages = async () => {
        try {
            const listRef = ref(storage, 'Images/');
            const res = await listAll(listRef); // Use listAll() to list all items in the directory
            const urls = await Promise.all(
                res.items.map(async (itemRef) => {
                    const url = await getDownloadURL(itemRef);
                    const id = itemRef.name.split('.')[0]; // Extract ID from filename
                    return { id, url };
                })
            );
            const urlMap = urls.reduce((acc, { id, url }) => {
                    acc[id] = url;
                    return acc;
                }, {});
            setStudentImageUrls(urlMap);
        } catch (error) {
            console.error('Error fetching image URLs:', error);
        }
    };
    useEffect(() => {
        // Initial fetch
        fetchImages();
        // Set up polling to fetch images every 10 seconds
        const intervalId = setInterval(fetchImages, 10000); // Fetch every 10 seconds

        return () => clearInterval(intervalId); // Clean up the interval on component unmount
    }, []); // Empty dependency array to run once on mount
    return (
        <StudentImageContext.Provider value={studentImageUrls}>
            {children}
        </StudentImageContext.Provider>
    );
}

export default StudentImageProvider;
