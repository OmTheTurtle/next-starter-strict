import clsx from "clsx";
import * as React from "react";
import type {
	PolymorphicForwardRefExoticComponent,
	PolymorphicPropsWithoutRef,
} from "react-polymorphic-types";

import {
	Button,
	ButtonOwnProps as SecondaryButtonOwnProps,
	ButtonProps as SecondaryButtonProps,
} from "./_Button";

const SecondaryButtonDefaultElement = "button";

export type { SecondaryButtonOwnProps, SecondaryButtonProps };

export const SecondaryButton: PolymorphicForwardRefExoticComponent<
	SecondaryButtonOwnProps,
	typeof SecondaryButtonDefaultElement
> = React.forwardRef(function SecondaryButton<
	T extends React.ElementType = typeof SecondaryButtonDefaultElement
>(
	{
		intent = "neutral",
		className,
		...restProps
	}: PolymorphicPropsWithoutRef<SecondaryButtonOwnProps, T>,
	ref: React.ForwardedRef<React.ElementRef<T>>,
) {
	return (
		<Button<React.ElementType>
			ref={ref}
			intent={intent}
			className={clsx(
				"border-gray-400 dark:border-gray-500",
				{
					"text-black dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700":
						intent === "neutral",
					"text-red-500 dark:text-red-300 hover:bg-red-100 dark:hover:bg-red-900":
						intent === "danger",
				},
				className,
			)}
			{...restProps}
		/>
	);
});
