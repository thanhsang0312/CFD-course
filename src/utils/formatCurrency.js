const formatNumber = (x = 0) => { 
    return x = x.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
 }

 export default formatNumber;