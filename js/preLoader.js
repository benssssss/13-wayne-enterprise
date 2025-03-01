function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function wait() {
    await sleep(1500);  // Waits for 3 seconds
    document.querySelector('.pre-loader').className += ' hidden';
}

wait();