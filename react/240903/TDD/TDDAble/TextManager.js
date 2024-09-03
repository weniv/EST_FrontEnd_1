class TextManager {
    constructor() {
        this.value = { data: 'hello ORMI!!' };
    }

    getValue() {
        return this.value.data;
    }

    setValue(newValue) {
        this.value = newValue;
    }
};