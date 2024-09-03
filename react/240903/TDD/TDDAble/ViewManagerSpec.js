describe('클릭 이벤트 처리 및 뷰를 담당하는 함수입니다.', () => {

    it('viewManager 에 textManager가 잘 전달되는지 확인합니다.', () => {
        const textManager = null;
        const elements = {
            btnEl: document.createElement('button'),
            viewerEl: document.createElement('div'),
            inpEl: document.createElement('input')
        };

        const actual = () => new ViewManager(textManager, elements);

        // toThrowError 를 사용하여 에러가 발생하는지 확인합니다.
        expect(actual).toThrowError();
    });


    it('viewManager 에 필요한 요소 세가지가 잘 전달되는지 확인합니다.', () => {
        const textManager = new TextManager();
        const elements = {
            btnEl: null,
            viewerEl: null,
            inpEl: null
        };

        const actual = () => new ViewManager(textManager, elements);

        // toThrowError 를 사용하여 에러가 발생하는지 확인합니다.
        expect(actual).toThrowError();
    });


    const textManager = new TextManager();
    const elements = {
        btnEl: document.createElement('button'),
        viewerEl: document.createElement('div'),
        inpEl: document.createElement('input')
    };
    const viewManager = new ViewManager(textManager, elements);


    it('click 이벤트가 발생했을 때 changeValue 함수가 호출되는지 확인합니다.', () => {
        // 특정 객체의 함수를 감시합니다.
        spyOn(viewManager, 'changeValue');
        elements.btnEl.click();

        expect(viewManager.changeValue).toHaveBeenCalled();
    });

    it('changeValue 함수가 호출되었을 때, updateView 함수가 호출되는지 확인합니다.', () => {
        // 특정 객체의 함수를 감시합니다.
        spyOn(viewManager, 'updateView');
        viewManager.changeValue();

        expect(viewManager.updateView).toHaveBeenCalled();
    });
});