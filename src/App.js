import React from 'react';

import { Grid } from '@mui/material';

import { SearchBar, VideoDetail } from './components/';

import youtube from './api/youtube';

class App extends React.Component {
    state = {
        video: [],
        selectedVideo: null,
    }
    handleSubmit = async (searchTerm) => {
        try {
            const response = await youtube.get('search', { 
                params: {
                    part: 'snippet',
                    maxResults: '5',
                    key: 'AIzaSyAwePyRcd4FIphWlv00OAZ2EQiZJxtf2m8',
                    q: searchTerm
                }
            })

            this.setState({ videos: response.data.items, selectedVideo: response.data.items[0]})

        } catch (error) {
            console.error('Error occurred:', error);
        }
    }

    render () {
        return (
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit}/>
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail/>
                        </Grid>
                        <Grid item xs={4}>
                            {/* VIDEO LIST */}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}





export default App;