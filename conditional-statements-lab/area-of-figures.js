figures = (Data) => {
    switch (Data[0]) {
        case 'square' : return (Math.pow(Data[1],2)).toFixed(3);
        case 'rectangle': return (Data[1] * Data[2]).toFixed(3);
        case 'circle': return (Math.PI * Math.pow(Data[1],2)).toFixed(3);
        case 'triangle': return ((Data[1] * Data[2])/2).toFixed(3);  
    }
}
figures(["square", "7", "2.5"])