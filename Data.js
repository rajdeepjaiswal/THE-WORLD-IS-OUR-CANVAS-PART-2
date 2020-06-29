class Data{
    constructor(){
        this.drawing = null;
    }
    saveDrawing(){
        var ref = database.ref('Drawing');
        var data={
            name: "Rajdeep jaiswal",
            drawing :this.drawing
        }
        ref.push(data);
    }
}