window.onSpotifyWebPlaybackSDKReady = () => {
    const token = 'BQAJiywMqTNuPEUwv2bokhSQ0yPnrZKb3AZ69Bme-cBVOjJlUiwkWz_F1tMTP0CC-04MHtgiqOijT1lUmBsyzrvqXlXaa7A0NLGSXELiyWoVTHOrlwYFp5ioMrq80_lesR-oHnj31gJ-eEljWfRP2QE6M_H7gmLGpSiyPlbYMw';
    const player = new Spotify.Player({
      name: 'Web Playback SDK Quick Start Player',
      getOAuthToken: cb => { cb(token); }
    });
  
    // Error handling
    player.addListener('initialization_error', ({ message }) => { console.error(message); });
    player.addListener('authentication_error', ({ message }) => { console.error(message); });
    player.addListener('account_error', ({ message }) => { console.error(message); });
    player.addListener('playback_error', ({ message }) => { console.error(message); });
  
    // Playback status updates
    player.addListener('player_state_changed', state => { console.log(state); });
  
    // Ready
    player.addListener('ready', ({ device_id }) => {
      console.log('Ready with Device ID', device_id);
    });
  
    // Not Ready
    player.addListener('not_ready', ({ device_id }) => {
      console.log('Device ID has gone offline', device_id);
    });
  
    // Connect to the player!
    player.connect();
  };