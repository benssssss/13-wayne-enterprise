function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function wait() {
    await sleep(1500);  // Waits for 1,5 seconds
    document.querySelector('.pre-loader').className += ' hidden';
}

wait();