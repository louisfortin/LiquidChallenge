
import articles from '../data/articles.json';
import whiskeys from '../data/whiskies.json';

// mock data
// fake it's fetched from regular back-end

export const fetchWhiskeys = (filter) => new Promise((resolve) => {
	setTimeout(() => resolve(
		[ ...whiskeys.filter((whiskey) => (
			!filter.region || whiskey.region === filter.region
		))]
	), 300)
});

export const fetchWhiskey = (id) => new Promise((resolve) => {
	setTimeout(() => resolve(whiskeys.find((w => w.title.toLowerCase() === id))), 300)
});

export const fetchArticles = () => new Promise((resolve) => {
	setTimeout(() => resolve([...articles]), 300)
});
