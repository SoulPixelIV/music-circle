window.onSpotifyWebPlaybackSDKReady = () => {
    const token = 'BQB-_u2B61476zPX9yq4wfjWCJ6tNvSqMpKHKD6f-MM-Y_OACwcRDJdm81uuGgM7vHHaHR-Zu0bpKE_3gRksVns8tBTuQKJr9cQVdszM8ZnzbjtvfeZ4uZsMMu-fMneA8U40ZcRtOENUtqxNqCbKAdX9XK__yLMp_ePDfJCu-A';
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