import * as stringSimilarity from 'string-similarity';

/**
 * Calculate similarity between query and address data.
 *
 * @param {String} query An query.
 * @param {Object} addressData Address data.
 * @returns {Number} Similarity ratio.
 */
function calculateSimilarity(query, addressData) {
	let { district, amphoe, province, zipcode } = addressData;
	let similarities = [
		stringSimilarity.compareTwoStrings(query, district),
		stringSimilarity.compareTwoStrings(query, amphoe),
		stringSimilarity.compareTwoStrings(query, province),
		stringSimilarity.compareTwoStrings(query, zipcode.toString())
	];

	return Math.max(...similarities);
}

/**
 * Highlight the word that match the query.
 *
 * @param {String} query A search query.
 * @param {String} text A text string.
 * @returns {String} Highlighted text.
 */
function highlightQuery(query, text) {
	if ((typeof text === 'string') && (text.length > 0)) {
		return text.replace(new RegExp(query, 'ig'), match => `<b>${match}</b>`);
	} else {
		return text;
	}
}

/**
 * Convert address data to string.
 *
 * @param {Object} addressData Address data.
 * @param {String} currentTarget Current input target.
 * @param {String} query A search query.
 * @returns {String} Address as string.
 */
function addressToString(addressData, currentTarget, query) {
	// Clone item to addressComponents. Do not mutate the original item.
	let addressComponents = Object.assign({}, addressData);
	if (addressComponents[currentTarget]) {
		addressComponents[currentTarget] = highlightQuery(query, addressComponents[currentTarget].toString());
	}

	return [
		addressComponents.district,
		addressComponents.amphoe,
		addressComponents.province,
		addressComponents.zipcode
	].join(' » ');
}

export {
	calculateSimilarity,
	highlightQuery,
	addressToString
};