class ViewManager {
    constructor(textManager, elements) {
        if (textManager.constructor !== TextManager) {
            throw new Error('textManager 객체가 전달되지 않았습니다.');
        }

        if (!elements.btnEl || !elements.viewerEl || !elements.inpEl) {
            throw new Error('세 가지 요소중에 누락된것이 있습니다.');
        }

        this.inpEl = elements.inpEl;
        this.viewerEl = elements.viewerEl;
        this.textManager = textManager;



    }
}