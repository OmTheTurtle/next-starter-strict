import { PrimaryButton } from "@/components/PrimaryButton";

type ThemingShowcaseProps = {
	children?: React.ReactNode;
};

function ThemingShowcase({ children }: ThemingShowcaseProps) {
	return (
		<>
			<div className="text-gray-700 bg-white">{children}</div>
			<div className="dark text-gray-300 bg-gray-900">{children}</div>
			<div className="dark text-gray-300 bg-black">{children}</div>
		</>
	);
}

type CanvasProps = {
	children?: React.ReactNode;
};

function Canvas({ children }: CanvasProps) {
	return (
		<div className="p-8 space-y-4">
			<p>Sample text to visualize average contrast to the background</p>
			{children}
		</div>
	);
}

export default function Page() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-500">
			<ThemingShowcase>
				<Canvas>
					<div className="space-x-3">
						<PrimaryButton size="sm">Neutral</PrimaryButton>
						<PrimaryButton intent="danger" size="sm">
							Danger
						</PrimaryButton>
					</div>

					<div className="space-x-4">
						<PrimaryButton>Neutral</PrimaryButton>
						<PrimaryButton intent="danger">Danger</PrimaryButton>
					</div>
				</Canvas>
			</ThemingShowcase>
		</div>
	);
}
