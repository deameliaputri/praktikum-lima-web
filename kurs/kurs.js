function kurs(set){
    nilai = document.getElementById('add').value;
    if (set == 'us'){
        var result = nilai * 9.915;
    }
    else if (set == 'singapore'){
        var result = nilai * 14.472;
    }
    else if(set == 'malasyia'){
        var result = nilai * 874;
    }
    else if(set == 'jepan'){
        var result = nilai * 120;
    }
    else if(set == 'euro'){
        var result = nilai * 15.888;
    }
    else if (set == 'arab'){
        var result = nilai * 3.592;
    }
    document.getElementById('result').value = result;
}