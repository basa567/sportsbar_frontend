var api = {
    getsport(){
        var url ="https://sportsbbar.herokuapp.com/getsport";
        return fetch(url).then((res)=>res.json());
    }
};

module.exports=api;