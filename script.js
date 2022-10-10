let ObjectOfArray=
{
    Array1:["JavaScript","Python","Ruby","Go","languages","isChallenging","isRewarding","difficulty","isFun"],
    Array2:["JavaScript","Python","Ruby","Go"],
    Array3:[true,true,7,true],
    showArray()
    {
        this.Array1.forEach(function(item){
            console.log(item);
        });
        console.log(this.Array2);
        this.Array3.forEach(function(item)
        {
            console.log(item);
        });
    }
}
ObjectOfArray.showArray();