import { observable, action, decorate } from "mobx";
import "mobx-react-lite/batchingForReactDom";

class KeywordStore {
	keywords = {
		nameKeyword: "",
		sizeKeyword: "",
	};

	setKeywords(nameKeywordToSave, sizeKeywordToSave) {
		this.keywords.nameKeyword = nameKeywordToSave;
		this.keywords.sizeKeyword = sizeKeywordToSave;
	}
}

KeywordStore = decorate(KeywordStore, {
	keywords: observable,
	setKeywords: action,
});

export { KeywordStore };
