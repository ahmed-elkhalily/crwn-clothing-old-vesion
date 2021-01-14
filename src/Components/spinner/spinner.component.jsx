import { SpinnerContainer, SpinnerOverlay } from "./spinner.style"

const SpinnerComponent = (WrappedComponent) => (isLoading, otherProps) => {
    console.log(otherProps)
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer></SpinnerContainer>
        </SpinnerOverlay>
    ) : (
        <WrappedComponent {...otherProps} />
    )
}

export default SpinnerComponent
