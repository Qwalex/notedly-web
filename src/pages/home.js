import React from "react";

import { useQuery, gql } from "@apollo/client";
import ReactMarkdown from "react-markdown";

import Button from "../components/Button";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import NoteFeed from "../components/NoteFeed";

const GET_NOTES = gql`
    query NoteFeed($cursor: String) {
        noteFeed(cursor: $cursor) {
            cursor
            hasNextPage
            notes {
                id
                createdAt
                content
                favoriteCount
                author {
                    username
                    id
                    avatar
                }
            }
        }
    }
`;

const Home = () => {
    const { data, loading, error, fetchMore } = useQuery(GET_NOTES);

    if (loading) return <p>Loding...</p>;
    if (error) return <p>Error...</p>;
    return <NoteFeed notes={data.noteFeed.notes} />
};

export default Home;