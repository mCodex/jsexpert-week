class VideoMediaPlayer {
    constructor({ manifestJSON }) {
        this.videoElement = null;
        this.sourceBuffer = null;
        
        this.manifestJSON = manifestJSON;
    }

    initializeCodec() {
        this.videoElement = document.getElementById("vid");

        const mediaSourceSupported = !!window.MediaSource

        if(!mediaSourceSupported) {
            alert('Your browser or system does not support this application');
            return;
        }

        const codecSupported = MediaSource.isTypeSupported(this.manifestJSON.codec);

        if(!codecSupported) {
            alert('Your browser or system does not support this application');
            return;
        }
    }
}