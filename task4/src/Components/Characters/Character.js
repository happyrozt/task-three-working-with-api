import React, { useEffect, useState } from 'react';
import './character.css';
import InfiniteScroll from "react-infinite-scroller";
import Loader from '../Loader/Loader';
import Card from '../Card/Card';

export default function Character({ characterData }) {
    const [page, setPage] = useState(characterData.slice(0, 6));
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        setPage(characterData.slice(0, 6));
        setHasMore(characterData.length > 6);
    }, [characterData]);

    const fetchData = () => {
        const nextPage = characterData.slice(page.length, page.length + 6);
        if (nextPage.length === 0) {
            setHasMore(false);
        } else {
            setTimeout(() => {
                setPage(prevPage => [...prevPage, ...nextPage]);
            }, 2000);
        }
    };

    return (
        page.length === 0 ? (
            "Loading..."
        ) : (
            <InfiniteScroll
                pageStart={0}
                loadMore={fetchData}
                hasMore={hasMore}
                loader={<Loader />}
            >
                <Card page={page} />
            </InfiniteScroll>
        )
    );
}
