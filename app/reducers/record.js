const INIT_STATE = [
	{id: 1, word: "world word one", partSp: "some part"},
	{id: 2, word: "world word two", partSp: "other part"}

];

export default (state = INIT_STATE, action) => {
	switch (action.type) {
		default: 
			return state;
	}
}