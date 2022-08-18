function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
  
    if (budget <= 100) {
      console.log(`Somewhere in Bulgaria`);
      if (season === "summer") {
        let sum = budget * 0.3;
        console.log(`Camp - ${sum.toFixed(2)}`);
      } else {
        let sum = budget * 0.7;
        console.log(`Hotel - ${sum.toFixed(2)} `);
      }
    } else if (budget <= 1000) {
      console.log(`Somewhere in Balkans`);
      if (season === "summer") {
        let sum = budget * 0.4;
        console.log(`Camp - ${sum.toFixed(2)}`);
      } else {
        let sum = budget * 0.8;
        console.log(`Hotel - ${sum.toFixed(2)}`);
      }
    } else {
      console.log(`Somewhere in Europe`);
      let sum = budget * 0.9;
      console.log(`Hotel - ${sum.toFixed(2)}`);
    }
  }
  journey(["1500", "summer"]);