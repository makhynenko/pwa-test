if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/pwa-test/sw.js', { scope: '/pwa-test/' })})}