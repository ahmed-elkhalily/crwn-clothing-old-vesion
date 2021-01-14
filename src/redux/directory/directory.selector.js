import { createSelector } from "reselect"

const homeDirectoryData = (state) => state.directoryData

export const directoryData = createSelector(
    [homeDirectoryData],
    (directoryData) => directoryData.sections
)
