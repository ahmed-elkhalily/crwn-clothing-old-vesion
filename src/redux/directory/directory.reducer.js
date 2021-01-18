import directoryData from "./directory.data"

const directoryDataSection = directoryData

export const directoryHomeData = (state = directoryDataSection, action) => {
	switch (action.type) {
		default:
			console.log("hi there")
			return state
	}
}
