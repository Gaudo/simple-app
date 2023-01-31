import { useEffect, useRef, useState } from 'react'

export const Swipable = (props: {
	onRight?: () => void
	onLeft?: () => void
	children: JSX.Element | JSX.Element[]
}): JSX.Element => {
	const [state, setState] = useState(() => ({
		mouseX: 0,
		dragPosX: 0,
		dragging: false
	}))

	const box = useRef<HTMLDivElement>(null)

	const down = (e: MouseEvent): void => {
		e.preventDefault()

		setState(state => ({ ...state, mouseX: e.x, dragPosX: 0, dragging: true }))
	}

	useEffect(() => {
		if (!state.dragging) {
			return
		}

		const drag = (e: MouseEvent): void => {
			e.preventDefault()

			if (!state.dragging) {
				return
			}

			if (
				(props.onLeft != null && e.x - state.mouseX < 0) ||
				(props.onRight != null && e.x - state.mouseX > 0)
			) {
				setState(state => ({ ...state, dragPosX: e.x - state.mouseX }))
			}
		}

		const up = (e: MouseEvent): void => {
			e.preventDefault()

			const rect = box.current?.getBoundingClientRect()
			if (rect == null) {
				return
			}

			if (e.x - state.mouseX > rect.width * 0.35) {
				setState(state => ({ ...state, dragging: false }))
				document.removeEventListener('mousemove', drag)

				props.onRight?.()
				return
			}

			if (state.mouseX - e.x > rect.width * 0.35) {
				setState(state => ({ ...state, dragging: false }))
				document.removeEventListener('mousemove', drag)

				props.onLeft?.()
				return
			}

			setState(state => ({ ...state, dragPosX: 0, dragging: false }))
			document.removeEventListener('mousemove', drag)
		}

		document.addEventListener('mousemove', drag)
		document.addEventListener('mouseup', up)

		return () => {
			document.removeEventListener('mousemove', drag)
			document.removeEventListener('mouseup', up)
		}
	}, [state.dragging])

	return (
		<>
			<div
				ref={box}
				style={{ transform: `translateX(${state.dragPosX}px)` }}
				className={state.dragging ? '' : 'transition-transform duration-300'}
				onMouseDown={() => down}
			>
				{props.children}
			</div>
		</>
	)
}