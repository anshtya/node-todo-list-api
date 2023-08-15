class Todo {
    constructor(id, text) {
        this.id = id;
        this.text = text;
    }

    updateName(text) {
        this.text = text;
    }
}

module.exports = Todo;