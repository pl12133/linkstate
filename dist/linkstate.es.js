function t(t,e,i,l){for(l=0,e=e.split?e.split("."):e;t&&l<e.length;){ t=t[e[l++]]; }return void 0===t?i:t}

/** Create an Event handler function that sets a given state property.
 *	@param {Component} component	The component whose state should be updated
 *	@param {string} key				A dot-notated key path to update in the component's state
 *	@param {string} eventPath		A dot-notated key path to the value that should be retrieved from the Event or component
 *	@returns {function} linkedStateHandler
 */
function linkState(component, key, eventPath) {
	var path = key.split('.'),
		cache = component.__lsc || (component.__lsc = {});

	return cache[key+eventPath] || (cache[key+eventPath] = function(e) {
		var t$$1 = e && e.target || this,
			state = {},
			obj = state,
			v = typeof eventPath==='string' ? t(e, eventPath) : (t$$1 && t$$1.nodeName) ? (t$$1.type.match(/^che|rad/) ? t$$1.checked : t$$1.value) : e,
			i = 0;
		for ( ; i<path.length-1; i++) {
			obj = obj[path[i]] || (obj[path[i]] = !i && component.state[path[i]] || {});
		}
		obj[path[i]] = v;
		component.setState(state);
	});
}

export default linkState;
//# sourceMappingURL=linkstate.es.js.map
