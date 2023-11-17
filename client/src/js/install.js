const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent Chrome <= 67 from automatically showing the prompt
    event.preventDefault();
    // Stash the event so it can be triggered later.
    window.deferredPrompt = event;
    // Show the install button
    butInstall.style.display = 'block';
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    // Check if there's no deferredPrompt to handle
    if (!window.deferredPrompt) {
        return;
    }
    // Show the prompt
    window.deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    const choiceResult = await window.deferredPrompt.userChoice;
    if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
    } else {
        console.log('User dismissed the A2HS prompt');
    }
    // We no longer need the prompt.  Clear it up.
    window.deferredPrompt = null;
    butInstall.style.display = 'none';
});

// Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('PWA was installed');
    window.deferredPrompt = null;
    butInstall.style.display = 'none';
});