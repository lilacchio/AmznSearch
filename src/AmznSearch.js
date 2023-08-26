import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, ListItem, TextField, Button, Paper, Typography } from '@material-ui/core';
import debounce from 'lodash.debounce';

export default function AmznSearch(props) {
const [suggestions, setSuggestions] = useState([]);
const [query, setQuery] = useState('');
const [showParams, setShowParams] = useState(false);
const [showJSON, setShowJSON] = useState(false);

// API requests, feel free to configure the params as your wish
const params = {
    "session-id": "133-2190809-5709766",
    "customer-id": "A1CNYR04B8CZOZ",
    "request-id": "NTH41W0H5GYC8N00NVCS",
    "page-type": "Gateway",
    "lop": "en_US",
    "site-variant": "desktop",
    "client-info": "amazon-search-ui",
    "mid": "ATVPDKIKX0DER",
    "alias": "aps",
    "b2b": 0,
    "fresh": 0,
    "ks": 69,
    "prefix": query,  // Setting the query from the input
    "event": "onKeyPress",
    "limit": 11,
    "fb": 1,
    "suggestion-type": "KEYWORD"
};

const fetchSuggestions = debounce(async () => {
    if (query.length < props.minQueryLength) return;
    params.prefix = query;

    const response = await axios.get('https://completion.amazon.com/api/2017/suggestions', { params });
    setSuggestions(response.data.suggestions || []);
}, props.debounceTime);

useEffect(() => {
    fetchSuggestions();
}, [query]);

const toggleParams = () => {
    setShowParams(!showParams);
};

const toggleJSON = () => {
    setShowJSON(!showJSON);
};

return (
    <Paper style={{ padding: '16px' }}>
    <Typography variant="h4">Amazon Autocomplete</Typography>
    <TextField
        label="Search"
        value={query}
        onChange={e => setQuery(e.target.value)}
    />
    <List>
        {suggestions.map((suggestion, index) => (
        <ListItem key={index}>
            {suggestion.value}
        </ListItem>
        ))}
    </List>
    <Button variant="contained" color="primary" onClick={toggleParams}>
        Show/Hide Params
    </Button>
    {showParams && <pre>{JSON.stringify(params, null, 2)}</pre>}

    <Button variant="contained" color="secondary" onClick={toggleJSON}>
        Show/Hide JSON
    </Button>
    {showJSON && <pre>{JSON.stringify(suggestions, null, 2)}</pre>}
    </Paper>
);
}