describe('텍스트 관리자 테스트입니다.', () => {
    const textManager = new TextManager();

    it('텍스트 관리자의 getValue 를 테스트합니다.', () => {
        const initValue = textManager.getValue();

        expect(textManager.getValue()).toBe(initValue);
    });

    it('텍스트 관리자의 setValue 를 테스트합니다.', () => {
        const newValue = { data: 'hello weniv!!' };
        textManager.setValue(newValue);

        expect(textManager.getValue()).toBe(newValue.data);
    });
}
);