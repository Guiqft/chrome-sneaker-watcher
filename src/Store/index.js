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

class SneakersStore {
	sneakersIds = [];
	newIds = [];

	setSneakersIds(sneakers) {
		sneakers.forEach((item) => {
			if (!this.sneakersIds.includes(item.originalId)) {
				this.sneakersIds.push(item.originalId);
				this.setNewId(item.originalId);
			}
		});
	}

	resetSneakersIds() {
		this.sneakersIds = [];
	}

	setNewId(productId) {
		this.newIds.push(productId);
	}

	resetNewIds() {
		this.newIds = [];
	}
}

SneakersStore = decorate(SneakersStore, {
	sneakersIds: observable,
	newIds: observable,
	setSneakersIds: action,
	resetSneakersIds: action,
	setNewId: action,
	resetNewIds: action,
});

export const sneakersStore = new SneakersStore();
export const keywordStore = new KeywordStore();
