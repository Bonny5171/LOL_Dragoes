function sleep(timeMs) {
  return new Promise((resolve) => setTimeout(resolve, timeMs));
}

async function loopInfinito() {
  while(true){
    console.log("In loop: Dragoes")
    await sleep(1000);
  }
}

loopInfinito();