import { SpinnerContainer, SpinnerOverlay } from "./spinner.style"

const SpinnerComponent = (WrappedComponent) => (isLoading, otherProps) => {
	return isLoading ? (
		<SpinnerOverlay>
			<SpinnerContainer></SpinnerContainer>
		</SpinnerOverlay>
	) : (
		<WrappedComponent {...otherProps} />
	)
}

export default SpinnerComponent
